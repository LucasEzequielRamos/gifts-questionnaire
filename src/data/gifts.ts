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
    "Dios te impulsa a abrir caminos, iniciar nuevas obras y motivar a otros a expandir Su Reino.",

  description:
    "El don de apóstol se caracteriza por la capacidad de iniciar nuevas obras, identificar oportunidades para servir y guiar a otros hacia nuevos desafíos espirituales. Quienes poseen este don suelen tener una visión amplia del Reino de Dios y disfrutan construir, organizar y desarrollar proyectos que permitan alcanzar a más personas con el Evangelio. Son personas que se adaptan con facilidad a los cambios, enfrentan nuevos desafíos con entusiasmo y buscan constantemente formas de hacer crecer la obra de Dios. Este don requiere humildad, dependencia del Señor y un corazón dispuesto a servir antes que buscar reconocimiento.",

  strengths: [
    "Tiene iniciativa para comenzar nuevos proyectos y ministerios.",
    "Se adapta con facilidad a los cambios y nuevos desafíos.",
    "Inspira y motiva a otros a servir con una visión de crecimiento."
  ],

  risks: [
    "Puede comenzar muchos proyectos sin terminarlos.",
    "Corre el riesgo de descuidar los detalles por enfocarse en la visión general.",
    "Puede frustrarse cuando otros avanzan a un ritmo diferente."
  ],

  development: [
    "Mantén una vida constante de oración antes de iniciar nuevos proyectos.",
    "Aprende a trabajar en equipo y delegar responsabilidades.",
    "Escucha el consejo de líderes maduros antes de tomar decisiones importantes.",
    "Desarrolla perseverancia para finalizar aquello que comienzas.",
    "Recuerda que el crecimiento del Reino depende de Dios y no solo del esfuerzo humano."
  ],

  characters: [
    "Pablo",
    "Bernabé",
    "Timoteo"
  ],

  verses: [{
    reference: "Efesios 4:11" ,
    text:"«Y él mismo constituyó a unos, apóstoles; a otros, profetas; a otros, evangelistas; a otros, pastores y maestros.» Este versículo muestra que el ministerio apostólico es un regalo de Cristo para fortalecer y edificar a Su Iglesia.",

  },
    {
      reference: "1 Corintios 12:28" ,
      text:"«Y a unos puso Dios en la iglesia, primeramente apóstoles, luego profetas, lo tercero maestros...» Pablo enseña que Dios distribuye diferentes funciones dentro del cuerpo de Cristo para que la Iglesia crezca de manera saludable.",
    },
    {
      reference: "Mateo 28:19-20" ,
      text:"«Por tanto, id, y haced discípulos a todas las naciones...» La Gran Comisión refleja el corazón del don apostólico: llevar el Evangelio a nuevos lugares y formar discípulos que continúen la misión."
    }
  ]
},

  {
  id: "profeta",
  name: "Profeta",
  icon: Megaphone,
  color: "bg-red-500",

  maxScore: 15,
  questions: 3,

  summary:
    "Dios te da sensibilidad para reconocer Su verdad y valentía para comunicarla con amor.",

  description:
    "El don de profecía permite discernir con claridad aquello que está de acuerdo con la voluntad de Dios y comunicar Su verdad para edificar, corregir y animar a la Iglesia. No se trata únicamente de anunciar acontecimientos futuros, sino de hablar con fidelidad lo que Dios revela a través de Su Palabra. Las personas con este don suelen tener una profunda pasión por la santidad, la justicia y la obediencia al Señor. Su desafío es transmitir la verdad con amor, recordando que el propósito de Dios siempre es restaurar y acercar a las personas a Él.",

  strengths: [
    "Discierne con facilidad lo que está de acuerdo con la Palabra de Dios.",
    "Tiene valentía para defender la verdad aun cuando resulte difícil.",
    "Motiva a otros a buscar una vida de obediencia y santidad."
  ],

  risks: [
    "Puede comunicar la verdad con dureza en lugar de hacerlo con amor.",
    "Corre el riesgo de juzgar rápidamente las acciones de otras personas.",
    "Puede olvidar mostrar gracia mientras enfatiza la justicia."
  ],

  development: [
    "Dedica tiempo al estudio profundo de la Biblia para afirmar cada convicción.",
    "Aprende a hablar la verdad con humildad y amor.",
    "Ora antes de corregir o aconsejar a alguien.",
    "Escucha también a otros creyentes maduros para mantener un espíritu enseñable.",
    "Recuerda que el objetivo siempre es restaurar y no simplemente señalar errores."
  ],

  characters: [
    "Elías",
    "Jeremías",
    "Juan el Bautista"
  ],

  verses: [
    {
      reference: "Efesios 4:15",
      text: "«Sino que siguiendo la verdad en amor, crezcamos en todo en aquel que es la cabeza, esto es, Cristo.» La verdad debe comunicarse siempre con amor para producir crecimiento espiritual y no solamente corrección."
    },
    {
      reference: "1 Corintios 14:3",
      text: "«Pero el que profetiza habla a los hombres para edificación, exhortación y consolación.» La profecía bíblica tiene como propósito fortalecer, animar y consolar a la Iglesia, no generar temor o división."
    },
    {
      reference: "Jeremías 1:7-8",
      text: "«No digas: Soy un niño... porque a todo lo que te envíe irás tú...» Dios recuerda que Él capacita a quienes llama para hablar Su verdad, sin importar su edad o experiencia."
    }
  ]
},

 {
  id: "evangelista",
  name: "Evangelista",
  icon: Flame,
  color: "bg-orange-500",

  questions: 3,
  maxScore: 15,

  summary:
    "Dios pone en tu corazón el deseo de compartir a Jesús para que más personas lleguen a conocerlo.",

  description:
    "El don de evangelismo impulsa a una persona a compartir las buenas noticias de Jesucristo con entusiasmo, sensibilidad y amor. Quienes desarrollan este don sienten una profunda alegría cuando otros conocen a Cristo y desean que todos tengan la oportunidad de escuchar el mensaje del Evangelio. No se trata únicamente de predicar frente a una multitud, sino también de reflejar a Jesús mediante el ejemplo diario, las conversaciones personales y una vida coherente con la fe. Este don florece cuando se combina con humildad, compasión y una verdadera preocupación por las personas.",

  strengths: [
    "Comparte el Evangelio con naturalidad y entusiasmo.",
    "Tiene facilidad para conectar con personas que aún no conocen a Cristo.",
    "Transmite esperanza y alegría al hablar de la salvación."
  ],

  risks: [
    "Puede frustrarse cuando las personas no responden inmediatamente al mensaje.",
    "Corre el riesgo de enfocarse solo en alcanzar personas nuevas y descuidar el discipulado.",
    "Puede hablar demasiado y escuchar poco las necesidades de quienes lo rodean."
  ],

  development: [
    "Ora diariamente por personas que todavía no conocen a Jesús.",
    "Aprende a escuchar antes de compartir tu experiencia de fe.",
    "Conoce bien el mensaje del Evangelio para comunicarlo con claridad.",
    "Vive de manera coherente con lo que predicas.",
    "Recuerda que es el Espíritu Santo quien transforma los corazones."
  ],

  characters: [
    "Felipe",
    "Pablo",
    "Andrés"
  ],

  verses: [
    {
      reference: "Mateo 28:19-20",
      text: "«Por tanto, id, y haced discípulos a todas las naciones...». Jesús encomienda a todos sus seguidores la misión de compartir el Evangelio y formar discípulos, mostrando el corazón del ministerio evangelístico."
    },
    {
      reference: "Romanos 10:14",
      text: "«¿Y cómo creerán en aquel de quien no han oído? ¿Y cómo oirán sin haber quien les predique?». Pablo enseña que las personas necesitan escuchar el mensaje de Cristo para poder creer en Él."
    },
    {
      reference: "2 Timoteo 4:5",
      text: "«Pero tú sé sobrio en todo... haz obra de evangelista, cumple tu ministerio.». Pablo anima a Timoteo a perseverar anunciando el Evangelio con fidelidad, aun en tiempos difíciles."
    }
  ]
},

 {
  id: "pastor",
  name: "Pastor",
  icon: Heart,
  color: "bg-emerald-500",

  questions: 3,
  maxScore: 15,

  summary:
    "Dios desarrolla en ti un corazón dispuesto a cuidar, acompañar y fortalecer espiritualmente a otras personas.",

  description:
    "El don de pastor refleja el corazón de Jesús como el Buen Pastor. Quienes manifiestan este don disfrutan acompañar a las personas en su crecimiento espiritual, escuchar sus luchas y brindar apoyo con paciencia y amor. Su preocupación principal no es simplemente organizar actividades, sino cuidar genuinamente la vida de quienes Dios pone a su alrededor. Son personas accesibles, compasivas y comprometidas con el bienestar del grupo. Este don requiere sensibilidad, humildad y una disposición constante para servir, recordando que el verdadero Pastor de la Iglesia siempre es Cristo.",

  strengths: [
    "Demuestra un interés genuino por el bienestar espiritual de las personas.",
    "Escucha con empatía y brinda apoyo en momentos difíciles.",
    "Acompaña con paciencia el crecimiento de otros creyentes."
  ],

  risks: [
    "Puede descuidar su propia vida espiritual por cuidar demasiado a los demás.",
    "Le cuesta establecer límites saludables cuando quiere ayudar a todos.",
    "Puede desanimarse cuando las personas rechazan el acompañamiento."
  ],

  development: [
    "Dedica tiempo a fortalecer tu relación personal con Dios.",
    "Aprende a escuchar antes de dar consejos.",
    "Confía en que Dios también obra cuando tú no puedes resolver una situación.",
    "Busca el equilibrio entre servir y descansar.",
    "Rodéate de otros líderes que puedan apoyarte y aconsejarte."
  ],

  characters: [
    "Jesús",
    "Pedro",
    "Timoteo"
  ],

  verses: [
    {
      reference: "Juan 10:11",
      text: "«Yo soy el buen pastor; el buen pastor su vida da por las ovejas.». Jesús es el modelo perfecto de amor, entrega y cuidado por quienes le pertenecen."
    },
    {
      reference: "1 Pedro 5:2-3",
      text: "«Apacentad la grey de Dios que está entre vosotros...». Pedro anima a cuidar al pueblo de Dios con amor, humildad y siendo ejemplo para los demás."
    },
    {
      reference: "Ezequiel 34:16",
      text: "«Yo buscaré la perdida, y haré volver al redil la descarriada...». Dios revela Su corazón pastoral al restaurar y fortalecer a quienes necesitan cuidado."
    }
  ]
},

  {
  id: "maestro",
  name: "Maestro",
  icon: BookOpen,
  color: "bg-blue-500",

  questions: 3,
  maxScore: 15,

  summary:
    "Dios te da el deseo de comprender profundamente Su Palabra y ayudar a otros a entenderla con claridad.",

  description:
    "El don de enseñanza permite comprender, organizar y comunicar las verdades de la Biblia de una manera clara y fiel. Quienes desarrollan este don disfrutan estudiar las Escrituras, responder preguntas y ayudar a otros a crecer en el conocimiento de Dios. Más que transmitir información, buscan que las personas comprendan la voluntad del Señor y la apliquen a su vida diaria. Este don requiere humildad, dedicación al estudio y una dependencia constante del Espíritu Santo para enseñar con amor, fidelidad y sabiduría.",

  strengths: [
    "Explica conceptos bíblicos de forma clara y comprensible.",
    "Tiene interés constante por aprender y profundizar en las Escrituras.",
    "Ayuda a otros a crecer espiritualmente mediante la enseñanza."
  ],

  risks: [
    "Puede enfocarse demasiado en el conocimiento y descuidar la práctica.",
    "Corre el riesgo de volverse crítico con quienes conocen menos.",
    "Puede sentirse frustrado cuando otros no muestran interés por aprender."
  ],

  development: [
    "Dedica tiempo constante al estudio de la Biblia.",
    "Aprende a comunicar la verdad con paciencia y amor.",
    "Escucha diferentes perspectivas bíblicas con humildad.",
    "Busca oportunidades para enseñar en grupos pequeños o discipulados.",
    "Permite que tu vida refleje aquello que enseñas."
  ],

  characters: [
    "Esdras",
    "Pablo",
    "Priscila"
  ],

  verses: [
    {
      reference: "Romanos 12:7",
      text: "«...el que enseña, en la enseñanza.» Pablo recuerda que quienes reciben este don deben dedicarlo al servicio de la Iglesia con fidelidad y compromiso."
    },
    {
      reference: "2 Timoteo 2:15",
      text: "«Procura con diligencia presentarte a Dios aprobado... que usa bien la palabra de verdad.» Este pasaje anima a estudiar cuidadosamente las Escrituras para enseñar correctamente la verdad de Dios."
    },
    {
      reference: "Santiago 3:1",
      text: "«Hermanos míos, no os hagáis maestros muchos de vosotros...» Santiago recuerda la gran responsabilidad que implica enseñar la Palabra de Dios con fidelidad."
    }
  ]
},

  {
  id: "liderazgo",
  name: "Liderazgo",
  icon: Crown,
  color: "bg-amber-500",

  questions: 3,
  maxScore: 15,

  summary:
    "Dios te capacita para influir, organizar y guiar a otras personas hacia un propósito común.",

  description:
    "El don de liderazgo permite motivar, organizar y dirigir a otras personas para alcanzar objetivos que glorifiquen a Dios. Quienes desarrollan este don suelen tomar la iniciativa, planificar con claridad y ayudar a que un equipo trabaje unido. Un buen líder cristiano no busca reconocimiento personal, sino servir a los demás siguiendo el ejemplo de Jesús. Este don combina visión, responsabilidad, humildad y la capacidad de tomar decisiones con sabiduría, siempre procurando que las personas crezcan mientras cumplen la misión que Dios les ha encomendado.",

  strengths: [
    "Organiza equipos y recursos de manera eficiente.",
    "Motiva a otros para trabajar unidos por un objetivo.",
    "Toma decisiones con iniciativa y responsabilidad."
  ],

  risks: [
    "Puede querer controlar demasiado las decisiones.",
    "Corre el riesgo de confiar más en sus capacidades que en Dios.",
    "Puede impacientarse cuando el equipo no avanza al mismo ritmo."
  ],

  development: [
    "Busca siempre la dirección de Dios antes de tomar decisiones importantes.",
    "Aprende a escuchar las ideas y opiniones de los demás.",
    "Desarrolla un corazón de servicio antes que de autoridad.",
    "Forma nuevos líderes y aprende a delegar responsabilidades.",
    "Recuerda que el éxito verdadero consiste en glorificar a Dios y ayudar a crecer a las personas."
  ],

  characters: [
    "Nehemías",
    "Moisés",
    "Josué"
  ],

  verses: [
    {
      reference: "Romanos 12:8",
      text: "«...el que preside, con solicitud...» Pablo enseña que el liderazgo debe ejercerse con dedicación, responsabilidad y compromiso."
    },
    {
      reference: "Marcos 10:45",
      text: "«Porque el Hijo del Hombre no vino para ser servido, sino para servir...» Jesús enseña que el verdadero liderazgo cristiano se basa en el servicio y la entrega por los demás."
    },
    {
      reference: "Éxodo 18:21",
      text: "«Además escoge tú de entre todo el pueblo varones de virtud...» Jetro aconseja a Moisés formar líderes capaces y delegar responsabilidades para cuidar mejor al pueblo de Dios."
    }
  ]
},

  {
  id: "exhortacion",
  name: "Exhortación",
  icon: Users,
  color: "bg-pink-500",

  questions: 3,
  maxScore: 15,

  summary:
    "Dios te da la capacidad de animar, fortalecer y motivar a otros para que continúen creciendo en su fe.",

  description:
    "El don de exhortación permite brindar ánimo, consuelo y motivación a las personas en los momentos en que más lo necesitan. Quienes desarrollan este don tienen facilidad para escuchar, comprender y ofrecer palabras oportunas que fortalecen la fe y renuevan la esperanza. Su presencia suele transmitir confianza y aliento, ayudando a otros a perseverar en medio de las dificultades. La exhortación bíblica no consiste únicamente en corregir, sino también en acompañar, animar y recordar las promesas de Dios para que las personas continúen avanzando en su caminar con Cristo.",

  strengths: [
    "Anima a otros con palabras oportunas y edificantes.",
    "Escucha con empatía y ofrece apoyo en momentos difíciles.",
    "Motiva a las personas a seguir creciendo espiritualmente."
  ],

  risks: [
    "Puede involucrarse demasiado en los problemas de los demás.",
    "Corre el riesgo de dar consejos sin escuchar completamente la situación.",
    "Puede desanimarse cuando no ve cambios inmediatos en las personas."
  ],

  development: [
    "Dedica tiempo a escuchar antes de hablar.",
    "Aprende a fundamentar tus consejos en la Palabra de Dios.",
    "Ora por las personas antes y después de animarlas.",
    "Mantén una actitud positiva incluso en medio de las dificultades.",
    "Recuerda que solo Dios puede transformar verdaderamente los corazones."
  ],

  characters: [
    "Bernabé",
    "Pablo",
    "Timoteo"
  ],

  verses: [
    {
      reference: "Hebreos 10:24-25",
      text: "«Y considerémonos unos a otros para estimularnos al amor y a las buenas obras...». Dios nos llama a animarnos mutuamente y a perseverar juntos en la fe."
    },
    {
      reference: "1 Tesalonicenses 5:11",
      text: "«Por lo cual, animaos unos a otros, y edificaos unos a otros...». La exhortación fortalece la unidad y el crecimiento espiritual dentro de la Iglesia."
    },
    {
      reference: "Romanos 12:8",
      text: "«...el que exhorta, en la exhortación...». Pablo enseña que este don debe ejercerse con dedicación para fortalecer a otros creyentes."
    }
  ]
},

  {
  id: "fe",
  name: "Fe",
  icon: Shield,
  color: "bg-violet-500",

  questions: 3,
  maxScore: 15,

  summary:
    "Dios desarrolla en ti una confianza firme en Su poder y en Sus promesas, incluso cuando no puedes ver la respuesta.",

  description:
    "El don de fe se manifiesta en una confianza extraordinaria en Dios, aun cuando las circunstancias parezcan imposibles. Quienes desarrollan este don inspiran esperanza y transmiten seguridad porque creen que Dios siempre cumple Sus promesas y continúa obrando en cada situación. Esta fe no se basa en el optimismo humano, sino en el conocimiento del carácter fiel de Dios. Las personas con este don suelen fortalecer la confianza de quienes las rodean y recordar constantemente que nada es imposible para el Señor cuando actuamos conforme a Su voluntad.",

  strengths: [
    "Confía plenamente en Dios aun en tiempos difíciles.",
    "Transmite esperanza y seguridad a quienes lo rodean.",
    "Persevera sin rendirse cuando enfrenta desafíos."
  ],

  risks: [
    "Puede subestimar las dificultades prácticas confiando únicamente en su percepción.",
    "Corre el riesgo de desanimarse cuando Dios responde de una manera diferente a la esperada.",
    "Puede esperar que otros tengan el mismo nivel de confianza que él."
  ],

  development: [
    "Fortalece tu relación con Dios mediante la oración diaria.",
    "Recuerda constantemente las promesas que Dios ha cumplido en Su Palabra.",
    "Comparte testimonios que animen la fe de otros.",
    "Aprende a esperar con paciencia el tiempo perfecto de Dios.",
    "Mantén una actitud de confianza incluso cuando no comprendas lo que está sucediendo."
  ],

  characters: [
    "Abraham",
    "Daniel",
    "Caleb"
  ],

  verses: [
    {
      reference: "Hebreos 11:1",
      text: "«Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve.». La fe nos permite confiar plenamente en Dios aun cuando todavía no vemos el resultado."
    },
    {
      reference: "Marcos 9:23",
      text: "«Si puedes creer, al que cree todo le es posible.». Jesús enseña que la confianza en el poder de Dios abre la puerta para ver Su obra en nuestra vida."
    },
    {
      reference: "Mateo 17:20",
      text: "«...si tuviereis fe como un grano de mostaza... nada os será imposible.». Jesús destaca que una fe genuina, aunque parezca pequeña, puede producir grandes resultados cuando está puesta en Dios."
    }
  ]
},

  {
  id: "sabiduria",
  name: "Sabiduría",
  icon: Lightbulb,
  color: "bg-yellow-500",

  questions: 2,
  maxScore: 10,

  summary:
    "Dios te ayuda a aplicar Su verdad con discernimiento para tomar decisiones que honren Su voluntad.",

  description:
    "El don de sabiduría permite comprender cómo aplicar los principios de la Palabra de Dios en situaciones reales de la vida. Quienes desarrollan este don suelen ofrecer consejos equilibrados, tomar decisiones prudentes y ayudar a otros a encontrar dirección en momentos de incertidumbre. La sabiduría bíblica no depende únicamente de la experiencia o del conocimiento, sino de una relación cercana con Dios y de la guía del Espíritu Santo. Este don busca reflejar el carácter de Cristo en cada decisión, promoviendo la paz, la justicia y el crecimiento espiritual de quienes lo rodean.",

  strengths: [
    "Brinda consejos prácticos basados en principios bíblicos.",
    "Analiza las situaciones con calma antes de tomar decisiones.",
    "Ayuda a otros a encontrar dirección en momentos difíciles."
  ],

  risks: [
    "Puede confiar demasiado en su propio criterio.",
    "Corre el riesgo de analizar tanto una situación que demore en actuar.",
    "Puede frustrarse cuando otros toman decisiones impulsivas."
  ],

  development: [
    "Ora constantemente pidiendo la dirección de Dios.",
    "Estudia la Biblia para conocer mejor los principios divinos.",
    "Aprende de creyentes maduros y de sus experiencias.",
    "Escucha antes de aconsejar y procura comprender toda la situación.",
    "Recuerda que la verdadera sabiduría comienza con el temor del Señor."
  ],

  characters: [
    "Salomón",
    "José",
    "Daniel"
  ],

  verses: [
    {
      reference: "Santiago 1:5",
      text: "«Y si alguno de vosotros tiene falta de sabiduría, pídala a Dios...». Dios promete dar sabiduría generosamente a quienes la buscan con fe y humildad."
    },
    {
      reference: "Proverbios 9:10",
      text: "«El temor de Jehová es el principio de la sabiduría...». La verdadera sabiduría nace de reconocer a Dios y vivir conforme a Su voluntad."
    },
    {
      reference: "Colosenses 1:9",
      text: "«...para que seáis llenos del conocimiento de su voluntad en toda sabiduría e inteligencia espiritual.». Pablo ora para que los creyentes vivan dirigidos por la sabiduría que proviene de Dios."
    }
  ]
},

  {
  id: "conocimiento",
  name: "Conocimiento",
  icon: Brain,
  color: "bg-cyan-500",

  questions: 2,
  maxScore: 10,

  summary:
    "Dios despierta en ti el deseo de descubrir, comprender y profundizar en las verdades de Su Palabra.",

  description:
    "El don de conocimiento impulsa a estudiar, investigar y comprender profundamente las Escrituras y las verdades de Dios. Quienes desarrollan este don disfrutan aprender, descubrir conexiones entre diferentes pasajes bíblicos y ayudar a otros a comprender mejor el mensaje de la Biblia. Su búsqueda constante del conocimiento no tiene como objetivo acumular información, sino conocer más a Dios y fortalecer la fe de la Iglesia. Este don florece cuando el aprendizaje va acompañado de humildad y de una vida dispuesta a poner en práctica aquello que se aprende.",

  strengths: [
    "Disfruta estudiar y profundizar en la Palabra de Dios.",
    "Relaciona fácilmente diferentes enseñanzas bíblicas.",
    "Comparte información útil que fortalece la fe de otros."
  ],

  risks: [
    "Puede enfocarse demasiado en el conocimiento y descuidar la práctica.",
    "Corre el riesgo de sentirse superior por lo que sabe.",
    "Puede perder de vista que el amor es más importante que el simple conocimiento."
  ],

  development: [
    "Mantén una rutina constante de estudio bíblico.",
    "Aplica en tu vida aquello que aprendes.",
    "Comparte tus conocimientos con humildad y amor.",
    "Escucha diferentes perspectivas bíblicas para seguir creciendo.",
    "Recuerda que conocer más de Dios debe acercarte más a Él y a las personas."
  ],

  characters: [
    "Daniel",
    "Esdras",
    "Lucas"
  ],

  verses: [
    {
      reference: "Proverbios 2:6",
      text: "«Porque Jehová da la sabiduría, y de su boca viene el conocimiento y la inteligencia.». Todo verdadero conocimiento espiritual tiene su origen en Dios."
    },
    {
      reference: "Oseas 4:6",
      text: "«Mi pueblo fue destruido, porque le faltó conocimiento...». Dios muestra la importancia de conocer Su voluntad para vivir correctamente."
    },
    {
      reference: "2 Pedro 3:18",
      text: "«Antes bien, creced en la gracia y el conocimiento de nuestro Señor y Salvador Jesucristo...». La vida cristiana implica crecer continuamente en el conocimiento de Cristo."
    }
  ]
},

  {
  id: "discernimiento",
  name: "Discernimiento",
  icon: Search,
  color: "bg-teal-500",

  questions: 2,
  maxScore: 10,

  summary:
    "Dios te ayuda a distinguir entre la verdad y el error para caminar con sabiduría y proteger a otros.",

  description:
    "El don de discernimiento permite reconocer con claridad aquello que proviene de Dios y aquello que no está de acuerdo con Su voluntad. Quienes desarrollan este don suelen evaluar cuidadosamente las enseñanzas, decisiones y actitudes a la luz de las Escrituras antes de aceptarlas. Más que desconfiar de todo, buscan proteger la verdad y ayudar a otros a permanecer firmes en la fe. Este don requiere una profunda comunión con Dios, humildad para seguir aprendiendo y un corazón dispuesto a actuar siempre con amor y sabiduría.",

  strengths: [
    "Reconoce fácilmente enseñanzas que no están de acuerdo con la Biblia.",
    "Analiza las situaciones con prudencia antes de tomar una decisión.",
    "Ayuda a otros a permanecer firmes en la verdad."
  ],

  risks: [
    "Puede volverse demasiado crítico o desconfiado.",
    "Corre el riesgo de juzgar rápidamente las intenciones de los demás.",
    "Puede enfocarse tanto en detectar errores que olvide demostrar gracia."
  ],

  development: [
    "Profundiza diariamente en el estudio de las Escrituras.",
    "Ora pidiendo la guía del Espíritu Santo antes de emitir un juicio.",
    "Aprende a comunicar la verdad con amor y respeto.",
    "Escucha el consejo de creyentes maduros antes de llegar a conclusiones.",
    "Recuerda que el discernimiento debe edificar y no generar división."
  ],

  characters: [
    "Salomón",
    "Pablo",
    "Juan"
  ],

  verses: [
    {
      reference: "1 Juan 4:1",
      text: "«Amados, no creáis a todo espíritu, sino probad los espíritus si son de Dios...». Juan anima a evaluar toda enseñanza para asegurarse de que esté de acuerdo con la verdad de Dios."
    },
    {
      reference: "Hebreos 5:14",
      text: "«...los que por el uso tienen los sentidos ejercitados en el discernimiento del bien y del mal.». El discernimiento se fortalece mediante la práctica constante de la Palabra de Dios."
    },
    {
      reference: "Filipenses 1:9-10",
      text: "«...para que aprobéis lo mejor...». Pablo ora para que los creyentes desarrollen discernimiento y puedan vivir agradando al Señor."
    }
  ]
},

  {
  id: "servicio",
  name: "Servicio",
  icon: HandHelping,
  color: "bg-green-500",

  questions: 2,
  maxScore: 10,

  summary:
    "Dios pone en tu corazón el deseo de ayudar a otros con alegría, humildad y disposición.",

  description:
    "El don de servicio se refleja en una actitud constante de ayudar a los demás con amor, sin buscar reconocimiento ni recompensa. Quienes desarrollan este don encuentran alegría al colaborar en tareas prácticas, atender necesidades y contribuir para que otras personas puedan crecer y servir mejor. Comprenden que ninguna tarea es pequeña cuando se realiza para Dios y están dispuestos a servir donde más se los necesite. Su ejemplo inspira humildad y demuestra el amor de Cristo mediante acciones concretas más que con palabras.",

  strengths: [
    "Está dispuesto a ayudar en cualquier tarea con buena actitud.",
    "Observa necesidades prácticas que otros suelen pasar por alto.",
    "Sirve con humildad sin buscar reconocimiento."
  ],

  risks: [
    "Puede asumir demasiadas responsabilidades y terminar agotado.",
    "Corre el riesgo de descuidar sus propias necesidades por ayudar a todos.",
    "Puede sentirse poco valorado cuando su trabajo pasa desapercibido."
  ],

  development: [
    "Sirve con alegría recordando que todo lo haces para Dios.",
    "Aprende a descansar y cuidar también de tu propia vida espiritual.",
    "Acepta ayuda de otros cuando sea necesario.",
    "Busca oportunidades para servir incluso en tareas sencillas.",
    "Recuerda que Dios ve y valora cada acto de servicio, aunque nadie más lo note."
  ],

  characters: [
    "Marta",
    "Dorcas",
    "Esteban"
  ],

  verses: [
    {
      reference: "Gálatas 5:13",
      text: "«...servíos por amor los unos a los otros.». El verdadero servicio nace del amor y busca el bienestar de los demás."
    },
    {
      reference: "Marcos 10:45",
      text: "«Porque el Hijo del Hombre no vino para ser servido, sino para servir...». Jesús es el ejemplo perfecto de un corazón dispuesto a servir con humildad."
    },
    {
      reference: "Colosenses 3:23-24",
      text: "«Y todo lo que hagáis, hacedlo de corazón, como para el Señor...». Dios honra el servicio realizado con excelencia y una actitud sincera."
    }
  ]
},

  {
  id: "misericordia",
  name: "Misericordia",
  icon: UserRound,
  color: "bg-rose-500",

  questions: 2,
  maxScore: 10,

  summary:
    "Dios desarrolla en ti un corazón sensible para amar, consolar y ayudar a quienes atraviesan momentos de dolor o necesidad.",

  description:
    "El don de misericordia permite comprender profundamente el sufrimiento de otras personas y responder con compasión, amor y acciones concretas. Quienes desarrollan este don suelen ser sensibles a las necesidades físicas, emocionales y espirituales de quienes los rodean. Disfrutan acompañar, escuchar, consolar y brindar ayuda sin esperar nada a cambio. Su actitud refleja el corazón compasivo de Jesús, quien siempre mostró amor por los que sufrían. Este don recuerda a la Iglesia la importancia de vivir una fe práctica, donde la compasión se convierte en servicio y el amor se demuestra mediante acciones.",

  strengths: [
    "Demuestra empatía y compasión hacia quienes están sufriendo.",
    "Está dispuesto a ayudar de manera práctica y desinteresada.",
    "Genera confianza y hace que las personas se sientan acompañadas."
  ],

  risks: [
    "Puede involucrarse emocionalmente hasta el punto de descuidar su propio bienestar.",
    "Corre el riesgo de querer resolver problemas que solo Dios puede transformar.",
    "Puede sentirse profundamente afectado por el dolor ajeno."
  ],

  development: [
    "Ora por las personas antes de intentar ayudarlas.",
    "Aprende a acompañar sin cargar con responsabilidades que no te corresponden.",
    "Busca oportunidades para servir a quienes atraviesan necesidades.",
    "Recuerda que mostrar misericordia también incluye compartir esperanza en Cristo.",
    "Cuida tu vida espiritual para poder seguir sirviendo con un corazón sano."
  ],

  characters: [
    "El buen samaritano",
    "Dorcas",
    "Jesús"
  ],

  verses: [
    {
      reference: "Lucas 6:36",
      text: "«Sed, pues, misericordiosos, como también vuestro Padre es misericordioso.» Jesús invita a reflejar el carácter compasivo de Dios en nuestra manera de tratar a los demás."
    },
    {
      reference: "Romanos 12:8",
      text: "«...el que hace misericordia, con alegría.» La misericordia debe ejercerse con un corazón dispuesto, mostrando el amor de Dios con gozo y sinceridad."
    },
    {
      reference: "Mateo 5:7",
      text: "«Bienaventurados los misericordiosos, porque ellos alcanzarán misericordia.» Jesús enseña que quienes practican la misericordia reflejan el corazón de Dios y reciben Su favor."
    }
  ]
},

  {
  id: "administracion",
  name: "Administración",
  icon: Briefcase,
  color: "bg-slate-500",

  questions: 2,
  maxScore: 10,

  summary:
    "Dios te da la capacidad de organizar personas, recursos y procesos para que Su obra se desarrolle de manera ordenada y eficiente.",

  description:
    "El don de administración permite planificar, organizar y coordinar recursos con el propósito de que la obra de Dios avance de forma ordenada y eficaz. Quienes desarrollan este don disfrutan estructurar proyectos, distribuir responsabilidades y encontrar maneras de mejorar el funcionamiento de un equipo o ministerio. Comprenden que una buena organización también es una forma de servir a Dios, ya que permite que otras personas desarrollen mejor sus dones. Este don combina responsabilidad, visión, planificación y una actitud de servicio, recordando que toda organización debe estar al servicio de las personas y del Reino de Dios.",

  strengths: [
    "Organiza recursos y actividades de manera eficiente.",
    "Planifica con anticipación y presta atención a los detalles.",
    "Ayuda a que los equipos trabajen con orden y claridad."
  ],

  risks: [
    "Puede enfocarse demasiado en la organización y perder de vista a las personas.",
    "Corre el riesgo de frustrarse cuando las cosas no salen según lo planificado.",
    "Puede querer controlar todos los detalles en lugar de delegar."
  ],

  development: [
    "Aprende a combinar organización con sensibilidad hacia las personas.",
    "Delega responsabilidades y confía en el trabajo del equipo.",
    "Busca siempre que la planificación esté guiada por la voluntad de Dios.",
    "Mantén una actitud flexible frente a los cambios inesperados.",
    "Recuerda que el propósito de organizar es facilitar el servicio y glorificar a Dios."
  ],

  characters: [
    "José",
    "Nehemías",
    "Moisés"
  ],

  verses: [
    {
      reference: "1 Corintios 14:40",
      text: "«Pero hágase todo decentemente y con orden.» Dios desea que Su Iglesia funcione con organización y armonía para cumplir mejor su misión."
    },
    {
      reference: "Éxodo 18:21",
      text: "«Además escoge tú de entre todo el pueblo varones de virtud...». Jetro enseña a Moisés la importancia de organizar responsabilidades para servir al pueblo de manera más eficiente."
    },
    {
      reference: "Proverbios 21:5",
      text: "«Los pensamientos del diligente ciertamente tienden a la abundancia...» La buena planificación y la diligencia producen mejores resultados cuando se realizan con sabiduría."
    }
  ]
},
];