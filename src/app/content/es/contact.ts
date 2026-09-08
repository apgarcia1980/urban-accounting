import type { ContactFormContent, StaticPageContent } from '../../core/models/static-page-content';

export const esContact: StaticPageContent = {
  page: 'contact',
  seo: {
    title: 'Contacto | Urban Accounting en Miami',
    description:
      'Contacta con Urban Accounting en Miami, Florida para hablar de contabilidad, libros, estados financieros, preparación de impuestos o planificación fiscal.',
  },
  hero: {
    eyebrow: 'URBAN ACCOUNTING · MIAMI, FLORIDA',
    title: 'Empecemos con una conversación.',
    description:
      'Contacta con Urban Accounting para hablar de tus necesidades contables o fiscales en Miami.',
    action: 'Explora nuestros servicios',
  },
  introduction: {
    eyebrow: 'CONTACTA CON URBAN ACCOUNTING',
    title: 'Un lugar claro\npara encontrarnos.',
    paragraphs: [
      'Elige la forma de contacto que te resulte más cómoda. Podemos empezar por las dudas que tengas sobre contabilidad, libros, estados financieros, preparación de impuestos o planificación fiscal.',
    ],
  },
  local: {
    eyebrow: 'OFICINA EN MIAMI',
    title: 'Visítanos con cita\ndespués de contactar.',
    description:
      'La dirección publicada de nuestra oficina aparece a continuación. Contacta con Urban Accounting antes de visitarnos para concertar una consulta.',
    addressLabel: 'URBAN ACCOUNTING · MIAMI',
    action: 'Explora nuestros servicios',
  },
};

export const esContactForm: ContactFormContent = {
  title: 'Cuéntanos cómo podemos ayudarte.',
  description:
    'El formulario está listo para recoger tu información, pero el envío de mensajes aún no está activado.',
  fields: {
    name: 'Nombre',
    email: 'Email',
    phone: 'Teléfono',
    service: 'Servicio',
    message: 'Mensaje',
  },
  optional: 'Opcional',
  selectService: 'Selecciona un servicio',
  submit: 'Enviar mensaje',
  required: 'Este campo es obligatorio.',
  invalidEmail: 'Introduce un email válido.',
  unavailable:
    'El envío de mensajes aún no está activado. Llama o escribe directamente a Urban Accounting.',
  mapTitle: 'Ubicación de Urban Accounting en Miami',
  mapDirections: 'Abrir en Google Maps',
};
