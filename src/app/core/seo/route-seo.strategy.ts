import { inject, Injectable } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { siteConfig } from '../config/site.config';
import { identifyRoute, languages, locales, pageUrl } from '../i18n/route-catalog';
import { enContent } from '../../content/en/site';
import { esContent } from '../../content/es/site';
import { SeoService } from './seo.service';
import { homeSeo } from '../../content/home-seo';
import { businessSchema } from './business-schema';
import { servicePageSeo } from './service-page-seo';
import { ServicePageContent } from '../models/service-page-content';
import { StaticPageContent } from '../models/static-page-content';
import { staticPageSeo } from './static-page-seo';

@Injectable()
export class RouteSeoStrategy extends TitleStrategy {
  private readonly seo = inject(SeoService);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const { language, page, service } = identifyRoute(snapshot.url);
    let leaf = snapshot.root;
    while (leaf.firstChild) leaf = leaf.firstChild;
    const serviceContent = leaf.data['servicePage'] as ServicePageContent | undefined;
    if (service && serviceContent?.id === service) {
      this.seo.update(servicePageSeo(language, serviceContent));
      return;
    }
    const staticPageContent = leaf.data['pageContent'] as StaticPageContent | undefined;
    if (staticPageContent?.page === page) {
      this.seo.update(staticPageSeo(language, staticPageContent));
      return;
    }
    const content = language === 'es' ? esContent : enContent;
    const title =
      page === 'home'
        ? homeSeo[language].title
        : `${page ? content.navigation[page] : content.notFound} | ${siteConfig.name}`;
    const canonical = page ? new URL(pageUrl(language, page), siteConfig.origin).href : undefined;
    this.seo.update({
      title,
      description:
        page === 'home'
          ? homeSeo[language].description
          : page
            ? content.placeholder
            : content.notFound,
      locale: locales[language],
      indexable: siteConfig.indexable && page !== null,
      canonical,
      alternates: page
        ? [
            ...languages.map((lang) => ({
              locale: locales[lang],
              url: new URL(pageUrl(lang, page), siteConfig.origin).href,
            })),
            { locale: 'x-default', url: new URL(pageUrl('en', page), siteConfig.origin).href },
          ]
        : [],
      structuredData: canonical
        ? page === 'home'
          ? {
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebPage',
                  '@id': canonical,
                  url: canonical,
                  name: title,
                  inLanguage: locales[language],
                  about: { '@id': siteConfig.origin + '/#business' },
                },
                businessSchema(),
              ],
            }
          : {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: title,
              url: canonical,
              inLanguage: locales[language],
            }
        : undefined,
    });
  }
}
