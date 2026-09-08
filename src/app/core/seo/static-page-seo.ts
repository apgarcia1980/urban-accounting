import { siteConfig } from '../config/site.config';
import { Language, languages, locales, pageUrl } from '../i18n/route-catalog';
import { pageBreadcrumbs } from '../i18n/page-breadcrumbs';
import type { StaticPageContent } from '../models/static-page-content';
import { businessSchema } from './business-schema';
import type { SeoMetadata } from './seo.service';

export function staticPageSeo(language: Language, content: StaticPageContent): SeoMetadata {
  const absolute = (path: string): string => new URL(path, siteConfig.origin).href;
  const canonical = absolute(pageUrl(language, content.page));
  return {
    ...content.seo,
    canonical,
    locale: locales[language],
    indexable: siteConfig.indexable,
    alternates: [
      ...languages.map((locale) => ({
        locale: locales[locale],
        url: absolute(pageUrl(locale, content.page)),
      })),
      { locale: 'x-default', url: absolute(pageUrl('en', content.page)) },
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
          about: { '@id': siteConfig.origin + '/#business' },
          breadcrumb: { '@id': canonical + '#breadcrumbs' },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': canonical + '#breadcrumbs',
          itemListElement: pageBreadcrumbs(language, content).map((item, index) => ({
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
