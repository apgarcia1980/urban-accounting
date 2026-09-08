export const languages = ['en', 'es'] as const;
export type Language = (typeof languages)[number];

export const publishedServiceIds = [
  'accounting',
  'bookkeeping',
  'financial-statements',
  'tax-preparation',
  'tax-planning',
] as const;
export type PublishedServiceId = (typeof publishedServiceIds)[number];

export const publishedServiceRoutes: Record<PublishedServiceId, Record<Language, string>> = {
  accounting: {
    en: '/en/services/accounting-services-miami/',
    es: '/es/servicios/servicios-contabilidad-miami/',
  },
  bookkeeping: {
    en: '/en/services/bookkeeping-services-miami/',
    es: '/es/servicios/bookkeeping-miami/',
  },
  'financial-statements': {
    en: '/en/services/financial-statements-miami/',
    es: '/es/servicios/estados-financieros-miami/',
  },
  'tax-preparation': {
    en: '/en/services/tax-preparation-miami/',
    es: '/es/servicios/preparacion-impuestos-miami/',
  },
  'tax-planning': {
    en: '/en/services/tax-planning-miami/',
    es: '/es/servicios/planificacion-fiscal-miami/',
  },
};

export const locales = { en: 'en-US', es: 'es-US' } as const;
export const pageIds = ['home', 'services', 'about', 'contact'] as const;
export type PageId = (typeof pageIds)[number];

export const routePaths: Record<PageId, Record<Language, string>> = {
  home: { en: '', es: '' },
  services: { en: 'services', es: 'servicios' },
  about: { en: 'about', es: 'nosotros' },
  contact: { en: 'contact', es: 'contacto' },
};

export function pageUrl(language: Language, page: PageId): string {
  const path = routePaths[page][language];
  return `/${language}/${path ? `${path}/` : ''}`;
}

export function identifyRoute(url: string): {
  language: Language;
  page: PageId | null;
  service: PublishedServiceId | null;
} {
  const path = url.split(/[?#]/)[0].replace(/^\/+|\/+$/g, '');
  const [prefix, ...segments] = path.split('/');
  const language: Language = prefix === 'es' ? 'es' : 'en';
  const service =
    publishedServiceIds.find((id) => publishedServiceRoutes[id][language] === `/${path}/`) ?? null;
  const page =
    prefix === 'en' || prefix === 'es'
      ? (pageIds.find((id) => routePaths[id][language] === segments.join('/')) ?? null)
      : null;
  return { language, page: service ? 'services' : page, service };
}
