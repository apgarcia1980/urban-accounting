import { PageId } from './route-catalog';
import { ServiceContent } from '../models/home-content';

export interface SiteContent {
  servicesHub: { title: string; description: string };
  breadcrumbs: string;
  services: readonly ServiceContent[];
  consultation: string;
  menu: string;
  closeMenu: string;
  allServices: string;
  footerDescription: string;
  footerServices: string;
  footerCompany: string;
  rights: string;
  navigation: Record<PageId, string>;
  skip: string;
  mainNavigation: string;
  languageNavigation: string;
  placeholder: string;
  notFound: string;
  accessibility: {
    title: string;
    textSize: string;
    standard: string;
    large: string;
    extraLarge: string;
    contrast: string;
    motion: string;
    reset: string;
  };
}
