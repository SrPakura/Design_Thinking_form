const translations = {
    // --- TEXTOS UI ---
    intro_title: { es: "INPUT_REQUESTED", en: "INPUT_REQUESTED", de: "INPUT_REQUESTED" },
    intro_desc: { 
        es: "Bienvenido. Gracias por tomarte el tiempo.\nEsta es una encuesta de 8 preguntas para definir el futuro de AERKO.\nTus datos son anónimos.",
        en: "Welcome. Thank you for your time.\nThis is an 8-question survey to define the future of AERKO.\nYour data is anonymous.",
        de: "Willkommen. Danke für deine Zeit.\nDies ist eine Umfrage mit 8 Fragen, um die Zukunft von AERKO zu definieren.\nDeine Daten sind anonym."
    },
    btn_start: { es: "[ INICIAR_PROTOCOLO ]", en: "[ INITIATE_PROTOCOL ]", de: "[ PROTOKOLL STARTEN ]" },
    btn_continue: { es: "CONTINUAR >", en: "CONTINUE >", de: "WEITER >" },
    btn_finish: { es: "FINALIZAR Y ENVIAR", en: "FINISH & UPLOAD", de: "BEENDEN & SENDEN" },
    
    // --- PREGUNTAS ---
    // BLOQUE 1
    q1_title: { es: "1. ¿En qué punto te encuentras en tu entrenamiento?", en: "1. What is your current training status?", de: "1. Wie ist dein aktueller Trainingsstand?" },
    q1_opt_a: { es: "Principiante (Semanas/Meses)", en: "Beginner (Weeks/Months)", de: "Anfänger (Wochen/Monate)" },
    q1_opt_b: { es: "Intermedio (Consistente)", en: "Intermediate (Consistent)", de: "Fortgeschritten (Konsistent)" },
    q1_opt_c: { es: "Avanzado (Años/Técnico)", en: "Advanced (Years/Technical)", de: "Profi (Jahre/Technisch)" },

    q2_title: { es: "2. ¿Qué herramienta usas PRINCIPALMENTE hoy?", en: "2. What is your MAIN tool today?", de: "2. Welches Tool nutzt du hauptsächlich?" },
    q2_opt_a: { es: "Apps comerciales (MFP, Hevy...)", en: "Commercial Apps", de: "Kommerzielle Apps" },
    q2_opt_b: { es: "Manual (Excel, Papel)", en: "Manual (Excel, Paper)", de: "Manuell (Excel, Papier)" },
    q2_opt_c: { es: "Ninguna / Intuición", en: "None / Intuition", de: "Keine / Intuition" },

    q3_title: { es: "3. ¿En qué categoría has usado MÁS apps?", en: "3. In which category have you used MOST apps?", de: "3. In welcher Kategorie nutzt du Apps am meisten?" },
    q3_opt_a: { es: "Nutrición (Calorías/Macros)", en: "Nutrition", de: "Ernährung" },
    q3_opt_b: { es: "Entrenamiento (Series/Reps)", en: "Training", de: "Training" },
    q3_opt_c: { es: "Progreso (Peso/Fotos)", en: "Progress (Body/Photos)", de: "Fortschritt" },
    q3_opt_d: { es: "Varias a la vez (Caos)", en: "Multiple at once", de: "Mehrere gleichzeitig" },
    q3_opt_e: { es: "Ninguna", en: "None", de: "Keine" },

    // RAMA A
    q4a_title: { es: "¿Mayor frustración con apps de nutrición?", en: "Biggest frustration with nutrition apps?", de: "Größter Frust mit Ernährungs-Apps?"},
    q4a_opt_a: { es: "Tardan demasiado", en: "Too slow", de: "Zu langsam"},
    q4a_opt_b: { es: "Base de datos con errores", en: "Database errors", de: "Datenbankfehler"},
    q4a_opt_c: { es: "Ansiedad", en: "Anxiety", de: "Angst"},
    q5a_title: { es: "¿Usarías registro visual (5 seg) vs pesar exacto?", en: "Visual log (5s) vs weighing?", de: "Visuelles Loggen (5s) vs Wiegen?"},
    q5a_opt_a: { es: "Sí, velocidad", en: "Yes, speed", de: "Ja, Geschwindigkeit"},
    q5a_opt_b: { es: "No, exactitud", en: "No, precision", de: "Nein, Präzision"},
    q6a_title: { es: "¿Ocultar calorías restantes?", en: "Hide remaining calories?", de: "Verbleibende Kalorien ausblenden?"},
    q6a_opt_a: { es: "Sí, salud mental", en: "Yes, mental health", de: "Ja, psychische Gesundheit"},
    q6a_opt_b: { es: "No, prefiero datos", en: "No, prefer data", de: "Nein, bevorzuge Daten"},

    // RAMA B
    q4b_title: { es: "¿Cómo detectas desequilibrios?", en: "How do you spot imbalances?", de: "Wie erkennst du Ungleichgewichte?"},
    q4b_opt_a: { es: "No lo sé", en: "Don't know", de: "Weiß nicht"},
    q4b_opt_b: { es: "A ojo", en: "By eye", de: "Nach Augenmaß"},
    q4b_opt_c: { es: "Uso app", en: "Use app", de: "Nutze App"},
    q5b_title: { es: "¿Utilidad aviso: 'Descuidas deltoides'?", en: "Utility warning: 'Neglecting delts'?", de: "Nutzen Warnung: 'Vernachlässigst Deltas'?"},
    q5b_opt_a: { es: "Muy útil", en: "Very useful", de: "Sehr nützlich"},
    q5b_opt_b: { es: "Interesante", en: "Interesting", de: "Interessant"},
    q5b_opt_c: { es: "Me da igual", en: "Don't care", de: "Egal"},
    q6b_title: { es: "¿Ver predicción fuerza futura?", en: "See future strength?", de: "Zukünftige Stärke sehen?"},
    q6b_opt_a: { es: "Sí", en: "Yes", de: "Ja"},
    q6b_opt_b: { es: "Indiferente", en: "Indifferent", de: "Egal"},

    // RAMA C
    q4c_title: { es: "¿Dónde guardas fotos progreso?", en: "Where keep progress photos?", de: "Wo speicherst du Fortschrittsfotos?"},
    q4c_opt_a: { es: "Galería", en: "Gallery", de: "Galerie"},
    q4c_opt_b: { es: "Carpeta oculta", en: "Hidden folder", de: "Versteckter Ordner"},
    q4c_opt_c: { es: "Nube", en: "Cloud", de: "Cloud"},
    q4c_opt_d: { es: "No tomo", en: "Don't take", de: "Mache keine"},
    q5c_title: { es: "¿Mayor preocupación datos?", en: "Biggest data concern?", de: "Größte Datensorge?"},
    q5c_opt_a: { es: "Venta terceros", en: "Sold to 3rd party", de: "Verkauf an Dritte"},
    q5c_opt_b: { es: "IAs sin permiso", en: "AI without consent", de: "KI ohne Zustimmung"},
    q5c_opt_c: { es: "Hackeos", en: "Hacks", de: "Hacks"},
    q5c_opt_d: { es: "Nada", en: "Nothing", de: "Nichts"},
    q6c_title: { es: "¿Si fuera 100% Local subirías más?", en: "If 100% Local, upload more?", de: "Wenn 100% lokal, mehr hochladen?"},
    q6c_opt_a: { es: "Sí", en: "Yes", de: "Ja"},
    q6c_opt_b: { es: "Tal vez", en: "Maybe", de: "Vielleicht"},
    q6c_opt_c: { es: "No importa", en: "Don't care", de: "Egal"},

    // RAMA D
    q4d_title: { es: "¿Cuántas herramientas usas?", en: "Total tools?", de: "Anzahl Tools?"},
    q4d_opt_a: { es: "1", en: "1", de: "1"},
    q4d_opt_b: { es: "2 - 3", en: "2 - 3", de: "2 - 3"},
    q4d_opt_c: { es: "4+", en: "4+", de: "4+"},
    q5d_title: { es: "¿Dejado apps por no exportar?", en: "Left apps due to no export?", de: "App verlassen wegen kein Export?"},
    q5d_opt_a: { es: "Sí", en: "Yes", de: "Ja"},
    q5d_opt_b: { es: "Preocupa", en: "Concerns me", de: "Besorgt mich"},
    q5d_opt_c: { es: "No pensado", en: "Haven't thought", de: "Nicht gedacht"},
    q6d_title: { es: "¿Pago único por TODO?", en: "One-time payment for ALL?", de: "Einmalzahlung für ALLES?"},
    q6d_opt_a: { es: "Sí", en: "Yes", de: "Ja"},
    q6d_opt_b: { es: "Suscripción barata", en: "Cheap sub", de: "Günstiges Abo"},
    q6d_opt_c: { es: "Solo gratis", en: "Free only", de: "Nur kostenlos"},

    // RAMA E
    q4e_title: { es: "¿Por qué no usas apps?", en: "Why don't use apps?", de: "Warum keine Apps?"},
    q4e_opt_a: { es: "Pereza", en: "Lazy", de: "Faulheit"},
    q4e_opt_b: { es: "Obsesión", en: "Obsession", de: "Obsession"},
    q4e_opt_c: { es: "Intuición", en: "Intuition", de: "Intuition"},
    q5e_title: { es: "¿Usarías en futuro?", en: "Use in future?", de: "In Zukunft nutzen?"},
    q5e_opt_a: { es: "Sí", en: "Yes", de: "Ja"},
    q5e_opt_b: { es: "Puede", en: "Maybe", de: "Vielleicht"},
    q5e_opt_c: { es: "Nunca", en: "Never", de: "Niemals"},

    // CIERRE
    q7_title: { es: "Open Source, Local-First. ¿Probabilidad de probarla (1-10)?", en: "Probability to try (1-10)?", de: "Wahrscheinlichkeit zu testen (1-10)?"},
    q8_title: { es: "Si pudieras pedir una función mágica, ¿cuál sería?", en: "One magic feature request?", de: "Ein magisches Feature?"},
    other: { es: "Otro...", en: "Other...", de: "Andere..." },
    
    // --- RESULTADOS TRADUCIDOS ---
    results_title: { es: "ESTADÍSTICAS: NIVEL", en: "STATS: TRAINING LEVEL", de: "STATISTIK: NIVEAU" },
    res_beginner: { es: "PRINCIPIANTE", en: "BEGINNER", de: "ANFÄNGER" },
    res_inter: { es: "INTERMEDIO", en: "INTERMEDIATE", de: "FORTGESCHRITTEN" },
    res_adv: { es: "AVANZADO", en: "ADVANCED", de: "PROFI" },
    res_footer: { es: "BASADO EN LAS ÚLTIMAS", en: "BASED ON LAST", de: "BASIEREND AUF DEN LETZTEN" },
    res_entries: { es: "ENTRADAS", en: "ENTRIES", de: "EINTRÄGEN" },
    
    // --- MENSAJE ESTUDIANTE ---
    final_msg: {
        es: "¡Gracias! Tu feedback ayuda a un estudiante a sacar su proyecto adelante.",
        en: "Thank you! Your feedback helps a student move their project forward.",
        de: "Danke! Dein Feedback hilft einem Studenten, sein Projekt voranzubringen."
    }
};
