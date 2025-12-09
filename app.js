import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, limit, orderBy } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// ==========================================
// 1. CONFIGURACIÓN (TUS CLAVES REALES)
// ==========================================
const firebaseConfig = {
  apiKey: "AIzaSyC0Qn4gMNK10e2B5Hyi_pAPiu2alAYOKio",
  authDomain: "design-thinking-form.firebaseapp.com",
  projectId: "design-thinking-form",
  storageBucket: "design-thinking-form.firebasestorage.app",
  messagingSenderId: "611337869132",
  appId: "1:611337869132:web:24f63173d456cde5b6e1e9s"
};

let app, db;
try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
} catch (e) {
    console.error("Firebase init error:", e);
}

// ESTADO
let currentLang = 'es';
let answers = {}; 
let currentBlock = 'intro';

// DOM
const container = document.getElementById('survey-container');
const introView = document.getElementById('intro-view');
const surveyView = document.getElementById('survey-view');
const resultsView = document.getElementById('results-container');

// BLOQUES
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
// LOGICA UI
// ==========================================
window.startSurvey = () => {
    introView.classList.add('hidden');
    surveyView.classList.remove('hidden');
    renderBlock('block1');
}

window.setLanguage = (lang) => {
    currentLang = lang;
    
    // 1. Actualizar Intro
    if(document.getElementById('intro-title')) {
        document.getElementById('intro-title').innerText = translations.intro_title[lang];
        document.getElementById('intro-text').innerText = translations.intro_desc[lang];
        document.getElementById('start-btn').innerText = translations.btn_start[lang];
    }
    
    // 2. Si estamos en preguntas, repintar bloque
    if(!surveyView.classList.contains('hidden')) {
        renderBlock(currentBlock);
    }
    
    // 3. FIX: Si estamos en resultados, repintar resultados
    if(!resultsView.classList.contains('hidden')) {
        showResults();
    }
}

function renderBlock(blockName) {
    currentBlock = blockName;
    const qIds = blocks[blockName];
    const t = translations;
    let html = '';
    
    qIds.forEach(id => {
        const qData = getQuestionStructure(id);
        
        html += `<div class="question-block" id="block-${id}">`;
        html += `<div class="question-title" id="title-${id}">${t[id + '_title'][currentLang] || t[id + '_title']['es']}</div>`;
        html += `<div class="options-grid" id="grid-${id}">`; // Añadido ID al grid para buscar fácil
        
        qData.options.forEach(opt => {
            const isSelected = answers[id] === opt.val ? 'selected' : '';
            const label = t[id + '_opt_' + opt.val] ? (t[id + '_opt_' + opt.val][currentLang] || t[id + '_opt_' + opt.val]['es']) : opt.customLabel;
            
            html += `<div class="option-btn ${isSelected}" onclick="selectOption('${id}', '${opt.val}', this)">${label}</div>`;
        });

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
// INTERACCIÓN CORREGIDA (MUTUAMENTE EXCLUYENTE)
// ==========================================
window.selectOption = (qId, val, element) => {
    // 1. Guardar opción
    answers[qId] = val;
    
    // 2. BORRAR TEXTO (Si existiera)
    // Borramos del objeto de respuestas
    delete answers[qId + '_text'];
    // Borramos visualmente el textarea
    const inputEl = document.getElementById(`input-${qId}`);
    if(inputEl) inputEl.value = "";

    // 3. Quitar error visual
    const titleEl = document.getElementById(`title-${qId}`);
    if(titleEl) {
        titleEl.style.border = "1px solid var(--ink-black)";
        titleEl.style.color = "var(--ink-black)";
    }
    
    // 4. Efecto visual botones
    const parent = element.parentElement;
    parent.querySelectorAll('.option-btn').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
};

window.saveInput = (qId, text) => {
    // 1. Guardar texto
    answers[qId + '_text'] = text;
    
    // 2. Si hay texto, BORRAR OPCIÓN SELECCIONADA
    if(text.length > 0) {
        delete answers[qId]; // Borramos la selección "a", "b", etc. del objeto
        
        // Quitar clase visual .selected de los botones
        const grid = document.getElementById(`grid-${qId}`);
        if(grid) {
            grid.querySelectorAll('.option-btn').forEach(el => el.classList.remove('selected'));
        }
    }

    // 3. Quitar error visual
    const titleEl = document.getElementById(`title-${qId}`);
    if(titleEl) {
        titleEl.style.border = "1px solid var(--ink-black)";
        titleEl.style.color = "var(--ink-black)";
    }
};

window.nextBlock = () => {
    const currentQIds = blocks[currentBlock];
    const missing = currentQIds.find(id => {
        const hasOption = answers[id] !== undefined;
        const hasText = answers[id + '_text'] && answers[id + '_text'].trim().length > 0;
        return !hasOption && !hasText;
    });
    
    if(missing) {
        alert(currentLang === 'es' ? "⚠️ Por favor responde todas las preguntas" : "⚠️ Please answer all questions");
        const missingEl = document.getElementById(`title-${missing}`);
        if(missingEl) {
            missingEl.style.border = "2px solid red";
            missingEl.style.color = "red";
            missingEl.scrollIntoView({behavior: 'smooth', block: 'center'});
        }
        return;
    }

    if (currentBlock === 'block1') {
        const branchMap = { 'a': 'branch_a', 'b': 'branch_b', 'c': 'branch_c', 'd': 'branch_d', 'e': 'branch_e' };
        // Si han escrito texto en vez de elegir opcion en la Q3, mandamos a E por defecto
        const val = answers['q3'] || 'e';
        const next = branchMap[val] || 'branch_e';
        renderBlock(next);
    } 
    else if (currentBlock.startsWith('branch_')) {
        renderBlock('block3');
    }
    else if (currentBlock === 'block3') {
        submitData();
    }
};

function getQuestionStructure(id) {
    switch(id) {
        case 'q1': case 'q2': return { options: [{val:'a'}, {val:'b'}, {val:'c'}] };
        case 'q3': return { options: [{val:'a'}, {val:'b'}, {val:'c'}, {val:'d'}, {val:'e'}] };
        case 'q4a': case 'q4e': return { options: [{val:'a'}, {val:'b'}, {val:'c'}], hasInput:true };
        case 'q5a': case 'q6a': case 'q6b': return { options: [{val:'a'}, {val:'b'}] };
        case 'q4b': case 'q5b': case 'q6c': return { options: [{val:'a'}, {val:'b'}, {val:'c'}] };
        case 'q4c': case 'q5c': return { options: [{val:'a'}, {val:'b'}, {val:'c'}, {val:'d'}] };
        case 'q4d': case 'q5d': case 'q6d': return { options: [{val:'a'}, {val:'b'}, {val:'c'}] };
        case 'q5e': return { options: [{val:'a'}, {val:'b'}, {val:'c'}] };
        case 'q7': 
            let opts = [];
            for(let i=1; i<=10; i++) opts.push({val:i, customLabel: i});
            return { options: opts };
        case 'q8': return { options: [], hasInput: true }; 
        default: return { options: [] };
    }
}

async function submitData() {
    surveyView.classList.add('hidden');
    document.getElementById('loading').classList.remove('hidden');
    try {
         answers.timestamp = new Date();
         if(db) await addDoc(collection(db, "survey_responses"), answers);
         localStorage.setItem('aerko_voted', 'true');
         showResults();
    } catch(e) {
        console.error(e);
        showResults(); 
    }
}

// ==========================================
// RESULTADOS
// ==========================================
async function showResults() {
    document.getElementById('loading').classList.add('hidden');
    resultsView.classList.remove('hidden');
    const t = translations; 
    
    let counts = { a:1, b:1, c:1, total:3 };
    
    try {
        if(db) {
            const q = query(collection(db, "survey_responses"), orderBy("timestamp", "desc"), limit(100));
            const querySnapshot = await getDocs(q);
            if(!querySnapshot.empty) {
                counts = { a:0, b:0, c:0, total:0 };
                querySnapshot.forEach(doc => {
                    const d = doc.data();
                    counts.total++;
                    if(d.q1) counts[d.q1]++;
                });
            }
        }
    } catch(e) {}

    const getPct = (val) => counts.total > 0 ? Math.round((val/counts.total)*100) : 0;

    const html = `
        <h3 class="question-title">${t.results_title[currentLang]}</h3>
        
        <div class="stat-item">
            <div class="stat-label">${t.res_beginner[currentLang]} (${getPct(counts.a)}%)</div>
            <div class="stat-bar-bg"><div class="stat-bar-fill" style="width:${getPct(counts.a)}%"></div></div>
        </div>
        
        <div class="stat-item">
            <div class="stat-label">${t.res_inter[currentLang]} (${getPct(counts.b)}%)</div>
            <div class="stat-bar-bg"><div class="stat-bar-fill" style="width:${getPct(counts.b)}%"></div></div>
        </div>
        
        <div class="stat-item">
            <div class="stat-label">${t.res_adv[currentLang]} (${getPct(counts.c)}%)</div>
            <div class="stat-bar-bg"><div class="stat-bar-fill" style="width:${getPct(counts.c)}%"></div></div>
        </div>
        
        <p style="margin-top:2rem; font-size:0.8rem;">
            ${t.res_footer[currentLang]} ${counts.total} ${t.res_entries[currentLang]}.
        </p>
        
        <div style="margin-top: 40px; border-top: 2px dashed var(--ink-black); padding-top: 20px;">
            <p style="font-weight: bold; color: var(--acid-green); background: var(--ink-black); padding: 15px; display: inline-block; font-size: 0.9rem; line-height: 1.5;">
                > ${t.final_msg[currentLang]}
            </p>
        </div>
    `;

    document.getElementById('stats-content').innerHTML = html;
}
