import { SiteContent } from '../../core/i18n/content.model';
import { esServices } from './services';

export const esContent: SiteContent = {
  servicesHub: {
    title: 'Servicios para una visión financiera más clara.',
    description:
      'Explora los servicios de Urban Accounting en Miami y encuentra un punto de partida para hablar de lo que necesitas.',
  },
  breadcrumbs: 'Ruta de navegación',
  services: esServices,
  consultation: 'Agenda una consulta',
  menu: 'Menú',
  closeMenu: 'Cerrar',
  allServices: 'Explora nuestros servicios',
  footerDescription: 'Contabilidad e impuestos con una perspectiva personal.',
  footerServices: 'Servicios del pie de página',
  footerCompany: 'Enlaces de empresa del pie de página',
  rights: 'Todos los derechos reservados.',
  navigation: {
    home: 'Inicio',
    services: 'Servicios',
    about: 'Nosotros',
    contact: 'Contacto',
  },
  skip: 'Saltar al contenido principal',
  mainNavigation: 'Navegación principal',
  languageNavigation: 'Idioma',
  placeholder: 'Contenido pendiente.',
  notFound: 'Página no encontrada',
  accessibility: {
    title: 'Accesibilidad',
    textSize: 'Tamaño del texto',
    standard: 'Normal',
    large: 'Grande',
    extraLarge: 'Muy grande',
    contrast: 'Alto contraste',
    motion: 'Reducir movimiento',
    reset: 'Restablecer preferencias',
  },
};
