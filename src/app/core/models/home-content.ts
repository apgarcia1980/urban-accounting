import { ServiceId } from '../config/navigation.config';

export interface ServiceContent {
  id: ServiceId;
  title: string;
  description: string;
}
export interface FaqItem {
  question: string;
  answer: string;
}
export interface SectionHeading {
  eyebrow: string;
  title: string;
  description?: string;
}
export interface ConsultationContent extends SectionHeading {
  action: string;
  note: string;
}
export interface HomeContent {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primary: string;
    secondary: string;
    location: string;
    visualTitle: string;
    visualLabel: string;
    visualNote: string;
  };
  services: SectionHeading & { items: readonly ServiceContent[]; action: string };
  about: SectionHeading & {
    action: string;
    principles: readonly { title: string; description: string }[];
  };
  process: SectionHeading & { steps: readonly { title: string; description: string }[] };
  local: SectionHeading & { addressLabel: string; contactLabel: string; action: string };
  faq: SectionHeading & { items: readonly FaqItem[] };
  cta: ConsultationContent;
}
