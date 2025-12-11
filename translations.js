const translations = {
    // --- TEXTOS UI ---
    intro_title: { 
        es: ">ENTRADA_REQUERIDA", 
        en: ">INPUT_REQUESTED", 
        de: ">EINGABE_ERFORDERLICH" 
    },
    intro_desc: { 
        es: "Bienvenido a esta encuesta sobre Nutrición, Entreno y Progreso.\n\nTu participación ayuda a un estudiante de 19 años cuyo profesor le explota como si fuera un robot 🤖.\n\nTe llevará 2 minutos completarla. Tus datos son 100% anónimos.\n\nGracias <3",
        en: "Welcome to this survey on Nutrition, Training, and Progress.\n\nYou are helping a 19-year-old student whose teacher works him like a robot 🤖.\n\nIt takes just 2 minutes to complete. Your data is 100% anonymous.\n\nThanks <3",
        de: "Willkommen zu dieser Umfrage über Ernährung, Training und Fortschritt.\n\nDu hilfst einem 19-jährigen Studenten, der von seinem Lehrer wie ein Roboter ausgebeutet wird 🤖.\n\nDauert nur 2 Minuten. Deine Daten sind 100% anonym.\n\nDanke <3"
    },
    btn_start: { es: "[ INICIAR_PROTOCOLO ]", en: "[ INITIATE_PROTOCOL ]", de: "[ PROTOKOLL STARTEN ]" },
    btn_continue: { es: "CONTINUAR >", en: "CONTINUE >", de: "WEITER >" },
    btn_finish: { es: "FINALIZAR Y ENVIAR", en: "FINISH & UPLOAD", de: "BEENDEN & SENDEN" },
    
    // --- PREGUNTAS ---
    // BLOQUE 1
    q1_title: { 
        es: "1. ¿En qué punto te encuentras en tu entrenamiento/alimentación?", 
        en: "1. Where are you currently at with your training/nutrition?", 
        de: "1. Wo stehst du aktuell mit deinem Training/Ernährung?" 
    },
    q1_opt_a: { 
        es: "Principiante: Apenas llevo unas semanas o meses.", 
        en: "Beginner: Just started a few weeks or months ago.", 
        de: "Anfänger: Habe erst vor ein paar Wochen/Monaten angefangen." 
    },
    q1_opt_b: { 
        es: "Intermedio: Llevo un tiempo intentando ser consistente.", 
        en: "Intermediate: Been trying to be consistent for a while.", 
        de: "Fortgeschritten: Versuche schon länger, konsequent zu sein." 
    },
    q1_opt_c: { 
        es: "Avanzado: Llevo años, entiendo macros y sobrecarga.", 
        en: "Advanced: Years of experience, I understand macros/overload.", 
        de: "Profi: Jahre dabei, verstehe Makros und Progression." 
    },

    q2_title: { 
        es: "2. ¿Qué tipo de herramienta usas PRINCIPALMENTE hoy en día?", 
        en: "2. What tool do you MAINLY use nowadays?", 
        de: "2. Welches Tool nutzt du heutzutage HAUPTSÄCHLICH?" 
    },
    q2_opt_a: { 
        es: "Apps comerciales (MyFitnessPal, Hevy, LoseIt...)", 
        en: "Commercial Apps (MyFitnessPal, Hevy, LoseIt...)", 
        de: "Kommerzielle Apps (MyFitnessPal, Hevy, LoseIt...)" 
    },
    q2_opt_b: { 
        es: "Manual (Excel, Notas, Papel y boli)", 
        en: "Manual (Excel, Notes, Pen & Paper)", 
        de: "Manuell (Excel, Notizen, Stift & Papier)" 
    },
    q2_opt_c: { 
        es: "Ninguna / Intuición", 
        en: "None / Intuition", 
        de: "Keine / Intuition" 
    },

    q3_title: { 
        es: "3. ¿En qué categoría has utilizado MÁS apps o herramientas durante tu proceso?", 
        en: "3. In which category have you used the MOST apps/tools?", 
        de: "3. In welcher Kategorie hast du die MEISTEN Apps/Tools genutzt?" 
    },
    q3_opt_a: { 
        es: "Nutrición: He probado contadores de calorías/macros.", 
        en: "Nutrition: Tried calorie/macro counters.", 
        de: "Ernährung: Habe Kalorien-/Makrozähler probiert." 
    },
    q3_opt_b: { 
        es: "Entrenamiento: Apps para registrar series y reps.", 
        en: "Training: Apps to log sets and reps.", 
        de: "Training: Apps zum Loggen von Sätzen/Wdh." 
    },
    q3_opt_c: { 
        es: "Progreso: Apps para peso, medidas o fotos.", 
        en: "Progress: Apps for weight, measurements, or photos.", 
        de: "Fortschritt: Apps für Gewicht, Maße oder Fotos." 
    },
    q3_opt_d: { 
        es: "Varias a la vez: Intento gestionar todo (o es un caos).", 
        en: "Multiple at once: Trying to manage everything (or it's chaos).", 
        de: "Mehrere gleichzeitig: Versuche alles zu managen (oder Chaos)." 
    },
    q3_opt_e: { 
        es: "Ninguna: Nunca he usado herramientas digitales.", 
        en: "None: Never used digital tools for this.", 
        de: "Keine: Habe nie digitale Tools dafür genutzt." 
    },

    // RAMA A: Nutrición
    q4a_title: { 
        es: "¿Cuál ha sido tu mayor frustración al usar apps de nutrición?", 
        en: "What has been your biggest frustration with nutrition apps?", 
        de: "Was war dein größter Frust mit Ernährungs-Apps?"
    },
    q4a_opt_a: { 
        es: "Tardan demasiado (demasiados clics).", 
        en: "Take too long (too many clicks).", 
        de: "Dauern zu lange (zu viele Klicks)."
    },
    q4a_opt_b: { 
        es: "La base de datos tiene muchos errores.", 
        en: "The database has many errors.", 
        de: "Die Datenbank hat viele Fehler."
    },
    q4a_opt_c: { 
        es: "Me genera ansiedad ver números rojos.", 
        en: "Seeing red numbers gives me anxiety.", 
        de: "Rote Zahlen verursachen mir Angst/Stress."
    },
    
    q5a_title: { 
        es: "Si pudieras registrar comida en 5 seg (estimación visual) vs pesar exacto, ¿lo usarías?", 
        en: "If you could log food in 5s (visual estimate) vs exact weighing, would you use it?", 
        de: "Würdest du Essen in 5s loggen (visuell geschätzt) statt exakt zu wiegen?"
    },
    q5a_opt_a: { 
        es: "Sí, prefiero velocidad.", 
        en: "Yes, I prefer speed.", 
        de: "Ja, ich bevorzuge Geschwindigkeit."
    },
    q5a_opt_b: { 
        es: "No, necesito el dato exacto.", 
        en: "No, I need exact data.", 
        de: "Nein, ich brauche exakte Daten."
    },

    q6a_title: { 
        es: "¿Te gustaría una opción para ocultar calorías restantes y solo ver si cumpliste?", 
        en: "Would you like an option to hide remaining calories and just see if you hit goals?", 
        de: "Möchtest du verbleibende Kalorien ausblenden und nur Zielerreichung sehen?"
    },
    q6a_opt_a: { 
        es: "Sí, por salud mental.", 
        en: "Yes, for mental health.", 
        de: "Ja, für die psychische Gesundheit."
    },
    q6a_opt_b: { 
        es: "No, prefiero ver los datos.", 
        en: "No, I prefer seeing the data.", 
        de: "Nein, ich sehe lieber die Daten."
    },

    // RAMA B: Entrenamiento
    q4b_title: { 
        es: "Cuando diseñas una rutina, ¿cómo sabes si hay desequilibrio muscular?", 
        en: "When designing a routine, how do you spot muscle imbalances?", 
        de: "Wie erkennst du beim Erstellen einer Routine muskuläre Ungleichgewichte?"
    },
    q4b_opt_a: { 
        es: "No lo sé / No me fijo.", 
        en: "I don't know / I don't check.", 
        de: "Weiß nicht / Achte nicht darauf."
    },
    q4b_opt_b: { 
        es: "Lo calculo a ojo.", 
        en: "I estimate it by eye.", 
        de: "Ich schätze es nach Augenmaß."
    },
    q4b_opt_c: { 
        es: "Uso una app que me avisa.", 
        en: "I use an app that warns me.", 
        de: "Ich nutze eine App, die mich warnt."
    },

    q5b_title: { 
        es: "¿Qué tan útil sería que la app te dijera: 'Estás descuidando el deltoides posterior'?", 
        en: "How useful would it be if the app told you: 'You are neglecting your rear delts'?", 
        de: "Wie nützlich wäre es, wenn die App sagt: 'Du vernachlässigst die hinteren Deltas'?"
    },
    q5b_opt_a: { 
        es: "Muy útil.", 
        en: "Very useful.", 
        de: "Sehr nützlich."
    },
    q5b_opt_b: { 
        es: "Interesante, pero no vital.", 
        en: "Interesting, but not vital.", 
        de: "Interessant, aber nicht vital."
    },
    q5b_opt_c: { 
        es: "Me da igual.", 
        en: "I don't care.", 
        de: "Ist mir egal."
    },

    q6b_title: { 
        es: "¿Te interesa ver predicciones de tu fuerza futura basadas en tus datos actuales?", 
        en: "Are you interested in seeing future strength predictions based on current data?", 
        de: "Interessieren dich Vorhersagen deiner zukünftigen Stärke basierend auf Daten?"
    },
    q6b_opt_a: { 
        es: "Sí, me motivaría.", 
        en: "Yes, it would motivate me.", 
        de: "Ja, würde mich motivieren."
    },
    q6b_opt_b: { 
        es: "No, me es indiferente.", 
        en: "No, I'm indifferent.", 
        de: "Nein, ist mir gleichgültig."
    },

    // RAMA C: Progreso
    q4c_title: { 
        es: "¿Dónde guardas tus fotos de progreso físico?", 
        en: "Where do you keep your progress photos?", 
        de: "Wo speicherst du deine Fortschrittsfotos?"
    },
    q4c_opt_a: { 
        es: "Galería normal del móvil.", 
        en: "Normal phone gallery.", 
        de: "Normale Handy-Galerie."
    },
    q4c_opt_b: { 
        es: "Carpeta Oculta / Privada.", 
        en: "Hidden / Private folder.", 
        de: "Versteckter / Privater Ordner."
    },
    q4c_opt_c: { 
        es: "App en la nube.", 
        en: "Cloud app.", 
        de: "Cloud-App."
    },
    q4c_opt_d: { 
        es: "No tomo fotos de progreso.", 
        en: "I don't take progress photos.", 
        de: "Ich mache keine Fortschrittsfotos."
    },

    q5c_title: { 
        es: "¿Qué te preocupa más sobre tus datos de salud y fotos?", 
        en: "What concerns you most about your health data and photos?", 
        de: "Was besorgt dich am meisten bei deinen Gesundheitsdaten/Fotos?"
    },
    q5c_opt_a: { 
        es: "Venta a terceros/aseguradoras.", 
        en: "Sale to 3rd parties/insurers.", 
        de: "Verkauf an Dritte/Versicherer."
    },
    q5c_opt_b: { 
        es: "Uso para entrenar IAs sin permiso.", 
        en: "Used to train AI without consent.", 
        de: "Nutzung für KI-Training ohne Erlaubnis."
    },
    q5c_opt_c: { 
        es: "Hackeos de la nube.", 
        en: "Cloud hacks.", 
        de: "Cloud-Hacks."
    },
    q5c_opt_d: { 
        es: "Nada.", 
        en: "Nothing.", 
        de: "Nichts."
    },

    q6c_title: { 
        es: "Si la app fuera 100% Local (sin nube), ¿subirías más fotos?", 
        en: "If the app was 100% Local (no cloud), would you upload more photos?", 
        de: "Wenn die App 100% lokal wäre (keine Cloud), würdest du mehr Fotos hochladen?"
    },
    q6c_opt_a: { 
        es: "Sí, me sentiría seguro.", 
        en: "Yes, I'd feel safe.", 
        de: "Ja, ich würde mich sicher fühlen."
    },
    q6c_opt_b: { 
        es: "Tal vez.", 
        en: "Maybe.", 
        de: "Vielleicht."
    },
    q6c_opt_c: { 
        es: "No me importa dónde estén.", 
        en: "I don't care where they are.", 
        de: "Ist mir egal, wo sie sind."
    },

    // RAMA D: Ecosistema
    q4d_title: { 
        es: "¿Cuántas herramientas usas en total para gestionar tu fitness?", 
        en: "How many tools in total do you use to manage your fitness?", 
        de: "Wie viele Tools nutzt du insgesamt für dein Fitness-Management?"
    },
    q4d_opt_a: { es: "Solo 1.", en: "Just 1.", de: "Nur 1." },
    q4d_opt_b: { es: "2 o 3.", en: "2 or 3.", de: "2 oder 3." },
    q4d_opt_c: { es: "4 o más.", en: "4 or more.", de: "4 oder mehr." },

    q5d_title: { 
        es: "¿Alguna vez has dejado una app porque no podías exportar TUS datos?", 
        en: "Have you ever left an app because you couldn't export YOUR data?", 
        de: "Hast du je eine App verlassen, weil du DEINE Daten nicht exportieren konntest?"
    },
    q5d_opt_a: { es: "Sí.", en: "Yes.", de: "Ja." },
    q5d_opt_b: { es: "No, pero me preocupa.", en: "No, but it worries me.", de: "Nein, aber es besorgt mich." },
    q5d_opt_c: { es: "No lo había pensado.", en: "Hadn't thought about it.", de: "Habe nicht darüber nachgedacht." },

    q6d_title: { 
        es: "¿Pagarías un precio único por tener TODO (Nutrición+Gym+Fotos) integrado?", 
        en: "Would you pay a one-time price for EVERYTHING (Nutrition+Gym+Photos) integrated?", 
        de: "Würdest du einen Einmalpreis zahlen, um ALLES integriert zu haben?"
    },
    q6d_opt_a: { 
        es: "Sí.", 
        en: "Yes.", 
        de: "Ja." 
    },
    q6d_opt_b: { 
        es: "Prefiero suscripción barata.", 
        en: "I prefer a cheap subscription.", 
        de: "Bevorzuge günstiges Abo." 
    },
    q6d_opt_c: { 
        es: "Solo uso gratis con anuncios.", 
        en: "I only use free with ads.", 
        de: "Nutze nur gratis mit Werbung." 
    },

    // RAMA E: No-Users
    q4e_title: { 
        es: "¿Por qué no sueles usar apps específicas?", 
        en: "Why don't you usually use specific apps?", 
        de: "Warum nutzt du normalerweise keine spezifischen Apps?"
    },
    q4e_opt_a: { es: "Me quita mucho tiempo / Pereza.", en: "Takes too much time / Lazy.", de: "Kostet zu viel Zeit / Faulheit." },
    q4e_opt_b: { es: "Me genera obsesión.", en: "Creates obsession.", de: "Macht mich besessen." },
    q4e_opt_c: { es: "Prefiero mi intuición.", en: "Prefer my intuition.", de: "Bevorzuge meine Intuition." },

    q5e_title: { 
        es: "¿Estarías dispuesto a usar una app de fitness en el futuro?", 
        en: "Would you be willing to use a fitness app in the future?", 
        de: "Wärst du bereit, in Zukunft eine Fitness-App zu nutzen?"
    },
    q5e_opt_a: { es: "Sí, si se adapta a mí.", en: "Yes, if it fits me.", de: "Ja, wenn sie zu mir passt." },
    q5e_opt_b: { es: "Puede, si merece la pena.", en: "Maybe, if it's worth it.", de: "Vielleicht, wenn es sich lohnt." },
    q5e_opt_c: { es: "No, nunca.", en: "No, never.", de: "Nein, niemals." },

    // CIERRE
    q7_title: { 
        es: "Imagina: Open Source, Local-First, todo unificado. ¿Probabilidad de probarla (1-10)?", 
        en: "Imagine: Open Source, Local-First, all unified. Probability to try (1-10)?", 
        de: "Stell dir vor: Open Source, Local-First, alles vereint. Wahrscheinlichkeit zu testen (1-10)?"
    },
    q8_title: { 
        es: "Si pudieras pedir una sola función mágica a esta app ideal, ¿cuál sería?", 
        en: "If you could ask for one magic feature in this ideal app, what would it be?", 
        de: "Wenn du dir ein magisches Feature für diese App wünschen könntest, welches wäre es?"
    },
    other: { es: "Otro...", en: "Other...", de: "Andere..." },
    
    // --- RESULTADOS TRADUCIDOS ---
    results_title: { es: "ESTADÍSTICAS: NIVEL", en: "STATS: TRAINING LEVEL", de: "STATISTIK: NIVEAU" },
    res_beginner: { es: "PRINCIPIANTE", en: "BEGINNER", de: "ANFÄNGER" },
    res_inter: { es: "INTERMEDIO", en: "INTERMEDIO", de: "FORTGESCHRITTEN" },
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
