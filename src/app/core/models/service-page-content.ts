import type { PublishedServiceId } from '../i18n/route-catalog';
import type { ServiceId } from '../config/navigation.config';
import type { ConsultationContent, FaqItem, SectionHeading } from './home-content';

export interface ServiceDetail {
  title: string;
  description: string;
}

export interface ServicePageContent {
  id: PublishedServiceId;
  name: string;
  seo: { title: string; description: string };
  hero: SectionHeading & {
    primary: string;
    secondary: string;
    note: string;
    focus: readonly string[];
  };
  introduction: SectionHeading & { paragraphs: readonly string[] };
  features: SectionHeading & { items: readonly ServiceDetail[] };
  benefits: SectionHeading & { items: readonly ServiceDetail[] };
  process?: SectionHeading & { steps: readonly ServiceDetail[] };
  local: SectionHeading & { addressLabel: string; action: string };
  related: SectionHeading & { ids: readonly ServiceId[]; action: string; overviewAction: string };
  faq: SectionHeading & { items: readonly FaqItem[] };
  cta: ConsultationContent;
}

export interface BreadcrumbItem {
  label: string;
  path: string;
}
