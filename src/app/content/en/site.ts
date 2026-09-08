import { SiteContent } from '../../core/i18n/content.model';
import { enServices } from './services';

export const enContent: SiteContent = {
  servicesHub: {
    title: 'Services for a clearer financial picture.',
    description:
      'Explore Urban Accounting services in Miami and find a starting point for the conversation you need.',
  },
  breadcrumbs: 'Breadcrumbs',
  services: enServices,
  consultation: 'Schedule a Consultation',
  menu: 'Menu',
  closeMenu: 'Close',
  allServices: 'Explore our services',
  footerDescription: 'Accounting and tax services with a personal perspective.',
  footerServices: 'Footer services',
  footerCompany: 'Footer company links',
  rights: 'All rights reserved.',
  navigation: {
    home: 'Home',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
  },
  skip: 'Skip to main content',
  mainNavigation: 'Main navigation',
  languageNavigation: 'Language',
  placeholder: 'Content pending.',
  notFound: 'Page not found',
  accessibility: {
    title: 'Accessibility',
    textSize: 'Text size',
    standard: 'Standard',
    large: 'Large',
    extraLarge: 'Extra large',
    contrast: 'High contrast',
    motion: 'Reduce motion',
    reset: 'Reset preferences',
  },
};
