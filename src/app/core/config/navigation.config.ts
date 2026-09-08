import { Language, pageUrl } from '../i18n/route-catalog';
import { publishedServiceRoutes } from '../i18n/route-catalog';

export const serviceIds = [
  'accounting',
  'bookkeeping',
  'financial-statements',
  'tax-preparation',
  'tax-planning',
] as const;
export type ServiceId = (typeof serviceIds)[number];
export interface ServiceLink {
  path: string;
  fragment?: string;
}

// Replace these destinations when appointments and service landings are introduced.
export const consultationRoutes: Record<Language, string> = {
  en: '/en/contact/',
  es: '/es/contacto/',
};
export const serviceLandingRoutes: Partial<Record<ServiceId, Record<Language, string>>> =
  publishedServiceRoutes;

export function serviceDestination(language: Language, id: ServiceId): string {
  return serviceLandingRoutes[id]?.[language] ?? consultationRoutes[language];
}

export function serviceLink(language: Language, id: ServiceId): ServiceLink {
  const landing = serviceLandingRoutes[id]?.[language];
  return landing
    ? { path: landing }
    : { path: pageUrl(language, 'home'), fragment: 'service-' + id };
}
