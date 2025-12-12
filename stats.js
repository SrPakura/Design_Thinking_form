import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, getDocs, query, orderBy, limit } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// 1. Reusamos tu config (Idealmente debería estar en un archivo config.js separado, pero lo pego aquí)
const firebaseConfig = {
  apiKey: "AIzaSyC0Qn4gMNK10e2B5Hyi_pAPiu2alAYOKio",
  authDomain: "design-thinking-form.firebaseapp.com",
  projectId: "design-thinking-form",
  storageBucket: "design-thinking-form.firebasestorage.app",
  messagingSenderId: "611337869132",
  appId: "1:611337869132:web:24f63173d456cde5b6e1e9s"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Estado
let allData = [];
let currentLang = (navigator.language || 'en').slice(0, 2);
if(!['es','de'].includes(currentLang)) currentLang = 'en';
let chartInstances = []; // Para poder destruir y repintar gráficas al cambiar idioma

// Mapeo de preguntas a categorías (para los botones de filtro)
const categories = {
    nutri: ['q4a', 'q5a', 'q6a'],
    train: ['q4b', 'q5b', 'q6b'],
    prog:  ['q4c', 'q5c', 'q6c'],
    eco:   ['q4d', 'q5d', 'q6d', 'q6e'], // q6e o similares
    intro: ['q1', 'q2', 'q3', 'q7']
};

// Inicializar
window.onload = async () => {
    await fetchData();
    renderCharts('all');
};

// Función global para cambiar idioma
window.setStatsLanguage = (lang) => {
    currentLang = lang;
    // Repintar gráficas con nuevos textos
    renderCharts(document.querySelector('#branch-menu .selected').innerText.toLowerCase() === 'all' ? 'all' : document.querySelector('#branch-menu .selected').innerText.toLowerCase());
};

// Función global para filtrar
window.filterCharts = (category) => {
    // UI botones
    document.querySelectorAll('#branch-menu button').forEach(b => b.classList.remove('selected'));
    event.target.classList.add('selected');
    renderCharts(category);
};

async function fetchData() {
    try {
        // Leemos las últimas 500 respuestas para no saturar
        const q = query(collection(db, "survey_responses"), orderBy("timestamp", "desc"), limit(500));
        const snapshot = await getDocs(q);
        snapshot.forEach(doc => allData.push(doc.data()));
        document.getElementById('loading-stats').style.display = 'none';
    } catch(e) {
        console.error(e);
        document.getElementById('loading-stats').innerText = "ERROR_LOADING_DATA";
    }
}

function renderCharts(filter) {
    const container = document.getElementById('charts-container');
    container.innerHTML = '';
    
    // Limpiar instancias previas de Chart.js
    chartInstances.forEach(chart => chart.destroy());
    chartInstances = [];

    // Definir qué preguntas mostrar
    let keysToShow = [];
    if(filter === 'all') {
        // Unimos todas las arrays de categories
        Object.values(categories).forEach(arr => keysToShow.push(...arr));
    } else {
        keysToShow = categories[filter] || [];
    }

    // Filtrar duplicados y ordenar
    keysToShow = [...new Set(keysToShow)].sort();

    keysToShow.forEach(qId => {
        // Solo procesamos si existe traducción (evitamos preguntas abiertas tipo q8)
        if(translations[qId + '_title']) {
            createChartCard(qId, container);
        }
    });
}

function createChartCard(qId, container) {
    // 1. Contar respuestas
    const counts = {};
    allData.forEach(resp => {
        const val = resp[qId];
        if(val) {
            counts[val] = (counts[val] || 0) + 1;
        }
    });

    if(Object.keys(counts).length === 0) return; // Si nadie respondió a esta, no mostrar

    // 2. Preparar datos para Chart.js
    const labels = [];
    const dataPoints = [];
    const backgroundColors = [
        '#CCFF00', // Acid Green
        '#FF4D00', // Safety Orange
        '#B0B0B0', // Gray
        '#FFFFFF', // White
        '#050505'  // Black
    ];

    Object.keys(counts).sort().forEach(key => {
        // Intentar buscar el texto traducido de la opción
        // translations['q1_opt_a']['es']
        let labelText = key;
        const transKey = `${qId}_opt_${key}`;
        
        if(translations[transKey] && translations[transKey][currentLang]) {
            // Cortar texto si es muy largo para la gráfica
            labelText = translations[transKey][currentLang].substring(0, 25) + '...';
        } else if (key.length > 2) {
             // Si es respuesta custom numérica o algo así
             labelText = key;
        }
        
        labels.push(labelText);
        dataPoints.push(counts[key]);
    });

    // 3. Crear HTML
    const card = document.createElement('div');
    card.className = 'chart-card';
    
    const title = document.createElement('div');
    title.className = 'chart-title';
    title.innerText = translations[qId + '_title'][currentLang] || qId;
    
    const canvasContainer = document.createElement('div');
    canvasContainer.style.position = 'relative';
    canvasContainer.style.height = '250px'; // Altura fija para consistencia

    const canvas = document.createElement('canvas');
    canvasContainer.appendChild(canvas);
    
    card.appendChild(title);
    card.appendChild(canvasContainer);
    container.appendChild(card);

    // 4. Generar Gráfica
    const ctx = canvas.getContext('2d');
    const newChart = new Chart(ctx, {
        type: 'doughnut', // 'pie' o 'doughnut'
        data: {
            labels: labels,
            datasets: [{
                data: dataPoints,
                backgroundColor: backgroundColors,
                borderColor: '#050505',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#050505',
                        font: { family: "'JetBrains Mono', monospace", size: 10 }
                    }
                }
            }
        }
    });
    
    chartInstances.push(newChart);
}
