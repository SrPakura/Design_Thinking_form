// --- IMPORTANTE: IMPORTAMOS FIREBASE DESDE CDN (NO HACE FALTA NODE.JS) ---
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, limit, orderBy } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// ==========================================
// 1. CONFIGURACIÓN DE FIREBASE (¡PON TUS DATOS!)
// ==========================================
const firebaseConfig = {
  apiKey: "AIzaSyC0Qn4gMNK10e2B5Hyi_pAPiu2alAYOKio",
  authDomain: "design-thinking-form.firebaseapp.com",
  projectId: "design-thinking-form",
  storageBucket: "design-thinking-form.firebasestorage.app",
  messagingSenderId: "611337869132",
  appId: "1:611337869132:web:24f63173d456cde5b6e1e9s"
};

// Inicializamos Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ==========================================
// 2. ESTADO DE LA APLICACIÓN
// ==========================================
let currentLang = navigator.language.startsWith('es') ? 'es' : 'en'; // Detecta idioma
let answers = {}; // Aquí guardamos las respuestas temporalmente
let currentQuestionId = 'q1';

// Referencias al DOM
const container = document.getElementById('survey-container');
const progressBar = document.getElementById('progress');

// ==========================================
// 3. LÓGICA DEL CUESTIONARIO (EL MAPA)
// ==========================================
function renderQuestion(id) {
    container.innerHTML = ''; // Limpiar
    currentQuestionId = id;
    
    // Calcular progreso (Simplificado para demo)
    const steps = ['q1', 'q2', 'q3', 'branch', 'final']; 
    // ... logica de progreso visual ...
    
    // Obtener textos
    const t = translations; 
    const qData = getQuestionStructure(id); // Función auxiliar abajo

    if (!qData) {
        showSubmitScreen();
        return;
    }

    // HTML de la pregunta
    const html = `
        <div class="question-title">${t[id + '_title'][currentLang] || t[id + '_title']['es']}</div>
        <div class="options-grid">
            ${qData.options.map(opt => `
                <button class="option-btn" onclick="handleAnswer('${id}', '${opt.val}', '${opt.next}')">
                    <span style="color:var(--acid-green); font-weight:bold;">></span> 
                    ${t[id + '_opt_' + opt.val] ? (t[id + '_opt_' + opt.val][currentLang] || t[id + '_opt_' + opt.val]['es']) : opt.customLabel}
                </button>
            `).join('')}
            
            ${qData.hasInput ? `
                <textarea id="custom-input" rows="3" placeholder="${t['other'][currentLang]}"></textarea>
                <button class="btn-acid" style="margin-top:10px; cursor:pointer; font-weight:bold; border:1px solid black; background:var(--acid-green); padding:10px;" onclick="handleCustomInput('${id}', '${qData.nextFromInput}')">OK</button>
            ` : ''}
        </div>
    `;
    
    container.innerHTML = html;
}

// DEFINICIÓN DE FLUJO Y OPCIONES
function getQuestionStructure(id) {
    // Retorna { options: [{val:'a', next:'q2'}], hasInput: false }
    switch(id) {
        case 'q1': return { options: [{val:'a', next:'q2'}, {val:'b', next:'q2'}, {val:'c', next:'q2'}] };
        case 'q2': return { options: [{val:'a', next:'q3'}, {val:'b', next:'q3'}, {val:'c', next:'q3'}] };
        case 'q3': return { options: [
            {val:'a', next:'q4a'}, // Rama Nutrición
            {val:'b', next:'q4b'}, // Rama Entreno
            {val:'c', next:'q4c'}, // Rama Fotos
            {val:'d', next:'q4d'}, // Rama Varias
            {val:'e', next:'q4e'}  // Rama Nada
        ]};
        
        // RAMA A
        case 'q4a': return { options: [{val:'a', next:'q5a'}, {val:'b', next:'q5a'}, {val:'c', next:'q5a'}], hasInput:true, nextFromInput:'q5a' };
        case 'q5a': return { options: [{val:'a', next:'q6a'}, {val:'b', next:'q6a'}] };
        case 'q6a': return { options: [{val:'a', next:'q7'}, {val:'b', next:'q7'}] }; // CONVERGENCIA

        // RAMA B
        case 'q4b': return { options: [{val:'a', next:'q5b'}, {val:'b', next:'q5b'}, {val:'c', next:'q5b'}] };
        case 'q5b': return { options: [{val:'a', next:'q6b'}, {val:'b', next:'q6b'}, {val:'c', next:'q6b'}] };
        case 'q6b': return { options: [{val:'a', next:'q7'}, {val:'b', next:'q7'}] };

        // RAMA C
        case 'q4c': return { options: [{val:'a', next:'q5c'}, {val:'b', next:'q5c'}, {val:'c', next:'q5c'}, {val:'d', next:'q5c'}] };
        case 'q5c': return { options: [{val:'a', next:'q6c'}, {val:'b', next:'q6c'}, {val:'c', next:'q6c'}, {val:'d', next:'q6c'}] };
        case 'q6c': return { options: [{val:'a', next:'q7'}, {val:'b', next:'q7'}, {val:'c', next:'q7'}] };

        // RAMA D
        case 'q4d': return { options: [{val:'a', next:'q5d'}, {val:'b', next:'q5d'}, {val:'c', next:'q5d'}] };
        case 'q5d': return { options: [{val:'a', next:'q6d'}, {val:'b', next:'q6d'}, {val:'c', next:'q6d'}] };
        case 'q6d': return { options: [{val:'a', next:'q7'}, {val:'b', next:'q7'}, {val:'c', next:'q7'}] };

        // RAMA E
        case 'q4e': return { options: [{val:'a', next:'q5e'}, {val:'b', next:'q5e'}, {val:'c', next:'q5e'}], hasInput:true, nextFromInput:'q5e' };
        case 'q5e': return { options: [{val:'a', next:'q7'}, {val:'b', next:'q7'}, {val:'c', next:'q7'}] };

        // FINAL
        case 'q7': 
            // Escala 1-10 manual
            let opts = [];
            for(let i=1; i<=10; i++) opts.push({val:i, next:'q8', customLabel: i});
            return { options: opts };
        
        case 'q8': return { options: [], hasInput: true, nextFromInput: 'submit' };
        
        default: return null;
    }
}

// ==========================================
// 4. MANEJO DE EVENTOS
// ==========================================
window.handleAnswer = (qId, val, nextId) => {
    answers[qId] = val; // Guardamos "a", "b", "10", etc.
    if(nextId === 'submit') submitData();
    else renderQuestion(nextId);
}

window.handleCustomInput = (qId, nextId) => {
    const txt = document.getElementById('custom-input').value;
    answers[qId + '_text'] = txt; // Guardamos texto extra
    if(nextId === 'submit') submitData();
    else renderQuestion(nextId);
}

window.setLanguage = (lang) => {
    currentLang = lang;
    renderQuestion(currentQuestionId);
}

// ==========================================
// 5. ENVÍO A FIREBASE Y ANTI-DUPLICADOS
// ==========================================
async function submitData() {
    container.classList.add('hidden');
    document.getElementById('loading').classList.remove('hidden');

    // 1. Check LocalStorage
    if(localStorage.getItem('aerko_voted')) {
        alert("ALREADY_VOTED_LOCALLY // Thank you for your enthusiasm.");
        showResults(); // Vamos directo a resultados
        return;
    }

    try {
        // Añadir fecha
        answers.timestamp = new Date();
        
        // Escribir en Firestore
        await addDoc(collection(db, "survey_responses"), answers);
        
        // Marcar como votado
        localStorage.setItem('aerko_voted', 'true');
        
        showResults();
        
    } catch (e) {
        console.error("Error adding document: ", e);
        alert("ERROR_UPLOADING. TRY_AGAIN.");
        container.classList.remove('hidden');
        document.getElementById('loading').classList.add('hidden');
    }
}

// ==========================================
// 6. RESULTADOS (ASCII MODE)
// ==========================================
async function showResults() {
    document.getElementById('loading').classList.add('hidden');
    const resContainer = document.getElementById('results-container');
    resContainer.classList.remove('hidden');
    
    const terminal = document.getElementById('terminal-output');
    terminal.innerHTML = "> FETCHING_DATA... \n";

    // Traemos las últimas 50 respuestas para hacer estadística rápida
    const q = query(collection(db, "survey_responses"), orderBy("timestamp", "desc"), limit(50));
    const querySnapshot = await getDocs(q);
    
    let stats = { total: 0, q1_a: 0, q1_b: 0, q1_c: 0 };

    querySnapshot.forEach((doc) => {
        const d = doc.data();
        stats.total++;
        if(d.q1 === 'a') stats.q1_a++;
        if(d.q1 === 'b') stats.q1_b++;
        if(d.q1 === 'c') stats.q1_c++;
    });

    // Función auxiliar para dibujar barras
    const bar = (count, total) => {
        const pct = total > 0 ? Math.round((count/total)*100) : 0;
        const chars = Math.round(pct / 5); // 20 chars = 100%
        return "█".repeat(chars) + "░".repeat(20-chars) + ` (${pct}%)`;
    };

    // Renderizamos el texto ASCII
    terminal.innerHTML += `> SAMPLE_SIZE: ${stats.total} (LAST_50)\n\n`;
    terminal.innerHTML += `Q1: TRAINING_STATUS\n`;
    terminal.innerHTML += `[BEGINNER] ${bar(stats.q1_a, stats.total)}\n`;
    terminal.innerHTML += `[INTERMED] ${bar(stats.q1_b, stats.total)}\n`;
    terminal.innerHTML += `[ADVANCED] ${bar(stats.q1_c, stats.total)}\n`;
    terminal.innerHTML += `\n> FULL_LOGS_AVAILABLE_IN_CORE...`;
}

// INICIO
renderQuestion('q1');