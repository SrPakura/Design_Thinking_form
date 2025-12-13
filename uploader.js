// =======================================================
// IMPORTACIONES Y CONFIGURACIÓN DE FIREBASE
// =======================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, writeBatch, doc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
  // ... Pega tu firebaseConfig aquí ...
  apiKey: "AIzaSyC0Qn4gMNK10e2B5Hyi_pAPiu2alAYOKio",
  authDomain: "design-thinking-form.firebaseapp.com",
  projectId: "design-thinking-form",
  storageBucket: "design-thinking-form.firebasestorage.app",
  messagingSenderId: "611337869132",
  appId: "1:611337869132:web:24f63173d456cde5b6e1e9s"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// =======================================================
// LÓGICA DEL UPLOADER
// =======================================================

// 1. Obtenemos referencias a los elementos del HTML
const fileInput = document.getElementById('json-file-input');
const uploadButton = document.getElementById('upload-button');
const statusDisplay = document.getElementById('status');

let datosParaSubir = null;

// 2. Escuchamos cuando el usuario selecciona un archivo
fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (!file) {
        statusDisplay.textContent = 'Selección cancelada.';
        return;
    }

    const reader = new FileReader();

    // 3. Cuando el archivo se ha leído, procesamos el contenido
    reader.onload = (e) => {
        try {
            // Convertimos el texto del archivo a un objeto JSON
            datosParaSubir = JSON.parse(e.target.result);
            
            // Comprobamos que sea una lista (array)
            if (!Array.isArray(datosParaSubir)) {
                throw new Error("El JSON no es una lista (array). Debe empezar con [ y terminar con ]");
            }

            statusDisplay.textContent = `Archivo cargado. ${datosParaSubir.length} respuestas listas para subir.`;
            uploadButton.disabled = false; // Activamos el botón
        } catch (error) {
            statusDisplay.textContent = `Error: El archivo no es un JSON válido.`;
            console.error(error);
            datosParaSubir = null;
            uploadButton.disabled = true; // Mantenemos el botón desactivado
        }
    };
    
    // Leemos el archivo como texto
    reader.readAsText(file);
});

// 4. Cuando el usuario hace clic en el botón de subir
uploadButton.addEventListener('click', async () => {
    if (!datosParaSubir || datosParaSubir.length === 0) {
        alert("No hay datos para subir. Carga un archivo JSON primero.");
        return;
    }

    if (!confirm(`¿Confirmas que quieres subir ${datosParaSubir.length} respuestas a Firebase?`)) {
        statusDisplay.textContent = "Subida cancelada.";
        return;
    }

    uploadButton.disabled = true;
    statusDisplay.textContent = "Subiendo... por favor, espera.";

    const batch = writeBatch(db);
    const coleccion = collection(db, 'survey_responses');

    datosParaSubir.forEach((dato) => {
        const nuevoDocumento = doc(coleccion);
        batch.set(nuevoDocumento, dato);
    });

    try {
        await batch.commit();
        statusDisplay.textContent = `✅ ¡ÉXITO! Se han subido ${datosParaSubir.length} respuestas.`;
        alert('Subida completada con éxito.');
    } catch (error) {
        statusDisplay.textContent = `❌ ¡ERROR! No se pudo subir. Mira la consola (F12).`;
        uploadButton.disabled = false;
        console.error("Error al subir los datos:", error);
    }
});
