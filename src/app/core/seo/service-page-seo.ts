import { siteConfig } from '../config/site.config';
import { Language, languages, locales, publishedServiceRoutes } from '../i18n/route-catalog';
import { serviceBreadcrumbs } from '../i18n/service-breadcrumbs';
import { ServicePageContent } from '../models/service-page-content';
import { businessSchema } from './business-schema';
import { SeoMetadata } from './seo.service';

export function servicePageSeo(language: Language, content: ServicePageContent): SeoMetadata {
  const absolute = (path: string): string => new URL(path, siteConfig.origin).href;
  const canonical = absolute(publishedServiceRoutes[content.id][language]);
  return {
    ...content.seo,
    canonical,
    locale: locales[language],
    indexable: siteConfig.indexable,
    alternates: [
      ...languages.map((lang) => ({
        locale: locales[lang],
        url: absolute(publishedServiceRoutes[content.id][lang]),
      })),
      { locale: 'x-default', url: absolute(publishedServiceRoutes[content.id].en) },
    ],
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        businessSchema(),
        {
          '@type': 'WebPage',
          '@id': canonical,
          url: canonical,
          name: content.seo.title,
          description: content.seo.description,
          inLanguage: locales[language],
          mainEntity: { '@id': canonical + '#service' },
          breadcrumb: { '@id': canonical + '#breadcrumbs' },
        },
        {
          '@type': 'Service',
          '@id': canonical + '#service',
          url: canonical,
          name: content.name,
          serviceType: content.name,
          description: content.hero.description,
          provider: { '@id': siteConfig.origin + '/#business' },
          areaServed: { '@type': 'City', name: 'Miami' },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': canonical + '#breadcrumbs',
          itemListElement: serviceBreadcrumbs(language, content).map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.label,
            item: absolute(item.path),
          })),
        },
      ],
    },
  };
}
