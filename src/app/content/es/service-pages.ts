import type { ServicePageContent } from '../../core/models/service-page-content';
import type { PublishedServiceId } from '../../core/i18n/route-catalog';

export const esServicePages: Record<PublishedServiceId, ServicePageContent> = {
  accounting: {
    id: 'accounting',
    name: 'Servicios de contabilidad',
    seo: {
      title: 'Contabilidad para empresas en Miami | Urban Accounting',
      description:
        'Servicios de contabilidad para empresas en Miami. Habla con Urban Accounting sobre tus registros financieros y las necesidades contables de tu negocio.',
    },
    hero: {
      eyebrow: 'CONTABILIDAD · MIAMI, FLORIDA',
      title: 'Servicios de contabilidad para empresas en Miami',
      description:
        'Una visión más clara de tu negocio empieza por unos registros financieros cuidados. En Urban Accounting atendemos tus necesidades contables de forma personal.',
      primary: 'Hablemos de tu contabilidad',
      secondary: 'Conoce el servicio',
      note: 'Para empresas y pequeños negocios en Miami.',
      focus: [
        {
          title: 'Registros financieros',
          description: 'Registros organizados para decidir con más información.',
        },
        {
          title: 'Perspectiva de negocio',
          description: 'Una visión más clara de las finanzas de tu negocio.',
        },
        { title: 'Atención personal', description: 'Apoyo contable adaptado a tus necesidades.' },
      ],
      focusCaption: 'Experiencia de confianza. Herramientas conocidas.',
    },
    introduction: {
      eyebrow: 'UNA VISIÓN DE CONJUNTO',
      title: 'Entiende los números\nque hay detrás de tu negocio.',
      paragraphs: [
        'Dirigir una empresa implica tomar decisiones con la información disponible. Una contabilidad organizada ofrece un punto de partida más útil que una colección de cifras sueltas.',
        'Urban Accounting presta servicios contables con atención al detalle y un enfoque adaptado a tus necesidades. El objetivo es poner orden en los registros y facilitar una comprensión más clara de las finanzas de tu negocio.',
      ],
    },
    features: {
      eyebrow: 'CÓMO PODEMOS AYUDARTE',
      title: 'La contabilidad,\ncon tu negocio en mente.',
      description: 'Partimos de tus necesidades para conversar sobre el apoyo adecuado.',
      items: [
        {
          title: 'Registros financieros cuidados',
          description:
            'La atención a los registros contribuye a crear una base contable organizada para tu empresa.',
        },
        {
          title: 'Perspectiva sobre tus finanzas',
          description:
            'La contabilidad permite situar las cifras en el contexto del negocio. Los estados financieros también están disponibles como servicio independiente.',
        },
        {
          title: 'Atención a tus prioridades',
          description:
            'Habla con el equipo sobre lo que necesitas, tanto en contabilidad como en su relación con otros servicios financieros.',
        },
      ],
    },
    benefits: {
      eyebrow: 'EL VALOR DE LA CONTABILIDAD',
      title: 'Más contexto.\nPreguntas mejor informadas.',
      description:
        'El apoyo contable profesional te ayuda a abordar las finanzas de tu empresa con mayor claridad.',
      items: [
        {
          title: 'Un punto de partida organizado',
          description:
            'Una información ordenada facilita comprender qué reflejan los registros del negocio.',
        },
        {
          title: 'Una mirada más amplia',
          description:
            'Poner las cifras en contexto ayuda a considerar la situación y las prioridades de tu empresa.',
        },
        {
          title: 'Una conversación más clara',
          description:
            'Los registros contables ofrecen una base útil para hablar de estados financieros y preparación de impuestos.',
        },
      ],
    },
    process: {
      eyebrow: 'EMPEZAMOS POR TU EMPRESA',
      title: 'Cuéntanos qué necesitas.',
      description:
        'Una guía para la primera conversación. El alcance del trabajo y los siguientes pasos se acuerdan contigo.',
      steps: [
        {
          title: 'Háblanos de tu negocio',
          description: 'Explícanos tu actividad y las dudas contables que quieres resolver.',
        },
        {
          title: 'Revisemos tus prioridades',
          description: 'Conversemos sobre tu información financiera actual y el apoyo que buscas.',
        },
        {
          title: 'Acordemos cómo avanzar',
          description:
            'Definamos qué servicios encajan con tu situación y cuál será el siguiente paso.',
        },
      ],
    },
    local: {
      eyebrow: 'CONTABILIDAD EN MIAMI',
      title: 'Un contacto local\npara tu negocio.',
      description:
        'Urban Accounting opera en Miami. Contacta con el equipo para hablar de los servicios contables que necesitas y concertar una consulta antes de visitar la oficina.',
      addressLabel: 'OFICINA EN MIAMI',
      action: 'Contacta con Urban Accounting',
    },
    related: {
      eyebrow: 'SERVICIOS CONECTADOS',
      title: 'Cada servicio tiene su función.',
      description:
        'La teneduría de libros, los estados financieros y los servicios fiscales responden a necesidades distintas. Explora los que tengan sentido para tu situación.',
      ids: ['bookkeeping', 'financial-statements', 'tax-preparation', 'tax-planning'],
      action: 'Conoce este servicio',
      overviewAction: 'Ver resumen en Inicio',
    },
    faq: {
      eyebrow: 'DUDAS SOBRE CONTABILIDAD',
      title: 'Un poco más de claridad.',
      items: [
        {
          question: '¿Qué servicios contables ofrece Urban Accounting?',
          answer:
            'Ofrecemos apoyo contable centrado en el cuidado de los registros y en las necesidades de tu negocio. También prestamos servicios de teneduría de libros, estados financieros, preparación de impuestos y planificación fiscal. El alcance de cada servicio se comenta en la consulta.',
        },
        {
          question: '¿Cómo ayuda la contabilidad a una empresa?',
          answer:
            'La contabilidad sitúa la información financiera en un contexto más amplio. Unos registros organizados ayudan al responsable del negocio a comprender su situación y a plantear preguntas mejor informadas.',
        },
        {
          question: '¿Prestan servicios de contabilidad en Miami?',
          answer:
            'Sí. Urban Accounting está en Miami y ofrece servicios contables para empresas. Contacta con el equipo para hablar de tus necesidades.',
        },
        {
          question: '¿En qué se diferencian la contabilidad y la teneduría de libros?',
          answer:
            'La teneduría de libros se centra en organizar y mantener los registros financieros. La contabilidad utiliza esa información para obtener una visión más amplia del negocio. Son servicios relacionados, con funciones diferentes.',
        },
        {
          question: '¿Se pueden combinar contabilidad y preparación de impuestos?',
          answer:
            'Los registros contables organizados pueden aportar información relevante para preparar una declaración. Urban Accounting ofrece ambos servicios; habla con el equipo para definir qué apoyo necesitas.',
        },
      ],
    },
    cta: {
      eyebrow: 'HABLEMOS DE TU NEGOCIO',
      title: 'Da una dirección más clara\na tus números.',
      description: 'Conversa con Urban Accounting en Miami sobre tus necesidades contables.',
      action: 'Agenda una consulta',
      note: 'Primero, una conversación sobre tu empresa.',
    },
  },
  bookkeeping: {
    id: 'bookkeeping',
    name: 'Bookkeeping',
    seo: {
      title: 'Bookkeeping y teneduría de libros en Miami | Urban Accounting',
      description:
        'Pon orden en los registros financieros de tu negocio con servicios de bookkeeping en Miami. Consulta tus necesidades de teneduría de libros con Urban Accounting.',
    },
    hero: {
      eyebrow: 'TENEDURÍA DE LIBROS · MIAMI, FLORIDA',
      title: 'Bookkeeping en Miami: orden para las finanzas de tu negocio',
      description:
        'Organiza tus registros financieros y comprende mejor la información que genera tu negocio cada día.',
      primary: 'Hablemos de tus libros',
      secondary: 'Conoce el servicio',
      note: 'Atención profesional a tus registros contables.',
      focus: [
        {
          title: 'Registros organizados',
          description: 'Orden en los registros financieros de tu negocio.',
        },
        {
          title: 'Información financiera',
          description: 'Atención a los detalles de tus libros contables.',
        },
        {
          title: 'Claridad en el día a día',
          description: 'Una visión más clara de las finanzas del día a día.',
        },
      ],
      focusCaption: 'Experiencia de confianza. Herramientas conocidas.',
    },
    introduction: {
      eyebrow: 'EMPEZAMOS POR LOS REGISTROS',
      title: 'Una buena información\nempieza por libros en orden.',
      paragraphs: [
        'Tu negocio genera información financiera a diario. Cuando los registros están dispersos, resulta más difícil entender qué cuentan sobre tus finanzas.',
        'Urban Accounting ofrece servicios de bookkeeping, o teneduría de libros, para ayudar a mantener esa información en orden y facilitar una visión más clara de tu situación financiera. Es un trabajo centrado en los registros que sirven de base a la contabilidad.',
      ],
    },
    features: {
      eyebrow: 'EL ENFOQUE DEL BOOKKEEPING',
      title: 'Orden en los detalles.\nClaridad cada día.',
      description: 'Hablemos de tus registros y del apoyo que necesitas para mantener tus libros.',
      items: [
        {
          title: 'Registros financieros organizados',
          description:
            'Dar estructura a la información del negocio permite que los libros sean una referencia más útil.',
        },
        {
          title: 'Cuidado de la información',
          description:
            'La atención al detalle es fundamental para mantener el orden y facilitar el trabajo con los registros.',
        },
        {
          title: 'Una imagen financiera más clara',
          description:
            'Unos libros cuidados ayudan a comprender las finanzas cotidianas y a abordar conversaciones contables más amplias.',
        },
      ],
    },
    benefits: {
      eyebrow: 'POR QUÉ IMPORTA EL ORDEN',
      title: 'Dale sentido\na tu información financiera.',
      description:
        'El valor de la teneduría de libros empieza por una información más comprensible.',
      items: [
        {
          title: 'Menos información dispersa',
          description:
            'La organización reúne los detalles financieros en una imagen más coherente.',
        },
        {
          title: 'Una base útil',
          description:
            'Los libros son un punto de partida para hablar de contabilidad y estados financieros.',
        },
        {
          title: 'Conversaciones más concretas',
          description:
            'Unos registros claros ayudan a explicar tu situación al plantear dudas financieras o fiscales.',
        },
      ],
    },
    process: {
      eyebrow: 'TU PUNTO DE PARTIDA',
      title: 'Hablemos de tus libros.',
      description:
        'Son orientaciones para la primera conversación, no un paquete de servicios cerrado.',
      steps: [
        {
          title: 'Cuéntanos cómo llevas tus registros',
          description: 'Explícanos cómo organiza hoy tu negocio su información financiera.',
        },
        {
          title: 'Identifiquemos tus necesidades',
          description: 'Hablemos de dónde buscas más orden o una mejor comprensión de tus libros.',
        },
        {
          title: 'Definamos el apoyo',
          description: 'Acuerda con el equipo el alcance del servicio y los siguientes pasos.',
        },
      ],
    },
    local: {
      eyebrow: 'BOOKKEEPING EN MIAMI',
      title: 'Orden financiero\ny cercanía en Miami.',
      description:
        'La oficina de Urban Accounting en Miami es un punto de contacto para tus dudas sobre teneduría de libros. Escríbenos para hablar de tus registros y concertar una consulta.',
      addressLabel: 'OFICINA EN MIAMI',
      action: 'Habla con el equipo',
    },
    related: {
      eyebrow: 'MÁS ALLÁ DE LOS LIBROS',
      title: 'Construye sobre una base clara.',
      description:
        'Explora la visión contable del negocio o conoce los servicios de estados financieros y preparación de impuestos.',
      ids: ['accounting', 'financial-statements', 'tax-preparation'],
      action: 'Conoce este servicio',
      overviewAction: 'Ver resumen en Inicio',
    },
    faq: {
      eyebrow: 'DUDAS SOBRE BOOKKEEPING',
      title: '¿Qué te gustaría saber?',
      items: [
        {
          question: '¿Para qué sirve la teneduría de libros?',
          answer:
            'Se centra en organizar y mantener los registros financieros. Estos ayudan a comprender la información del negocio y constituyen una base para la contabilidad.',
        },
        {
          question: '¿Urban Accounting ofrece bookkeeping en Miami?',
          answer:
            'Sí. La teneduría de libros es uno de nuestros servicios en Miami. Contacta con el equipo para comentar el estado de tus libros y el apoyo que necesitas.',
        },
        {
          question: '¿Qué incluye el servicio de bookkeeping?',
          answer:
            'Urban Accounting ofrece teneduría de libros para ayudar a mantener los registros financieros en orden. El alcance concreto se define con el equipo durante la consulta, según las necesidades de tu negocio.',
        },
        {
          question: '¿Bookkeeping y contabilidad son lo mismo?',
          answer:
            'El bookkeeping se concentra en los registros financieros. La contabilidad considera esa información dentro de una visión más amplia del negocio. Puedes necesitar apoyo en una de estas áreas o en ambas.',
        },
        {
          question: '¿Los libros sirven para preparar estados financieros e impuestos?',
          answer:
            'Unos libros organizados pueden aportar información para elaborar estados financieros o preparar impuestos. Urban Accounting también ofrece esos servicios; coméntalos con el equipo para acordar lo que necesitas.',
        },
      ],
    },
    cta: {
      eyebrow: 'UN COMIENZO MÁS CLARO',
      title: 'Tus libros son\nun buen punto de partida.',
      description:
        'Habla con Urban Accounting sobre tus registros financieros y necesidades de bookkeeping.',
      action: 'Agenda una consulta',
      note: 'Empecemos por la información que tienes hoy.',
    },
  },
  'financial-statements': {
    id: 'financial-statements',
    name: 'Estados financieros',
    seo: {
      title: 'Estados financieros para empresas en Miami | Urban Accounting',
      description:
        'Estados financieros en Miami para empresas que buscan información financiera más clara y organizada. Habla con Urban Accounting sobre tus necesidades.',
    },
    hero: {
      eyebrow: 'ESTADOS FINANCIEROS · MIAMI, FLORIDA',
      title: 'Estados financieros para empresas en Miami',
      description:
        'Una información financiera clara y organizada puede ayudarte a comprender mejor la situación de tu negocio.',
      primary: 'Hablemos de tus estados financieros',
      secondary: 'Conoce el servicio',
      note: 'Una visión más clara de las finanzas de tu empresa.',
      focus: [
        {
          title: 'Claridad financiera',
          description: 'Una visión más clara de tu situación financiera.',
        },
        {
          title: 'Información organizada',
          description: 'Información del negocio reunida y puesta en contexto.',
        },
        {
          title: 'Perspectiva de negocio',
          description: 'Estados financieros adaptados a tu negocio.',
        },
      ],
      focusCaption: 'Experiencia de confianza. Herramientas conocidas.',
    },
    introduction: {
      eyebrow: 'UNA VISIÓN MÁS COMPLETA',
      title: 'Información financiera\ncon más contexto.',
      paragraphs: [
        'Los estados financieros reúnen la información de tu negocio en una visión más clara de su situación financiera. Ayudan a convertir registros individuales en información más fácil de revisar y comentar.',
        'Urban Accounting prepara estados financieros adaptados a las necesidades de tu empresa. El objetivo es ofrecer una imagen clara y completa de su situación, basada en información financiera organizada.',
      ],
    },
    features: {
      eyebrow: 'QUÉ PUEDEN APORTAR',
      title: 'Una situación financiera\nmás comprensible.',
      description:
        'Hablemos de la información que tu empresa necesita entender con mayor claridad.',
      items: [
        {
          title: 'Una visión reunida',
          description:
            'Los estados financieros agrupan la información para poder valorarla en un contexto más amplio.',
        },
        {
          title: 'Conversaciones financieras más claras',
          description:
            'La información estructurada ofrece una base útil para hablar de la situación y prioridades de tu negocio.',
        },
        {
          title: 'Un servicio adaptado',
          description:
            'Urban Accounting prepara estados financieros que responden a las necesidades de tu empresa.',
        },
      ],
    },
    benefits: {
      eyebrow: 'EL VALOR DE LA CLARIDAD',
      title: 'Información que ayuda\na comprender mejor.',
      description:
        'La información financiera es más útil cuando parte de registros ordenados y claros.',
      items: [
        {
          title: 'Una situación más visible',
          description:
            'Una visión estructurada facilita considerar la información financiera relacionada con tu empresa.',
        },
        {
          title: 'Contexto para decidir',
          description:
            'La información financiera puede ayudarte a plantear preguntas más informadas al valorar decisiones de negocio.',
        },
        {
          title: 'Apoyo financiero conectado',
          description:
            'Los estados financieros se relacionan de forma natural con la contabilidad y la teneduría de libros.',
        },
      ],
    },
    process: {
      eyebrow: 'EMPEZAMOS POR TU INFORMACIÓN',
      title: 'Una conversación práctica\nsobre tu empresa.',
      description:
        'El alcance y los siguientes pasos se comentan contigo según tu información financiera y necesidades.',
      steps: [
        {
          title: 'Hablemos de lo que necesitas',
          description: 'Cuéntanos qué quieres comprender mejor de las finanzas de tu negocio.',
        },
        {
          title: 'Revisemos la información',
          description:
            'Conversemos sobre los registros y la información financiera que sirven de punto de partida.',
        },
        {
          title: 'Acordemos los siguientes pasos',
          description: 'Definamos el servicio que encaja con tu situación y cómo avanzar.',
        },
      ],
    },
    local: {
      eyebrow: 'ESTADOS FINANCIEROS EN MIAMI',
      title: 'Un contacto en Miami\npara mayor claridad.',
      description:
        'Urban Accounting está en Miami. Contacta al equipo para hablar de los estados financieros de tu empresa y concertar una consulta.',
      addressLabel: 'OFICINA EN MIAMI',
      action: 'Contacta con Urban Accounting',
    },
    related: {
      eyebrow: 'SERVICIOS CONECTADOS',
      title: 'Empieza por la información\ndetrás del estado financiero.',
      description:
        'La contabilidad y la teneduría de libros ayudan a organizar la información que sostiene una visión financiera más clara.',
      ids: ['accounting', 'bookkeeping'],
      action: 'Conoce este servicio',
      overviewAction: 'Ver resumen en Inicio',
    },
    faq: {
      eyebrow: 'DUDAS SOBRE ESTADOS FINANCIEROS',
      title: 'Un poco más de claridad.',
      items: [
        {
          question: '¿Para qué sirven los estados financieros?',
          answer:
            'Ofrecen una visión estructurada de la información financiera. Pueden ayudar a una empresa a comprender mejor su situación y a tener conversaciones más informadas.',
        },
        {
          question: '¿Por qué son importantes para una empresa?',
          answer:
            'Reúnen la información financiera en un formato más claro, lo que facilita considerar la situación y prioridades del negocio.',
        },
        {
          question: '¿Qué relación tienen con la teneduría de libros?',
          answer:
            'La teneduría de libros ayuda a organizar y mantener los registros financieros. Estos pueden proporcionar la información necesaria para preparar estados financieros.',
        },
        {
          question: '¿Urban Accounting prepara estados financieros en Miami?',
          answer:
            'Sí. Urban Accounting ofrece este servicio en Miami. Contacta con el equipo para hablar de las necesidades de tu empresa.',
        },
        {
          question: '¿Cómo puede ayudar la información financiera a decidir?',
          answer:
            'La información organizada puede aportar contexto al considerar preguntas y decisiones de negocio. Su relevancia depende de cada situación.',
        },
      ],
    },
    cta: {
      eyebrow: 'HABLEMOS DE LA VISIÓN COMPLETA',
      title: 'Da más claridad\na tu información financiera.',
      description:
        'Conversa con Urban Accounting sobre estados financieros para tu empresa en Miami.',
      action: 'Agenda una consulta',
      note: 'Empecemos por la información que tiene hoy tu negocio.',
    },
  },
  'tax-preparation': {
    id: 'tax-preparation',
    name: 'Preparación de impuestos',
    seo: {
      title: 'Preparación de impuestos en Miami | Urban Accounting',
      description:
        'Servicios profesionales de preparación de impuestos en Miami. Habla con Urban Accounting sobre la información necesaria para preparar tus impuestos.',
    },
    hero: {
      eyebrow: 'PREPARACIÓN DE IMPUESTOS · MIAMI, FLORIDA',
      title: 'Preparación de impuestos en Miami',
      description:
        'El apoyo profesional puede ayudarte a abordar la preparación de impuestos con información organizada y atención a los detalles.',
      primary: 'Hablemos de impuestos',
      secondary: 'Conoce el servicio',
      note: 'Un enfoque cuidado para preparar tus impuestos.',
      focus: [
        {
          title: 'Información organizada',
          description: 'Reúne la información relevante para tus impuestos.',
        },
        {
          title: 'Preparación cuidada',
          description: 'Atención a los detalles de la preparación fiscal.',
        },
        { title: 'Apoyo profesional', description: 'Conversemos sobre el apoyo que necesitas.' },
      ],
      focusCaption: 'Experiencia de confianza. Herramientas conocidas.',
    },
    introduction: {
      eyebrow: 'PREPÁRATE CON CLARIDAD',
      title: 'Una forma más ordenada\nde afrontar los impuestos.',
      paragraphs: [
        'La preparación de impuestos comienza con la información relevante para tu situación. Reunir esa información puede facilitar comprender y comentar el proceso.',
        'Urban Accounting ofrece servicios de preparación de impuestos con atención profesional a los detalles implicados, para que puedas centrarte en tus prioridades personales o de negocio.',
      ],
    },
    features: {
      eyebrow: 'CÓMO AYUDA LA PREPARACIÓN',
      title: 'Atención a la información\nque importa.',
      description: 'Comenta tu situación con el equipo y definan juntos el apoyo que necesitas.',
      items: [
        {
          title: 'Organizar la conversación',
          description:
            'Empieza por comentar la información financiera y fiscal relevante para tu situación.',
        },
        {
          title: 'Preparación cuidadosa',
          description:
            'El apoyo profesional ayuda a abordar con cuidado los detalles y la complejidad de preparar impuestos.',
        },
        {
          title: 'Apoyo conectado a tus registros',
          description:
            'La contabilidad y la teneduría de libros pueden ayudar a mantener ordenada la información financiera para conversaciones fiscales.',
        },
      ],
    },
    benefits: {
      eyebrow: 'EL VALOR DEL APOYO PROFESIONAL',
      title: 'Una forma más serena\nde afrontar los impuestos.',
      description:
        'Las dudas fiscales suelen incluir detalles que se benefician de una revisión cuidadosa y una conversación clara.',
      items: [
        {
          title: 'Información más organizada',
          description:
            'Reunir la información relevante ofrece un punto de partida más claro para la preparación.',
        },
        {
          title: 'Atención a los detalles',
          description:
            'El apoyo profesional ayuda a trabajar con cuidado los aspectos complejos de preparar impuestos.',
        },
        {
          title: 'Un siguiente paso más claro',
          description:
            'Comentar tus circunstancias ayuda a entender cómo se relaciona la preparación con otros servicios disponibles.',
        },
      ],
    },
    process: {
      eyebrow: 'EMPEZAMOS CON UNA CONVERSACIÓN',
      title: 'Prepárate teniendo\nen cuenta tu situación.',
      description: 'Es una forma general de empezar; el alcance relevante se comenta contigo.',
      steps: [
        {
          title: 'Háblanos de lo que necesitas',
          description: 'Comparte las dudas sobre preparación de impuestos que quieres comentar.',
        },
        {
          title: 'Revisemos la información',
          description:
            'Conversemos sobre la información financiera relevante para preparar tus impuestos.',
        },
        {
          title: 'Acordemos cómo avanzar',
          description: 'Definamos el apoyo adecuado y los siguientes pasos.',
        },
      ],
    },
    local: {
      eyebrow: 'PREPARACIÓN DE IMPUESTOS EN MIAMI',
      title: 'Apoyo profesional\nen Miami.',
      description:
        'Urban Accounting opera en Miami. Contacta con el equipo para hablar de tus necesidades de preparación de impuestos y concertar una consulta.',
      addressLabel: 'OFICINA EN MIAMI',
      action: 'Contacta con Urban Accounting',
    },
    related: {
      eyebrow: 'PREPARACIÓN Y PLANIFICACIÓN',
      title: 'Momentos distintos.\nConversaciones conectadas.',
      description:
        'La preparación se centra en preparar las obligaciones con la información disponible. La planificación fiscal es una conversación más anticipada sobre tu situación. La contabilidad y los libros pueden aportar información ordenada a ambas.',
      ids: ['tax-planning', 'bookkeeping', 'accounting'],
      action: 'Conoce este servicio',
      overviewAction: 'Ver resumen en Inicio',
    },
    faq: {
      eyebrow: 'DUDAS SOBRE PREPARACIÓN DE IMPUESTOS',
      title: 'Un punto de partida claro.',
      items: [
        {
          question: '¿Qué es la preparación de impuestos?',
          answer:
            'Es el proceso de preparar las obligaciones fiscales que correspondan a tu situación. Los detalles y la información necesaria dependen de cada caso.',
        },
        {
          question: '¿Cuándo debería contactar a un profesional?',
          answer:
            'Puedes contactar cuando quieras comentar tus necesidades de preparación o la información disponible. El equipo puede ayudarte a iniciar la conversación.',
        },
        {
          question: '¿En qué se diferencian la preparación y la planificación fiscal?',
          answer:
            'La preparación se centra en preparar obligaciones fiscales. La planificación fiscal mira más hacia adelante y considera cuestiones antes de la preparación. Son servicios relacionados, pero distintos.',
        },
        {
          question: '¿Urban Accounting ayuda con la preparación de impuestos en Miami?',
          answer:
            'Sí. Urban Accounting ofrece este servicio en Miami. Contacta con el equipo para hablar de tus necesidades.',
        },
        {
          question: '¿La teneduría de libros puede facilitar la preparación?',
          answer:
            'Unos libros organizados pueden ayudar a poner en orden la información financiera y ofrecer un punto de partida útil para conversaciones sobre impuestos.',
        },
      ],
    },
    cta: {
      eyebrow: 'MÁS CLARIDAD EN ÉPOCA DE IMPUESTOS',
      title: 'Empieza por hablar\nde tus impuestos.',
      description:
        'Comenta tus necesidades de preparación de impuestos con Urban Accounting en Miami.',
      action: 'Agenda una consulta',
      note: 'El apoyo adecuado comienza con tu situación.',
    },
  },
  'tax-planning': {
    id: 'tax-planning',
    name: 'Planificación fiscal',
    seo: {
      title: 'Planificación fiscal en Miami | Urban Accounting',
      description:
        'Servicios de planificación fiscal en Miami para una conversación más anticipada sobre tu situación tributaria. Habla con Urban Accounting.',
    },
    hero: {
      eyebrow: 'PLANIFICACIÓN FISCAL · MIAMI, FLORIDA',
      title: 'Planificación fiscal en Miami',
      description:
        'Una conversación anticipada sobre tu situación fiscal puede ayudarte a valorar cuestiones antes de preparar los impuestos.',
      primary: 'Hablemos de planificación fiscal',
      secondary: 'Conoce el servicio',
      note: 'Una perspectiva más proactiva sobre tus preguntas fiscales.',
      focus: [
        {
          title: 'Revisión anticipada',
          description: 'Aborda tus dudas fiscales antes de la preparación.',
        },
        {
          title: 'Información organizada',
          description: 'Registros financieros que apoyan tu planificación.',
        },
        {
          title: 'Decisiones informadas',
          description: 'Más tiempo y contexto para valorar tus opciones.',
        },
      ],
      focusCaption: 'Experiencia de confianza. Herramientas conocidas.',
    },
    introduction: {
      eyebrow: 'MIRAR HACIA ADELANTE',
      title: 'Da espacio a las preguntas fiscales\nantes de preparar impuestos.',
      paragraphs: [
        'La planificación fiscal mira hacia adelante. Permite comentar tu situación y decisiones con más tiempo y contexto que una conversación centrada únicamente en la preparación.',
        'Urban Accounting ofrece planificación fiscal dentro de sus servicios tributarios. Es una conversación anticipada que parte de información financiera y de las circunstancias que quieres valorar.',
      ],
    },
    features: {
      eyebrow: 'EL PAPEL DE LA PLANIFICACIÓN',
      title: 'Una conversación proactiva\nsobre tu situación fiscal.',
      description:
        'La planificación no sustituye a la preparación; permite considerar las cuestiones fiscales antes.',
      items: [
        {
          title: 'Mirar hacia adelante',
          description:
            'La planificación fiscal abre espacio para hablar de consideraciones antes de preparar obligaciones.',
        },
        {
          title: 'Revisar tu situación',
          description:
            'Conversar sobre tu situación financiera y fiscal actual puede aportar más contexto a decisiones futuras.',
        },
        {
          title: 'Conectar la información',
          description:
            'La información organizada de contabilidad y libros puede apoyar una conversación de planificación más informada.',
        },
      ],
    },
    benefits: {
      eyebrow: 'POR QUÉ PLANIFICAR',
      title: 'Más tiempo para\nplantear mejores preguntas.',
      description:
        'Un enfoque anticipado evita dejar todas las cuestiones fiscales para el momento de preparación.',
      items: [
        {
          title: 'Conversaciones antes',
          description:
            'Comentar dudas fiscales con anticipación ofrece más tiempo para entender qué puede ser relevante en tu caso.',
        },
        {
          title: 'Una visión más conectada',
          description:
            'La planificación puede reunir información contable y preguntas fiscales en una misma conversación.',
        },
        {
          title: 'Menos sorpresas',
          description:
            'Considerar cuestiones fiscales antes puede ayudarte a sentirte más preparado para conversaciones posteriores; los resultados dependen de tu situación.',
        },
      ],
    },
    process: {
      eyebrow: 'UN INICIO CON MIRADA AL FUTURO',
      title: 'Empieza por lo que\nquieres valorar.',
      description:
        'El alcance se conversa contigo y esta página no constituye asesoramiento fiscal individual.',
      steps: [
        {
          title: 'Comparte tus preguntas',
          description: 'Cuéntanos qué cuestiones fiscales quieres comentar.',
        },
        {
          title: 'Revisemos la información',
          description:
            'Hablemos de la información financiera y contexto actual relevante para tu situación.',
        },
        {
          title: 'Planifiquemos la siguiente conversación',
          description:
            'Acordemos el apoyo adecuado y cómo se relaciona la planificación con la preparación.',
        },
      ],
    },
    local: {
      eyebrow: 'PLANIFICACIÓN FISCAL EN MIAMI',
      title: 'Una conversación en Miami\npara mirar hacia adelante.',
      description:
        'Urban Accounting está en Miami. Contacta con el equipo para comentar cuestiones de planificación fiscal y concertar una consulta.',
      addressLabel: 'OFICINA EN MIAMI',
      action: 'Contacta con Urban Accounting',
    },
    related: {
      eyebrow: 'SERVICIOS FISCALES CONECTADOS',
      title: 'Planifica antes.\nPrepara con contexto.',
      description:
        'La planificación fiscal mira hacia adelante, mientras que la preparación se centra en las obligaciones correspondientes. La contabilidad y los libros ayudan a organizar la información detrás de ambas conversaciones.',
      ids: ['tax-preparation', 'accounting', 'bookkeeping'],
      action: 'Conoce este servicio',
      overviewAction: 'Ver resumen en Inicio',
    },
    faq: {
      eyebrow: 'DUDAS SOBRE PLANIFICACIÓN FISCAL',
      title: 'Una perspectiva más proactiva.',
      items: [
        {
          question: '¿Qué es la planificación fiscal?',
          answer:
            'Es una conversación anticipada sobre tu situación fiscal y las cuestiones que puedes valorar antes de la preparación. Su relevancia y alcance dependen de cada caso.',
        },
        {
          question: '¿En qué se diferencia de la preparación de impuestos?',
          answer:
            'La planificación fiscal mira hacia adelante y considera cuestiones de forma anticipada. La preparación se centra en las obligaciones que correspondan. Ambos servicios pueden complementarse.',
        },
        {
          question: '¿Cuándo debería empezar a planificar?',
          answer:
            'Puedes contactar a Urban Accounting cuando quieras comentar cuestiones fiscales antes de preparar impuestos. El momento adecuado depende de tu situación.',
        },
        {
          question: '¿Por qué es útil planificar durante el año?',
          answer:
            'Considerar cuestiones fiscales antes de la preparación puede aportar más tiempo y contexto a una conversación. No garantiza un resultado concreto.',
        },
        {
          question: '¿La contabilidad y los libros apoyan la planificación?',
          answer:
            'La información organizada de contabilidad y teneduría de libros puede ofrecer un contexto útil para hablar de planificación fiscal. Urban Accounting ofrece ambos servicios.',
        },
      ],
    },
    cta: {
      eyebrow: 'UN COMIENZO MÁS ANTICIPADO',
      title: 'Da espacio a tus preguntas fiscales\nantes de preparar impuestos.',
      description: 'Habla con Urban Accounting sobre planificación fiscal en Miami.',
      action: 'Agenda una consulta',
      note: 'Empecemos por las preguntas que quieres valorar.',
    },
  },
};
