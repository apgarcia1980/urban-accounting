import type { ConsultationContent, SectionHeading } from './home-content';
import type { PageId } from '../i18n/route-catalog';
import type { ServiceId } from '../config/navigation.config';

export interface StaticPageContent {
  page: Extract<PageId, 'about' | 'contact'>;
  seo: { title: string; description: string };
  hero: SectionHeading & { action: string };
  introduction: SectionHeading & { paragraphs: readonly string[] };
  approach?: SectionHeading & { items: readonly { title: string; description: string }[] };
  related?: SectionHeading & { ids: readonly ServiceId[]; action: string };
  local: SectionHeading & { action: string; addressLabel: string };
  cta?: ConsultationContent;
}

export interface ContactFormContent {
  title: string;
  description: string;
  fields: { name: string; email: string; phone: string; service: string; message: string };
  optional: string;
  selectService: string;
  submit: string;
  required: string;
  invalidEmail: string;
  unavailable: string;
  mapTitle: string;
  mapDirections: string;
}
