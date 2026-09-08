import type { BreadcrumbItem } from '../models/service-page-content';
import type { StaticPageContent } from '../models/static-page-content';
import { Language, pageUrl } from './route-catalog';
import { enContent } from '../../content/en/site';
import { esContent } from '../../content/es/site';

export function pageBreadcrumbs(language: Language, page: StaticPageContent): BreadcrumbItem[] {
  const navigation = (language === 'es' ? esContent : enContent).navigation;
  return [
    { label: navigation.home, path: pageUrl(language, 'home') },
    { label: navigation[page.page], path: pageUrl(language, page.page) },
  ];
}
