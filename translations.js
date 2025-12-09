const translations = {
    // BLOQUE 1
    q1_title: {
        es: "1. ¿En qué punto te encuentras en tu entrenamiento?",
        en: "1. What is your current training status?",
        de: "", pt: "", fr: ""
    },
    q1_opt_a: { es: "Principiante (Semanas/Meses)", en: "Beginner (Weeks/Months)", de: "", pt: "", fr: "" },
    q1_opt_b: { es: "Intermedio (Consistente)", en: "Intermediate (Consistent)", de: "", pt: "", fr: "" },
    q1_opt_c: { es: "Avanzado (Años/Técnico)", en: "Advanced (Years/Technical)", de: "", pt: "", fr: "" },

    q2_title: {
        es: "2. ¿Qué herramienta usas PRINCIPALMENTE hoy?",
        en: "2. What is your MAIN tool today?",
        de: "", pt: "", fr: ""
    },
    q2_opt_a: { es: "Apps comerciales (MFP, Hevy...)", en: "Commercial Apps", de: "", pt: "", fr: "" },
    q2_opt_b: { es: "Manual (Excel, Papel)", en: "Manual (Excel, Paper)", de: "", pt: "", fr: "" },
    q2_opt_c: { es: "Ninguna / Intuición", en: "None / Intuition", de: "", pt: "", fr: "" },

    q3_title: {
        es: "3. ¿En qué categoría has usado MÁS apps?",
        en: "3. In which category have you used MOST apps?",
        de: "", pt: "", fr: ""
    },
    q3_opt_a: { es: "Nutrición (Calorías/Macros)", en: "Nutrition", de: "", pt: "", fr: "" },
    q3_opt_b: { es: "Entrenamiento (Series/Reps)", en: "Training", de: "", pt: "", fr: "" },
    q3_opt_c: { es: "Progreso (Peso/Fotos)", en: "Progress (Body/Photos)", de: "", pt: "", fr: "" },
    q3_opt_d: { es: "Varias a la vez (Caos)", en: "Multiple at once", de: "", pt: "", fr: "" },
    q3_opt_e: { es: "Ninguna", en: "None", de: "", pt: "", fr: "" },

    // RAMA A: NUTRICION
    q4a_title: { es: "¿Cuál ha sido tu mayor frustración con apps de nutrición?", en: "Biggest frustration with nutrition apps?", de: "", pt: "", fr: ""},
    q4a_opt_a: { es: "Tardan demasiado (clicks)", en: "Too slow (too many clicks)", de: "", pt: "", fr: ""},
    q4a_opt_b: { es: "Base de datos con errores", en: "Database errors", de: "", pt: "", fr: ""},
    q4a_opt_c: { es: "Ansiedad por números rojos", en: "Anxiety over red numbers", de: "", pt: "", fr: ""},
    
    q5a_title: { es: "¿Usarías un registro visual rápido (5 seg) en vez de pesar exacto?", en: "Would you use a 5-sec visual log instead of weighing?", de: "", pt: "", fr: ""},
    q5a_opt_a: { es: "Sí, velocidad", en: "Yes, speed", de: "", pt: "", fr: ""},
    q5a_opt_b: { es: "No, necesito exactitud", en: "No, I need precision", de: "", pt: "", fr: ""},

    q6a_title: { es: "¿Ocultar calorías restantes y ver solo 'objetivo cumplido'?", en: "Hide remaining calories, show only 'goal met'?", de: "", pt: "", fr: ""},
    q6a_opt_a: { es: "Sí, por salud mental", en: "Yes, for mental health", de: "", pt: "", fr: ""},
    q6a_opt_b: { es: "No, prefiero datos", en: "No, I prefer data", de: "", pt: "", fr: ""},

    // RAMA B: ENTRENAMIENTO
    q4b_title: { es: "¿Cómo detectas desequilibrios musculares?", en: "How do you spot muscle imbalances?", de: "", pt: "", fr: ""},
    q4b_opt_a: { es: "No lo sé / No me fijo", en: "I don't know / Don't check", de: "", pt: "", fr: ""},
    q4b_opt_b: { es: "A ojo", en: "By eye", de: "", pt: "", fr: ""},
    q4b_opt_c: { es: "Uso una app", en: "I use an app", de: "", pt: "", fr: ""},

    q5b_title: { es: "¿Utilidad de aviso: 'Descuidas el deltoides posterior'?", en: "Utility of warning: 'Neglecting rear delts'?", de: "", pt: "", fr: ""},
    q5b_opt_a: { es: "Muy útil", en: "Very useful", de: "", pt: "", fr: ""},
    q5b_opt_b: { es: "Interesante", en: "Interesting", de: "", pt: "", fr: ""},
    q5b_opt_c: { es: "Me da igual", en: "Don't care", de: "", pt: "", fr: ""},

    q6b_title: { es: "¿Ver predicción de fuerza futura?", en: "See future strength prediction?", de: "", pt: "", fr: ""},
    q6b_opt_a: { es: "Sí, motiva", en: "Yes, motivating", de: "", pt: "", fr: ""},
    q6b_opt_b: { es: "Indiferente", en: "Indifferent", de: "", pt: "", fr: ""},

    // RAMA C: PROGRESO
    q4c_title: { es: "¿Dónde guardas tus fotos de progreso?", en: "Where do you keep progress photos?", de: "", pt: "", fr: ""},
    q4c_opt_a: { es: "Galería normal", en: "Normal gallery", de: "", pt: "", fr: ""},
    q4c_opt_b: { es: "Carpeta oculta", en: "Hidden folder", de: "", pt: "", fr: ""},
    q4c_opt_c: { es: "Nube", en: "Cloud", de: "", pt: "", fr: ""},
    q4c_opt_d: { es: "No tomo fotos", en: "I don't take photos", de: "", pt: "", fr: ""},

    q5c_title: { es: "¿Mayor preocupación sobre datos/fotos?", en: "Biggest data/photo concern?", de: "", pt: "", fr: ""},
    q5c_opt_a: { es: "Venta a terceros", en: "Sold to third parties", de: "", pt: "", fr: ""},
    q5c_opt_b: { es: "Entrenar IAs sin permiso", en: "Training AI without consent", de: "", pt: "", fr: ""},
    q5c_opt_c: { es: "Hackeos", en: "Hacks", de: "", pt: "", fr: ""},
    q5c_opt_d: { es: "Nada", en: "Nothing", de: "", pt: "", fr: ""},

    q6c_title: { es: "Si la app fuera 100% Local (sin nube), ¿subirías más fotos?", en: "If app was 100% Local, would you upload more?", de: "", pt: "", fr: ""},
    q6c_opt_a: { es: "Sí", en: "Yes", de: "", pt: "", fr: ""},
    q6c_opt_b: { es: "Tal vez", en: "Maybe", de: "", pt: "", fr: ""},
    q6c_opt_c: { es: "No me importa", en: "Don't care", de: "", pt: "", fr: ""},

    // RAMA D: ECOSISTEMA
    q4d_title: { es: "¿Cuántas herramientas usas en total?", en: "Total tools used?", de: "", pt: "", fr: ""},
    q4d_opt_a: { es: "1", en: "1", de: "", pt: "", fr: ""},
    q4d_opt_b: { es: "2 - 3", en: "2 - 3", de: "", pt: "", fr: ""},
    q4d_opt_c: { es: "4+", en: "4+", de: "", pt: "", fr: ""},

    q5d_title: { es: "¿Has dejado apps por no poder exportar datos?", en: "Left apps due to no data export?", de: "", pt: "", fr: ""},
    q5d_opt_a: { es: "Sí", en: "Yes", de: "", pt: "", fr: ""},
    q5d_opt_b: { es: "No, pero preocupa", en: "No, but concerns me", de: "", pt: "", fr: ""},
    q5d_opt_c: { es: "No pensado", en: "Haven't thought about it", de: "", pt: "", fr: ""},

    q6d_title: { es: "¿Pagarías pago único por TODO integrado?", en: "One-time payment for ALL integrated?", de: "", pt: "", fr: ""},
    q6d_opt_a: { es: "Sí", en: "Yes", de: "", pt: "", fr: ""},
    q6d_opt_b: { es: "Prefiero suscripción barata", en: "Prefer cheap sub", de: "", pt: "", fr: ""},
    q6d_opt_c: { es: "Solo gratis con anuncios", en: "Free with ads only", de: "", pt: "", fr: ""},

    // RAMA E: NO USERS
    q4e_title: { es: "¿Por qué no usas apps?", en: "Why don't you use apps?", de: "", pt: "", fr: ""},
    q4e_opt_a: { es: "Tiempo / Pereza", en: "Time / Lazy", de: "", pt: "", fr: ""},
    q4e_opt_b: { es: "Obsesión", en: "Obsession", de: "", pt: "", fr: ""},
    q4e_opt_c: { es: "Intuición", en: "Intuition", de: "", pt: "", fr: ""},

    q5e_title: { es: "¿Usarías una en el futuro?", en: "Would you use one in the future?", de: "", pt: "", fr: ""},
    q5e_opt_a: { es: "Sí, si se adapta", en: "Yes, if it fits", de: "", pt: "", fr: ""},
    q5e_opt_b: { es: "Puede", en: "Maybe", de: "", pt: "", fr: ""},
    q5e_opt_c: { es: "Nunca", en: "Never", de: "", pt: "", fr: ""},

    // CIERRE
    q7_title: { es: "Open Source, Local-First, sin anuncios. ¿Probabilidad de probarla (1-10)?", en: "Open Source, Local-First, No Ads. Probability to try (1-10)?", de: "", pt: "", fr: ""},
    q8_title: { es: "Si pudieras pedir una función mágica, ¿cuál sería?", en: "One magic feature request?", de: "", pt: "", fr: ""},
    btn_send: { es: "[ ENVIAR DATOS ]", en: "[ SEND DATA ]", de: "[ SENDEN ]", pt: "[ ENVIAR ]", fr: "[ ENVOYER ]" },
    other: { es: "Otro...", en: "Other...", de: "", pt: "", fr: "" },
    view_results: { es: "[ VER GLOBAL_LOG ]", en: "[ VIEW GLOBAL_LOG ]", de: "", pt: "", fr: "" }
};