import {
  BookOpen,
  Megaphone,
  Users,
  Heart,
  Compass,
  Lightbulb,
  Shield,
  HandHelping,
  Briefcase,
  UserRound,
  Crown,
  Brain,
  Search,
  Flame,
} from "lucide-react";

import type { Gift } from "../types/gift";

export const gifts: Gift[] = [
  {
    id: "apostol",
    name: "Apóstol",
    icon: Compass,
    color: "bg-indigo-500",

    maxScore: 15,
    questions: 3,

    summary:
      "Pionero que funda y lidera nuevas obras, llevando el evangelio a lugares donde aún no ha llegado.",

    description:
      "El don apostólico —en su función misionera y pionera, no en el oficio fundacional único de los doce apóstoles (Ef. 2:20)— capacita a la persona para iniciar iglesias, atravesar fronteras culturales y establecer las bases doctrinales de nuevas comunidades de fe. Quien lo posee suele sentir una carga especial por lugares donde el evangelio no ha sido predicado.",

    strengths: [
      "Visión para iniciar proyectos donde otros ven imposibilidad",
      "Capacidad de adaptarse a contextos culturales nuevos",
      "Autoridad espiritual natural para sentar fundamentos doctrinales",
      "Resistencia ante la oposición y las dificultades del pionero",
    ],

    risks: [
      "Impaciencia con estructuras ya establecidas",
      "Tendencia a actuar con independencia excesiva",
      "Dificultad para permanecer en tareas de mantenimiento a largo plazo",
    ],

    development: [
      "Someterse a la supervisión de una iglesia local y ancianos",
      "Formarse en teología sistemática antes de plantar",
      "Buscar mentores con experiencia en plantación de iglesias",
      "Cultivar paciencia mediante el servicio en tareas no protagónicas",
    ],

    characters: ["Pablo", "Bernabé", "Timoteo"],

    verses: [
      {
        reference: "Efesios 2:20",
        text: "La iglesia está edificada sobre el fundamento de los apóstoles y profetas, siendo Cristo mismo la piedra angular.",
      },
      {
        reference: "Hechos 13:2-3",
        text: "El Espíritu Santo aparta a Bernabé y Saulo para la obra misionera, y la iglesia los envía con ayuno y oración.",
      },
    ],
  },

  {
    id: "profeta",
    name: "Profeta",
    icon: Megaphone,
    color: "bg-red-500",

    maxScore: 15,
    questions: 3,

    summary:
      "Proclama la verdad de Dios con valentía, llamando a la iglesia al arrepentimiento y la fidelidad.",

    description:
      "En la tradición reformada, el don profético no implica nueva revelación —la Escritura es suficiente y cerrada (2 Ti. 3:16-17)— sino la capacidad de aplicar la Palabra ya revelada con claridad y urgencia, confrontando el pecado y señalando la voluntad de Dios para la vida de la iglesia.",

    strengths: [
      "Claridad para identificar el pecado y la desobediencia",
      "Valentía para hablar verdades incómodas",
      "Sensibilidad a la santidad y la justicia de Dios",
      "Capacidad de mover a la iglesia hacia el arrepentimiento",
    ],

    risks: [
      "Dureza o falta de gracia al corregir",
      "Orgullo espiritual al sentirse portador de una palabra especial",
      "Precipitación al juzgar antes de escuchar",
    ],

    development: [
      "Someter todo mensaje al filtro de la Escritura",
      "Cultivar mansedumbre junto con la franqueza (Gá. 6:1)",
      "Aprender a corregir en amor y en privado primero",
      "Rendir cuentas a los ancianos de la iglesia",
    ],

    characters: ["Elías", "Isaías", "Juan el Bautista"],

    verses: [
      {
        reference: "2 Timoteo 3:16-17",
        text: "Toda la Escritura es inspirada por Dios y útil para enseñar, redargüir, corregir e instruir en justicia.",
      },
      {
        reference: "Efesios 4:15",
        text: "Se nos llama a hablar la verdad en amor, para crecer en todo hacia Cristo, quien es la cabeza.",
      },
    ],
  },

  {
    id: "evangelista",
    name: "Evangelista",
    icon: Flame,
    color: "bg-orange-500",

    maxScore: 15,
    questions: 3,

    summary:
      "Comunica el evangelio con claridad y pasión, llevando a otros a un encuentro genuino con Cristo.",

    description:
      "El evangelista tiene una capacidad particular para explicar el evangelio de manera comprensible y persuasiva, y siente un impulso constante por alcanzar a los que no conocen a Cristo, tanto dentro como fuera de los muros de la iglesia.",

    strengths: [
      "Facilidad para iniciar conversaciones espirituales",
      "Claridad al explicar el evangelio",
      "Entusiasmo contagioso por compartir la fe",
      "Sensibilidad para identificar personas receptivas",
    ],

    risks: [
      "Reducir el discipulado a un solo momento de decisión",
      "Descuidar el seguimiento y cuidado posterior del nuevo creyente",
      "Impaciencia con procesos de fe más lentos",
    ],

    development: [
      "Aprender principios básicos de discipulado y seguimiento",
      "Estudiar teología para profundizar el contenido del mensaje",
      "Trabajar en equipo con quienes tienen el don de pastoreo",
      "Practicar la escucha antes de hablar",
    ],

    characters: ["Felipe el evangelista", "Andrés"],

    verses: [
      {
        reference: "Hechos 8:35",
        text: "Felipe, comenzando desde esa misma Escritura, le anuncia las buenas nuevas de Jesús al etíope.",
      },
      {
        reference: "2 Timoteo 4:5",
        text: "Pablo exhorta a Timoteo a hacer la obra de evangelista y cumplir cabalmente su ministerio.",
      },
    ],
  },

  {
    id: "pastor",
    name: "Pastor",
    icon: Heart,
    color: "bg-emerald-500",

    maxScore: 15,
    questions: 3,

    summary:
      "Cuida, guía y protege a las personas, acompañándolas en su crecimiento espiritual a largo plazo.",

    description:
      "El don pastoral se expresa en el cuidado sostenido de las personas: conocerlas, acompañarlas en sus luchas, protegerlas del error y guiarlas hacia la madurez en Cristo, siguiendo el modelo del Buen Pastor (Jn. 10).",

    strengths: [
      "Capacidad de generar confianza y cercanía",
      "Paciencia para acompañar procesos largos",
      "Sensibilidad ante el sufrimiento ajeno",
      "Deseo genuino de proteger a los más débiles",
    ],

    risks: [
      "Sobrecarga emocional por cargar con las luchas de todos",
      "Dificultad para establecer límites saludables",
      "Evitar conflictos necesarios por preservar la armonía",
    ],

    development: [
      "Aprender a delegar y no cargar todo el peso solo",
      "Practicar el descanso y el autocuidado",
      "Formarse en consejería bíblica",
      "Buscar la corrección fraterna de otros líderes",
    ],

    characters: ["David", "Pedro"],

    verses: [
      {
        reference: "Juan 10:11",
        text: "Jesús se presenta como el buen pastor, que da su vida por las ovejas.",
      },
      {
        reference: "1 Pedro 5:2-3",
        text: "Pedro exhorta a los ancianos a pastorear el rebaño de Dios con entrega genuina, no por obligación ni con dominio.",
      },
    ],
  },

  {
    id: "maestro",
    name: "Maestro",
    icon: BookOpen,
    color: "bg-blue-600",

    maxScore: 15,
    questions: 3,

    summary:
      "Explica y transmite la verdad bíblica con orden, claridad y profundidad doctrinal.",

    description:
      "El maestro tiene la capacidad de investigar, organizar y comunicar la Palabra de Dios de manera clara, ayudando a la iglesia a entender correctamente la sana doctrina y a discernir la verdad del error.",

    strengths: [
      "Capacidad de estudio profundo y organizado",
      "Claridad para explicar conceptos complejos",
      "Amor genuino por la sana doctrina",
      "Paciencia para responder preguntas y dudas",
    ],

    risks: [
      "Priorizar el conocimiento sobre la aplicación práctica",
      "Orgullo intelectual o actitud de superioridad",
      "Sequedad relacional al enfocarse solo en el contenido",
    ],

    development: [
      "Estudiar teología sistemática y bíblica de forma continua",
      "Buscar formas creativas de aplicar la enseñanza a la vida real",
      "Cultivar la humildad y la dependencia del Espíritu al enseñar",
      "Recibir retroalimentación de otros maestros y ancianos",
    ],

    characters: ["Esdras", "Apolos"],

    verses: [
      {
        reference: "Esdras 7:10",
        text: "Esdras había dispuesto su corazón a estudiar la ley de Jehová, ponerla por obra y enseñarla en Israel.",
      },
      {
        reference: "Romanos 12:7",
        text: "Pablo enumera la enseñanza entre los dones que deben ejercerse conforme a la gracia recibida.",
      },
    ],
  },

  {
    id: "liderazgo",
    name: "Liderazgo",
    icon: Crown,
    color: "bg-yellow-500",

    maxScore: 15,
    questions: 3,

    summary:
      "Organiza, dirige y moviliza a otros hacia una visión común con claridad y diligencia.",

    description:
      "Quien tiene este don es capaz de ver el panorama general, establecer objetivos claros y movilizar a las personas hacia una meta común, ejerciendo autoridad con diligencia y responsabilidad delante de Dios (Ro. 12:8).",

    strengths: [
      "Visión estratégica y capacidad de planificación",
      "Habilidad para motivar y coordinar equipos",
      "Decisión firme ante la incertidumbre",
      "Sentido de responsabilidad por los resultados",
    ],

    risks: [
      "Autoritarismo o falta de escucha",
      "Priorizar la eficiencia sobre las personas",
      "Dificultad para delegar control",
    ],

    development: [
      "Practicar el liderazgo de servicio (Mr. 10:42-45)",
      "Buscar retroalimentación honesta de su equipo",
      "Formarse en administración y gestión de personas",
      "Someter las decisiones importantes a la rendición de cuentas",
    ],

    characters: ["Nehemías", "Josué"],

    verses: [
      {
        reference: "Romanos 12:8",
        text: "Pablo llama a quien dirige a hacerlo con diligencia.",
      },
      {
        reference: "Nehemías 2:17-18",
        text: "Nehemías organiza y moviliza al pueblo para reconstruir los muros de Jerusalén, y ellos responden con disposición.",
      },
    ],
  },

  {
    id: "exhortacion",
    name: "Exhortación",
    icon: Users,
    color: "bg-sky-500",

    maxScore: 15,
    questions: 3,

    summary:
      "Anima, aconseja y motiva a otros a perseverar y crecer en la fe.",

    description:
      "El don de exhortación se expresa en la capacidad de animar, aconsejar y motivar a las personas hacia la acción práctica y la perseverancia, ofreciendo consejo bíblico oportuno en momentos de duda o desánimo.",

    strengths: [
      "Capacidad de dar ánimo genuino y oportuno",
      "Habilidad para dar consejo práctico y aplicable",
      "Optimismo bíblico realista ante las dificultades",
      "Facilidad para motivar a la acción",
    ],

    risks: [
      "Simplificar problemas complejos con respuestas rápidas",
      "Impaciencia con quienes no responden de inmediato",
      "Dar consejo sin haber escuchado lo suficiente",
    ],

    development: [
      "Desarrollar habilidades de escucha activa",
      "Profundizar en consejería bíblica",
      "Aprender a acompañar el proceso, no solo dar la solución",
      "Discernir cuándo animar y cuándo simplemente acompañar en silencio",
    ],

    characters: ["Bernabé", "Pablo"],

    verses: [
      {
        reference: "Hechos 4:36",
        text: "A José, un levita de Chipre, los apóstoles lo llaman Bernabé, que significa hijo de consolación.",
      },
      {
        reference: "Romanos 12:8",
        text: "Pablo incluye la exhortación entre los dones a ejercer según la gracia recibida.",
      },
    ],
  },

  {
    id: "fe",
    name: "Fe",
    icon: Shield,
    color: "bg-violet-500",

    maxScore: 15,
    questions: 3,

    summary:
      "Confía en las promesas de Dios de manera extraordinaria, incluso frente a circunstancias imposibles.",

    description:
      "Distinto de la fe salvadora que todo creyente posee, este don —según 1 Corintios 12:9— es una confianza especial que Dios concede a algunos para creer y actuar en situaciones que exigen una dependencia extraordinaria de su poder y provisión.",

    strengths: [
      "Confianza firme en las promesas de Dios",
      "Capacidad de inspirar fe en otros",
      "Perseverancia frente a la adversidad",
      "Disposición a arriesgarse por causas que exceden lo humanamente posible",
    ],

    risks: [
      "Confundir convicción personal con la voluntad revelada de Dios",
      "Presionar a otros a tener 'más fe'",
      "Ignorar la sabiduría práctica o el consejo de otros",
    ],

    development: [
      "Anclar la fe siempre en las promesas concretas de la Escritura",
      "Someter las decisiones grandes al consejo de la iglesia",
      "Cultivar la oración como expresión de dependencia",
      "Distinguir entre fe bíblica y presunción",
    ],

    characters: ["Abraham", "Daniel"],

    verses: [
      {
        reference: "Hebreos 11:1",
        text: "La fe es la certeza de lo que se espera, la convicción de lo que no se ve.",
      },
      {
        reference: "1 Corintios 12:9",
        text: "Pablo menciona la fe como uno de los dones repartidos por el mismo Espíritu.",
      },
    ],
  },

  {
    id: "sabiduria",
    name: "Sabiduría",
    icon: Lightbulb,
    color: "bg-amber-500",

    maxScore: 10,
    questions: 2,

    summary:
      "Aplica la verdad de Dios a situaciones concretas con discernimiento práctico y profundidad espiritual.",

    description:
      "El don de sabiduría —'palabra de sabiduría' en 1 Corintios 12:8— capacita a la persona para aplicar el conocimiento bíblico a decisiones y situaciones concretas, ofreciendo perspectiva y consejo que reflejan la mente de Dios.",

    strengths: [
      "Capacidad de ver más allá de lo evidente",
      "Buen juicio en decisiones difíciles",
      "Habilidad de conectar la verdad bíblica con la vida real",
      "Calma y ponderación ante la presión",
    ],

    risks: [
      "Excesiva cautela que retrasa decisiones necesarias",
      "Actitud de superioridad frente a quienes deciden distinto",
      "Confiar en la propia intuición por encima de la Escritura",
    ],

    development: [
      "Pedir sabiduría a Dios en oración (Stg. 1:5)",
      "Estudiar la Escritura con constancia",
      "Buscar consejo en múltiples consejeros (Pr. 15:22)",
      "Practicar la humildad al aconsejar",
    ],

    characters: ["Salomón", "José"],

    verses: [
      {
        reference: "Santiago 1:5",
        text: "Si a alguno le falta sabiduría, que la pida a Dios, quien da a todos abundantemente sin reprochar.",
      },
      {
        reference: "1 Reyes 3:9",
        text: "Salomón pide a Dios un corazón entendido para gobernar y discernir entre el bien y el mal.",
      },
    ],
  },

  {
    id: "conocimiento",
    name: "Conocimiento",
    icon: Brain,
    color: "bg-cyan-500",

    maxScore: 10,
    questions: 2,

    summary:
      "Investiga y comprende con profundidad las verdades de la Escritura para el beneficio de la iglesia.",

    description:
      "El don de conocimiento —'palabra de ciencia' en 1 Corintios 12:8— se manifiesta en la capacidad de investigar, comprender y organizar la verdad bíblica en profundidad, descubriendo conexiones y verdades que enriquecen la comprensión de la iglesia.",

    strengths: [
      "Curiosidad intelectual y disciplina de estudio",
      "Capacidad de análisis y síntesis",
      "Precisión al manejar información bíblica",
      "Deseo genuino de conocer a Dios más profundamente",
    ],

    risks: [
      "Acumular conocimiento sin aplicarlo a la vida",
      "Orgullo intelectual (1 Co. 8:1)",
      "Desconexión relacional por priorizar el estudio",
    ],

    development: [
      "Recordar que el conocimiento debe estar guiado por el amor (1 Co. 13:2)",
      "Compartir el conocimiento de forma accesible",
      "Buscar aplicación práctica constante",
      "Cultivar la humildad frente a lo que aún no se comprende",
    ],

    characters: ["Esdras", "Lucas"],

    verses: [
      {
        reference: "1 Corintios 8:1",
        text: "Pablo advierte que el conocimiento envanece, pero el amor edifica.",
      },
      {
        reference: "Proverbios 2:6",
        text: "Jehová da la sabiduría, y de su boca viene el conocimiento y la inteligencia.",
      },
    ],
  },

  {
    id: "discernimiento",
    name: "Discernimiento",
    icon: Search,
    color: "bg-teal-500",

    maxScore: 10,
    questions: 2,

    summary:
      "Distingue entre la verdad y el error, evaluando doctrinas, actitudes y espíritus con sensibilidad bíblica.",

    description:
      "El don de discernimiento de espíritus (1 Co. 12:10) capacita a la persona para reconocer cuándo una enseñanza, actitud o motivación se aparta de la verdad bíblica, protegiendo así a la iglesia del engaño y el error doctrinal.",

    strengths: [
      "Sensibilidad para detectar inconsistencias doctrinales",
      "Capacidad de evaluar motivaciones e intenciones",
      "Firmeza para señalar el error con base bíblica",
      "Protección natural hacia la pureza de la iglesia",
    ],

    risks: [
      "Suspicacia excesiva o juicios apresurados",
      "Legalismo al aplicar estándares propios como si fueran bíblicos",
      "Aislarse de personas por diferencias menores",
    ],

    development: [
      "Fundamentar todo discernimiento en la Escritura, no en la intuición",
      "Ejercer el don con gracia y no solo con crítica",
      "Consultar a otros antes de emitir juicios definitivos",
      "Cultivar la caridad hacia los débiles en la fe (Ro. 14)",
    ],

    characters: ["Los de Berea (Hechos 17:11)", "Juan el apóstol"],

    verses: [
      {
        reference: "1 Juan 4:1",
        text: "Juan exhorta a no creer a todo espíritu, sino a probar los espíritus para ver si son de Dios.",
      },
      {
        reference: "Hechos 17:11",
        text: "Los de Berea examinaban cada día las Escrituras para confirmar si lo que se les enseñaba era así.",
      },
    ],
  },

  {
    id: "servicio",
    name: "Servicio",
    icon: HandHelping,
    color: "bg-green-500",

    maxScore: 10,
    questions: 2,

    summary:
      "Atiende necesidades prácticas con humildad, sirviendo a otros de forma concreta y constante.",

    description:
      "El don de servicio (Ro. 12:7, también llamado 'ayudas' en 1 Co. 12:28) se expresa en la disposición a atender necesidades prácticas de la iglesia, muchas veces en tareas que pasan desapercibidas pero que sostienen la vida de la comunidad.",

    strengths: [
      "Disposición constante a ayudar sin buscar reconocimiento",
      "Atención a los detalles prácticos",
      "Fidelidad en tareas repetitivas o poco visibles",
      "Sensibilidad para notar necesidades concretas",
    ],

    risks: [
      "Agotamiento por no saber decir que no",
      "Sentirse infravalorado si no se reconoce el esfuerzo",
      "Descuidar otras áreas de crecimiento espiritual por estar siempre sirviendo",
    ],

    development: [
      "Aprender a establecer límites saludables",
      "Recordar que el servicio se hace para el Señor, no para ser visto (Col. 3:23)",
      "Buscar momentos de descanso y renovación espiritual",
      "Permitir que otros también sirvan, sin acaparar tareas",
    ],

    characters: ["Marta", "Los siete de Hechos 6"],

    verses: [
      {
        reference: "Marcos 10:45",
        text: "El Hijo del Hombre no vino para ser servido, sino para servir y dar su vida en rescate por muchos.",
      },
      {
        reference: "Hechos 6:3",
        text: "La iglesia elige a hombres llenos del Espíritu y de sabiduría para atender el servicio diario.",
      },
    ],
  },

  {
    id: "misericordia",
    name: "Misericordia",
    icon: UserRound,
    color: "bg-pink-500",

    maxScore: 10,
    questions: 2,

    summary:
      "Percibe y responde al sufrimiento ajeno con compasión genuina y acción concreta.",

    description:
      "El don de misericordia (Ro. 12:8) se manifiesta en una sensibilidad especial hacia quienes sufren, junto con la disposición a acompañarlos y ayudarlos con alegría, reflejando el corazón compasivo de Dios.",

    strengths: [
      "Empatía profunda hacia el dolor ajeno",
      "Capacidad de acompañar sin juzgar",
      "Alegría genuina al ayudar a los que sufren",
      "Sensibilidad para notar a quienes otros pasan por alto",
    ],

    risks: [
      "Absorber emocionalmente el sufrimiento de otros hasta el agotamiento",
      "Evitar la confrontación necesaria por no causar más dolor",
      "Dificultad para poner límites ante personas manipuladoras",
    ],

    development: [
      "Practicar el autocuidado y el descanso emocional",
      "Aprender a combinar compasión con verdad (Ef. 4:15)",
      "Buscar apoyo de otros al acompañar casos difíciles",
      "Reconocer que la misericordia también implica confrontar con amor",
    ],

    characters: ["El buen samaritano (parábola)", "Dorcas / Tabita"],

    verses: [
      {
        reference: "Romanos 12:8",
        text: "Pablo llama a ejercer la misericordia con alegría.",
      },
      {
        reference: "Lucas 10:33-34",
        text: "El samaritano, al ver al hombre herido, se compadece de él y lo cuida con sus propias manos.",
      },
    ],
  },

  {
    id: "administracion",
    name: "Administración",
    icon: Briefcase,
    color: "bg-slate-600",

    maxScore: 10,
    questions: 2,

    summary:
      "Organiza personas, recursos y procesos para que la obra de la iglesia funcione con orden y eficacia.",

    description:
      "El don de administración ('gobernaciones' en 1 Co. 12:28) capacita a la persona para planificar, organizar y coordinar los recursos y las personas de manera que los ministerios de la iglesia funcionen con orden, eficiencia y para la gloria de Dios.",

    strengths: [
      "Capacidad de organizar procesos complejos",
      "Atención al detalle y a la planificación",
      "Habilidad para coordinar personas y recursos",
      "Visión práctica para resolver problemas logísticos",
    ],

    risks: [
      "Priorizar la eficiencia sobre las relaciones",
      "Rigidez frente a los cambios o imprevistos",
      "Frustración ante la falta de organización en otros",
    ],

    development: [
      "Recordar que las personas no son solo piezas de un sistema",
      "Desarrollar flexibilidad ante lo inesperado",
      "Comunicar con claridad el propósito detrás de cada estructura",
      "Servir con humildad, no con control",
    ],

    characters: ["Nehemías", "José en Egipto"],

    verses: [
      {
        reference: "1 Corintios 14:40",
        text: "Pablo exhorta a que todo se haga decentemente y con orden.",
      },
      {
        reference: "Éxodo 18:21",
        text: "Jetro aconseja a Moisés a designar hombres capaces para organizar y compartir la carga de gobernar al pueblo.",
      },
    ],
  },
];