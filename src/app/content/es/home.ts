import { HomeContent } from '../../core/models/home-content';
import { businessAddress } from '../../core/config/business.config';
import { esServices } from './services';

export const esHome: HomeContent = {
  hero: {
    eyebrow: 'URBAN ACCOUNTING · MIAMI, FLORIDA',
    title: 'Impulsamos tu éxito financiero en Miami.',
    description:
      'Apoyo contable y fiscal para pequeños negocios, emprendedores y particulares que buscan claridad financiera en Miami.',
    primary: 'Agenda una consulta',
    secondary: 'Explora nuestros servicios',
    location: 'Miami, Florida · Negocios, emprendedores y particulares',
    visualLabel: 'UNA VISIÓN FINANCIERA MÁS CLARA',
    visualTitle: 'Experiencia.\nPrecisión. Acompañamiento.',
    visualNote: 'Apoyo contable y fiscal en Miami.',
  },
  services: {
    eyebrow: 'NUESTROS SERVICIOS',
    title: 'Claridad en cada aspecto\nde tus finanzas.',
    description: 'Cinco servicios conectados. Un lugar donde empezar a hablar de lo que necesitas.',
    items: esServices,
    action: 'Consulta sobre este servicio',
  },
  about: {
    eyebrow: 'POR QUÉ URBAN ACCOUNTING',
    title: 'Tu aliado de confianza\nen excelencia financiera.',
    description:
      'Detrás de cada operación, hoja de cálculo y declaración hay un trabajo que estás construyendo. Urban Accounting aporta experiencia y apoyo para avanzar hacia tus objetivos financieros.',
    action: 'Conócenos',
    principles: [
      {
        title: 'Experiencia',
        description:
          'Experiencia profesional y atención a los cambios normativos y a las prácticas del sector.',
      },
      {
        title: 'Precisión',
        description: 'Registros financieros cuidados y soluciones pensadas para tus necesidades.',
      },
      {
        title: 'Acompañamiento',
        description: 'Un apoyo que considera tu éxito financiero como una prioridad compartida.',
      },
    ],
  },
  process: {
    eyebrow: 'EMPECEMOS A CONVERSAR',
    title: 'Un punto de partida claro.',
    description:
      'Una guía sencilla para hablar de tus necesidades. El alcance y los siguientes pasos se acuerdan contigo.',
    steps: [
      {
        title: 'Empieza con una consulta',
        description: 'Cuéntanos qué necesita tu negocio o qué dudas tienes sobre tus impuestos.',
      },
      {
        title: 'Revisa tus prioridades',
        description: 'Hablemos de tu situación actual y de las preguntas que quieres resolver.',
      },
      {
        title: 'Encuentra el enfoque adecuado',
        description: 'Explora los servicios contables o fiscales que se ajustan a tus necesidades.',
      },
      {
        title: 'Define los siguientes pasos',
        description: 'Acordemos cómo avanzar y qué apoyo necesitas.',
      },
    ],
  },
  local: {
    eyebrow: 'EN MIAMI, CERCA DE TI',
    title: 'Perspectiva local.\nConexión personal.',
    description:
      'Servicios contables y fiscales para las empresas y personas que hacen de Miami su hogar. Hablemos de lo que necesitas.',
    addressLabel: 'OFICINA EN MIAMI',
    contactLabel: 'HABLEMOS',
    action: 'Contacta con el equipo',
  },
  faq: {
    eyebrow: 'RESOLVEMOS TUS DUDAS',
    title: 'Preguntas frecuentes.',
    description: 'Un primer acercamiento a tus dudas contables y fiscales.',
    items: [
      {
        question: '¿Qué servicios contables ofrecen?',
        answer:
          'Ofrecemos contabilidad, teneduría de libros, estados financieros, preparación de impuestos y planificación fiscal.',
      },
      {
        question: '¿Ofrecen teneduría de libros?',
        answer:
          'Sí. Te ayudamos a mantener organizados los registros para comprender mejor tus finanzas.',
      },
      {
        question: '¿Pueden ayudarme a preparar mis impuestos?',
        answer:
          'Sí. La preparación de impuestos es uno de nuestros servicios principales. Contacta con nosotros para hablar de tu situación.',
      },
      {
        question: '¿Ofrecen planificación fiscal?',
        answer:
          'Sí. Ofrecemos planificación fiscal para ayudarte a mirar al futuro y considerar tus objetivos financieros.',
      },
      {
        question: '¿Preparan estados financieros?',
        answer: 'Sí. Preparamos estados financieros adaptados a las necesidades de tu negocio.',
      },
      {
        question: '¿Dónde está Urban Accounting?',
        answer:
          'Nuestra oficina en Miami está en ' +
          businessAddress +
          '. Contacta antes de visitarnos para concertar una consulta.',
      },
    ],
  },
  cta: {
    eyebrow: 'TU PRÓXIMA ETAPA',
    title: 'Tu camino financiero\nempieza aquí.',
    description: 'Hablemos de tus necesidades contables y fiscales con Urban Accounting en Miami.',
    action: 'Agenda una consulta',
    note: 'Para tu negocio. Para tu próximo paso.',
  },
};
