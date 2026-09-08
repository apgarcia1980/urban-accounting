import { enContent } from '../../content/en/site';
import { esContent } from '../../content/es/site';
import { publishedServiceRoutes } from './route-catalog';
import type { BreadcrumbItem, ServicePageContent } from '../models/service-page-content';
import { Language, pageUrl } from './route-catalog';

export function serviceBreadcrumbs(
  language: Language,
  service: ServicePageContent,
): BreadcrumbItem[] {
  const labels = (language === 'es' ? esContent : enContent).navigation;
  return [
    { label: labels.home, path: pageUrl(language, 'home') },
    { label: labels.services, path: pageUrl(language, 'services') },
    { label: service.name, path: publishedServiceRoutes[service.id][language] },
  ];
}
