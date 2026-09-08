import type { StaticPageContent } from '../../core/models/static-page-content';

export const esAbout: StaticPageContent = {
  page: 'about',
  seo: {
    title: 'Urban Accounting en Miami | Nosotros',
    description:
      'Conoce Urban Accounting en Miami y sus servicios de contabilidad, libros, estados financieros e impuestos para empresas y particulares.',
  },
  hero: {
    eyebrow: 'URBAN ACCOUNTING · MIAMI, FLORIDA',
    title: 'Una conversación más clara sobre tus finanzas.',
    description:
      'Urban Accounting ofrece servicios contables y fiscales en Miami para empresas y particulares que buscan información organizada y apoyo profesional.',
    action: 'Contacta con Urban Accounting',
  },
  introduction: {
    eyebrow: 'QUIÉNES SOMOS',
    title: 'Apoyo contable y fiscal\ncon una perspectiva personal.',
    paragraphs: [
      'Urban Accounting es una firma con sede en Miami que ofrece contabilidad, teneduría de libros, estados financieros, preparación de impuestos y planificación fiscal.',
      'Cada duda financiera parte de una situación distinta. Nos centramos en entender qué necesitas, ordenar la conversación y ofrecer apoyo profesional y cuidadoso.',
    ],
  },
  approach: {
    eyebrow: 'CÓMO TRABAJAMOS',
    title: 'Empezamos por la información\ny las preguntas que importan.',
    description:
      'Un enfoque práctico basado en una comunicación clara y atención a los detalles financieros.',
    items: [
      {
        title: 'Una conversación personal',
        description:
          'Empezamos hablando de tus necesidades financieras personales o de negocio y de las dudas que quieres resolver.',
      },
      {
        title: 'Atención a los detalles',
        description:
          'Los registros organizados y la información financiera cuidada ofrecen un punto de partida más útil.',
      },
      {
        title: 'Servicios conectados',
        description:
          'La contabilidad, los libros, los estados financieros y los servicios fiscales apoyan partes distintas de la conversación.',
      },
    ],
  },
  related: {
    eyebrow: 'NUESTROS SERVICIOS',
    title: 'Apoyo para las preguntas\nfinancieras que tienes hoy.',
    description: 'Explora los cinco servicios disponibles actualmente en Urban Accounting.',
    ids: ['accounting', 'bookkeeping', 'financial-statements', 'tax-preparation', 'tax-planning'],
    action: 'Conoce este servicio',
  },
  local: {
    eyebrow: 'EN MIAMI',
    title: 'Un contacto local\npara tus dudas financieras.',
    description:
      'Urban Accounting opera en Miami, Florida. Escríbenos para hablar de lo que necesitas y concertar una consulta antes de visitar la oficina.',
    addressLabel: 'OFICINA EN MIAMI',
    action: 'Contacta con el equipo',
  },
  cta: {
    eyebrow: 'EMPECEMOS A CONVERSAR',
    title: 'Hablemos de\nlo que necesitas.',
    description: 'Conversa con Urban Accounting sobre tus dudas contables o fiscales.',
    action: 'Contacta con Urban Accounting',
    note: 'Para empresas y particulares en Miami.',
  },
};
