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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ESTADO
let currentLang = 'es';
let answers = {}; 
let currentBlock = 'intro'; // intro -> block1 -> block2 (rama) -> block3 (final) -> results

// REFERENCIAS DOM
const container = document.getElementById('survey-container');
const introView = document.getElementById('intro-view');
const surveyView = document.getElementById('survey-view');
const resultsView = document.getElementById('results-container');

// DEFINICIÓN DE BLOQUES (Agrupamos preguntas)
const blocks = {
    block1: ['q1', 'q2', 'q3'],
    // Ramas dinámicas
    branch_a: ['q4a', 'q5a', 'q6a'],
    branch_b: ['q4b', 'q5b', 'q6b'],
    branch_c: ['q4c', 'q5c', 'q6c'],
    branch_d: ['q4d', 'q5d', 'q6d'],
    branch_e: ['q4e', 'q5e'], // q4e y q5e
    // Final
    block3: ['q7', 'q8']
};

// ==========================================
// 1. INICIO
// ==========================================
window.startSurvey = () => {
    introView.classList.add('hidden');
    surveyView.classList.remove('hidden');
    renderBlock('block1');
}

window.setLanguage = (lang) => {
    currentLang = lang;
    // Actualizar textos estáticos si fuera necesario
    document.getElementById('intro-title').innerText = translations.intro_title[lang];
    document.getElementById('intro-text').innerText = translations.intro_desc[lang];
    document.getElementById('start-btn').innerText = translations.btn_start[lang];
}

// ==========================================
// 2. RENDERIZADO DE BLOQUES
// ==========================================
function renderBlock(blockName) {
    currentBlock = blockName;
    const qIds = blocks[blockName];
    const t = translations;
    
    let html = '';
    
    qIds.forEach(id => {
        const qData = getQuestionStructure(id);
        
        html += `<div class="question-block" id="block-${id}">`;
        html += `<div class="question-title">${t[id + '_title'][currentLang] || t[id + '_title']['es']}</div>`;
        
        html += `<div class="options-grid">`;
        
        // Renderizar opciones
        qData.options.forEach(opt => {
            // Chequeamos si ya estaba seleccionada (para repintar)
            const isSelected = answers[id] === opt.val ? 'selected' : '';
            const label = t[id + '_opt_' + opt.val] ? (t[id + '_opt_' + opt.val][currentLang] || t[id + '_opt_' + opt.val]['es']) : opt.customLabel;
            
            html += `
                <div class="option-btn ${isSelected}" onclick="selectOption('${id}', '${opt.val}', this)">
                    ${label}
                </div>
            `;
        });

        // Renderizar input extra si tiene
        if(qData.hasInput) {
            html += `<textarea id="input-${id}" rows="2" placeholder="${t['other'][currentLang]}" oninput="saveInput('${id}', this.value)"></textarea>`;
        }

        html += `</div></div>`; // Cierre grid y block
    });

    // Botón Continuar
    const btnText = blockName === 'block3' ? t.btn_finish[currentLang] : t.btn_continue[currentLang];
    html += `<button class="btn-next" onclick="nextBlock()">${btnText}</button>`;

    container.innerHTML = html;
    window.scrollTo(0,0);
}

// ==========================================
// 3. INTERACCIÓN Y LÓGICA
// ==========================================
window.selectOption = (qId, val, element) => {
    // Guardar respuesta
    answers[qId] = val;
    
    // Efecto visual (quitar selected a hermanos, poner a este)
    const parent = element.parentElement;
    const siblings = parent.querySelectorAll('.option-btn');
    siblings.forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
};

window.saveInput = (qId, text) => {
    answers[qId + '_text'] = text;
};

window.nextBlock = () => {
    // 1. Validar que todo el bloque actual esté respondido
    const currentQIds = blocks[currentBlock];
    const missing = currentQIds.find(id => !answers[id]);
    
    if(missing) {
        alert("⚠️ Please answer all questions / Por favor responde todas las preguntas");
        document.getElementById(`block-${missing}`).scrollIntoView({behavior: 'smooth'});
        return;
    }

    // 2. Lógica de saltos
    if (currentBlock === 'block1') {
        // Miramos qué respondió en la Q3 para elegir rama
        const branchMap = { 'a': 'branch_a', 'b': 'branch_b', 'c': 'branch_c', 'd': 'branch_d', 'e': 'branch_e' };
        const next = branchMap[answers['q3']] || 'branch_e';
        renderBlock(next);
    } 
    else if (currentBlock.startsWith('branch_')) {
        // Las ramas siempre van al final
        renderBlock('block3');
    }
    else if (currentBlock === 'block3') {
        // Fin
        submitData();
    }
};

// ==========================================
// 4. DATOS DE LAS PREGUNTAS (ESTRUCTURA)
// ==========================================
function getQuestionStructure(id) {
    // Esencialmente lo mismo, pero adaptado para bloques
    switch(id) {
        case 'q1': return { options: [{val:'a'}, {val:'b'}, {val:'c'}] };
        case 'q2': return { options: [{val:'a'}, {val:'b'}, {val:'c'}] };
        case 'q3': return { options: [{val:'a'}, {val:'b'}, {val:'c'}, {val:'d'}, {val:'e'}] };
        
        // Ramas
        case 'q4a': return { options: [{val:'a'}, {val:'b'}, {val:'c'}], hasInput:true };
        case 'q5a': return { options: [{val:'a'}, {val:'b'}] };
        case 'q6a': return { options: [{val:'a'}, {val:'b'}] };

        case 'q4b': return { options: [{val:'a'}, {val:'b'}, {val:'c'}] };
        case 'q5b': return { options: [{val:'a'}, {val:'b'}, {val:'c'}] };
        case 'q6b': return { options: [{val:'a'}, {val:'b'}] };

        case 'q4c': return { options: [{val:'a'}, {val:'b'}, {val:'c'}, {val:'d'}] };
        case 'q5c': return { options: [{val:'a'}, {val:'b'}, {val:'c'}, {val:'d'}] };
        case 'q6c': return { options: [{val:'a'}, {val:'b'}, {val:'c'}] };

        case 'q4d': return { options: [{val:'a'}, {val:'b'}, {val:'c'}] };
        case 'q5d': return { options: [{val:'a'}, {val:'b'}, {val:'c'}] };
        case 'q6d': return { options: [{val:'a'}, {val:'b'}, {val:'c'}] };

        case 'q4e': return { options: [{val:'a'}, {val:'b'}, {val:'c'}], hasInput:true };
        case 'q5e': return { options: [{val:'a'}, {val:'b'}, {val:'c'}] };

        case 'q7': 
            let opts = [];
            for(let i=1; i<=10; i++) opts.push({val:i, customLabel: i});
            return { options: opts };
        case 'q8': return { options: [], hasInput: true }; // Solo texto
        
        default: return { options: [] };
    }
}

// ==========================================
// 5. ENVÍO Y GRÁFICAS
// ==========================================
async function submitData() {
    surveyView.classList.add('hidden');
    document.getElementById('loading').classList.remove('hidden');

    // Aquí iría tu lógica de LocalStorage y Firebase (igual que antes)
    // ... SIMULADO:
    try {
         answers.timestamp = new Date();
         await addDoc(collection(db, "survey_responses"), answers);
         localStorage.setItem('aerko_voted', 'true');
         showResults();
    } catch(e) {
        console.error(e);
        alert("Error de conexión");
    }
}

async function showResults() {
    document.getElementById('loading').classList.add('hidden');
    resultsView.classList.remove('hidden');
    
    // Aquí hacemos la consulta real a Firebase
    const q = query(collection(db, "survey_responses"), orderBy("timestamp", "desc"), limit(100));
    const querySnapshot = await getDocs(q);
    
    // Calculamos stats simples de la Q1 como ejemplo
    let counts = { a:0, b:0, c:0, total:0 };
    querySnapshot.forEach(doc => {
        const d = doc.data();
        counts.total++;
        if(d.q1) counts[d.q1]++;
    });

    const getPct = (val) => counts.total > 0 ? Math.round((val/counts.total)*100) : 0;

    const html = `
        <h3 class="question-title">GLOBAL STATS: TRAINING LEVEL</h3>
        
        <div class="stat-item">
            <div class="stat-label">BEGINNER (${getPct(counts.a)}%)</div>
            <div class="stat-bar-bg"><div class="stat-bar-fill" style="width:${getPct(counts.a)}%"></div></div>
        </div>
        
        <div class="stat-item">
            <div class="stat-label">INTERMEDIATE (${getPct(counts.b)}%)</div>
            <div class="stat-bar-bg"><div class="stat-bar-fill" style="width:${getPct(counts.b)}%"></div></div>
        </div>
        
        <div class="stat-item">
            <div class="stat-label">ADVANCED (${getPct(counts.c)}%)</div>
            <div class="stat-bar-bg"><div class="stat-bar-fill" style="width:${getPct(counts.c)}%"></div></div>
        </div>
        
        <p style="margin-top:2rem; font-size:0.8rem;">BASED ON LAST ${counts.total} ENTRIES.</p>
    `;

    document.getElementById('stats-content').innerHTML = html;
}