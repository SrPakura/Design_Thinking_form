import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, limit, orderBy } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// ==========================================
// 1. CONFIGURACIÓN DE FIREBASE (YA PUESTA)
// ==========================================
const firebaseConfig = {
  apiKey: "AIzaSyC0Qn4gMNK10e2B5Hyi_pAPiu2alAYOKio",
  authDomain: "design-thinking-form.firebaseapp.com",
  projectId: "design-thinking-form",
  storageBucket: "design-thinking-form.firebasestorage.app",
  messagingSenderId: "611337869132",
  appId: "1:611337869132:web:24f63173d456cde5b6e1e9s"
};

// Inicializamos Firebase con control de errores
let app, db;
try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
} catch (e) {
    console.error("Error iniciando Firebase:", e);
}

// ESTADO
let currentLang = 'es';
let answers = {}; 
let currentBlock = 'intro';

// REFERENCIAS DOM
const container = document.getElementById('survey-container');
const introView = document.getElementById('intro-view');
const surveyView = document.getElementById('survey-view');
const resultsView = document.getElementById('results-container');

// DEFINICIÓN DE BLOQUES
const blocks = {
    block1: ['q1', 'q2', 'q3'],
    branch_a: ['q4a', 'q5a', 'q6a'],
    branch_b: ['q4b', 'q5b', 'q6b'],
    branch_c: ['q4c', 'q5c', 'q6c'],
    branch_d: ['q4d', 'q5d', 'q6d'],
    branch_e: ['q4e', 'q5e'], 
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
    if(document.getElementById('intro-title')) {
        document.getElementById('intro-title').innerText = translations.intro_title[lang];
        document.getElementById('intro-text').innerText = translations.intro_desc[lang];
        document.getElementById('start-btn').innerText = translations.btn_start[lang];
    }
    // Si estamos en mitad de la encuesta, repintar bloque para ver cambios
    if(!surveyView.classList.contains('hidden')) {
        renderBlock(currentBlock);
    }
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
        
        // Añadimos IDs para poder marcar errores en rojo luego
        html += `<div class="question-block" id="block-${id}">`;
        html += `<div class="question-title" id="title-${id}">${t[id + '_title'][currentLang] || t[id + '_title']['es']}</div>`;
        
        html += `<div class="options-grid">`;
        
        // Renderizar opciones (Botones)
        qData.options.forEach(opt => {
            const isSelected = answers[id] === opt.val ? 'selected' : '';
            const label = t[id + '_opt_' + opt.val] ? (t[id + '_opt_' + opt.val][currentLang] || t[id + '_opt_' + opt.val]['es']) : opt.customLabel;
            
            html += `
                <div class="option-btn ${isSelected}" onclick="selectOption('${id}', '${opt.val}', this)">
                    ${label}
                </div>
            `;
        });

        // Renderizar input (Texto)
        if(qData.hasInput) {
            const savedText = answers[id + '_text'] || '';
            html += `<textarea id="input-${id}" rows="2" placeholder="${t['other'][currentLang]}" oninput="saveInput('${id}', this.value)">${savedText}</textarea>`;
        }

        html += `</div></div>`; 
    });

    const btnText = blockName === 'block3' ? t.btn_finish[currentLang] : t.btn_continue[currentLang];
    html += `<button class="btn-next" onclick="nextBlock()">${btnText}</button>`;

    container.innerHTML = html;
    window.scrollTo(0,0);
}

// ==========================================
// 3. INTERACCIÓN Y LÓGICA (AQUÍ ESTABA EL ERROR)
// ==========================================
window.selectOption = (qId, val, element) => {
    answers[qId] = val;
    
    // Quitar error visual si lo hubiera (resetear color)
    const titleEl = document.getElementById(`title-${qId}`);
    if(titleEl) {
        titleEl.style.border = "1px solid var(--ink-black)";
        titleEl.style.color = "var(--ink-black)";
    }

    // Efecto visual de selección
    const parent = element.parentElement;
    const siblings = parent.querySelectorAll('.option-btn');
    siblings.forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
};

window.saveInput = (qId, text) => {
    answers[qId + '_text'] = text;
    
    // Quitar error visual al escribir
    const titleEl = document.getElementById(`title-${qId}`);
    if(titleEl) {
        titleEl.style.border = "1px solid var(--ink-black)";
        titleEl.style.color = "var(--ink-black)";
    }
};

window.nextBlock = () => {
    const currentQIds = blocks[currentBlock];
    
    // --- VALIDACIÓN CORREGIDA ---
    const missing = currentQIds.find(id => {
        // ¿Tiene una opción marcada?
        const hasOption = answers[id] !== undefined;
        // ¿Tiene texto escrito?
        const hasText = answers[id + '_text'] && answers[id + '_text'].trim().length > 0;
        
        // Si NO tiene opción Y NO tiene texto, falta responder.
        return !hasOption && !hasText;
    });
    
    if(missing) {
        alert("⚠️ Por favor responde todas las preguntas / Please answer all questions");
        
        // MARCAR EN ROJO LA PREGUNTA QUE FALTA
        const missingEl = document.getElementById(`title-${missing}`);
        if(missingEl) {
            missingEl.style.border = "2px solid red";
            missingEl.style.color = "red";
            missingEl.scrollIntoView({behavior: 'smooth', block: 'center'});
        }
        return;
    }

    // Lógica de saltos (Ramas)
    if (currentBlock === 'block1') {
        const branchMap = { 'a': 'branch_a', 'b': 'branch_b', 'c': 'branch_c', 'd': 'branch_d', 'e': 'branch_e' };
        const next = branchMap[answers['q3']] || 'branch_e';
        renderBlock(next);
    } 
    else if (currentBlock.startsWith('branch_')) {
        renderBlock('block3');
    }
    else if (currentBlock === 'block3') {
        submitData();
    }
};

// ==========================================
// 4. DATOS
// ==========================================
function getQuestionStructure(id) {
    switch(id) {
        case 'q1': return { options: [{val:'a'}, {val:'b'}, {val:'c'}] };
        case 'q2': return { options: [{val:'a'}, {val:'b'}, {val:'c'}] };
        case 'q3': return { options: [{val:'a'}, {val:'b'}, {val:'c'}, {val:'d'}, {val:'e'}] };
        
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
        // FIX: Q8 es solo texto, options vacío
        case 'q8': return { options: [], hasInput: true }; 
        
        default: return { options: [] };
    }
}

// ==========================================
// 5. ENVÍO
// ==========================================
async function submitData() {
    surveyView.classList.add('hidden');
    document.getElementById('loading').classList.remove('hidden');

    try {
         answers.timestamp = new Date();
         if(db) {
            await addDoc(collection(db, "survey_responses"), answers);
         }
         localStorage.setItem('aerko_voted', 'true');
         showResults();
    } catch(e) {
        console.error("Error al enviar:", e);
        // Si falla (por ejemplo bloqueador de anuncios), mostramos resultados igual
        showResults(); 
    }
}

async function showResults() {
    document.getElementById('loading').classList.add('hidden');
    resultsView.classList.remove('hidden');
    
    // Stats falsas por defecto (por si falla la carga)
    let counts = { a:1, b:1, c:1, total:3 };
    
    try {
        if(db) {
            const q = query(collection(db, "survey_responses"), orderBy("timestamp", "desc"), limit(100));
            const querySnapshot = await getDocs(q);
            
            // Reiniciar contadores si hay datos reales
            if(!querySnapshot.empty) {
                counts = { a:0, b:0, c:0, total:0 };
                querySnapshot.forEach(doc => {
                    const d = doc.data();
                    counts.total++;
                    if(d.q1) counts[d.q1]++;
                });
            }
        }
    } catch(e) { console.log("Modo offline o error stats"); }

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
        
        <a href="https://srpakura.github.io/Landing_page_TFM/" class="btn-next" style="display:block; text-align:center; text-decoration:none; margin-top:30px;">
            [ VOLVER A LANDING ]
        </a>
    `;

    document.getElementById('stats-content').innerHTML = html;
}
