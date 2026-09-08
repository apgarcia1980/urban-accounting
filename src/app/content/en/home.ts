import { HomeContent } from '../../core/models/home-content';
import { businessAddress } from '../../core/config/business.config';
import { enServices } from './services';

export const enHome: HomeContent = {
  hero: {
    eyebrow: 'URBAN ACCOUNTING · MIAMI, FLORIDA',
    title: 'Empowering your financial success in Miami.',
    description:
      'Accounting and tax support for small business owners, entrepreneurs and individuals seeking financial clarity in Miami.',
    primary: 'Schedule a Consultation',
    secondary: 'Explore Our Services',
    location: 'Miami, Florida · Businesses, entrepreneurs & individuals',
    visualLabel: 'A CLEARER FINANCIAL PICTURE',
    visualTitle: 'Expertise.\nPrecision. Partnership.',
    visualNote: 'Accounting and tax support in Miami.',
  },
  services: {
    eyebrow: 'OUR EXPERTISE',
    title: 'Clarity in every part\nof your finances.',
    description: 'Five connected services. One place to start a conversation about what you need.',
    items: enServices,
    action: 'Discuss this service',
  },
  about: {
    eyebrow: 'WHY URBAN ACCOUNTING',
    title: 'Your trusted partner\nin financial excellence.',
    description:
      'Behind every transaction, spreadsheet and tax form is the work you are building. Urban Accounting provides the expertise and support to help you move toward your financial goals.',
    action: 'Get to know us',
    principles: [
      {
        title: 'Expertise',
        description:
          'Professional experience and attention to changing regulations and industry practices.',
      },
      {
        title: 'Precision',
        description: 'Careful financial records and solutions shaped around your needs.',
      },
      {
        title: 'Partnership',
        description: 'Support that treats your financial success as a shared priority.',
      },
    ],
  },
  process: {
    eyebrow: 'LET’S START A CONVERSATION',
    title: 'A clear place to begin.',
    description:
      'A simple guide to discussing your needs. The scope and next steps are agreed with you.',
    steps: [
      {
        title: 'Start with a consultation',
        description: 'Tell us about your business or personal tax needs.',
      },
      {
        title: 'Review your priorities',
        description: 'Discuss your current situation and the questions you want to resolve.',
      },
      {
        title: 'Find the right approach',
        description: 'Explore the accounting or tax services that fit your needs.',
      },
      {
        title: 'Plan your next steps',
        description: 'Agree on how to move forward and the support you need.',
      },
    ],
  },
  local: {
    eyebrow: 'ROOTED IN MIAMI',
    title: 'Local perspective.\nPersonal connection.',
    description:
      'Accounting and tax services for the businesses and individuals who call Miami home. Get in touch to discuss your needs.',
    addressLabel: 'MIAMI OFFICE',
    contactLabel: 'LET’S TALK',
    action: 'Contact our team',
  },
  faq: {
    eyebrow: 'A LITTLE MORE CLARITY',
    title: 'Frequently asked questions.',
    description: 'A starting point for your accounting and tax questions.',
    items: [
      {
        question: 'What accounting services do you provide?',
        answer:
          'Our services include accounting, bookkeeping, financial statements, tax preparation and tax planning.',
      },
      {
        question: 'Do you offer bookkeeping services?',
        answer:
          'Yes. We help keep financial records organized so you can better understand your finances.',
      },
      {
        question: 'Can you help with tax preparation?',
        answer:
          'Yes. Tax preparation is one of our core services. Contact us to discuss your situation.',
      },
      {
        question: 'Do you provide tax planning?',
        answer:
          'Yes. We offer tax planning to help you look ahead and consider your financial goals.',
      },
      {
        question: 'Do you prepare financial statements?',
        answer: 'Yes. We prepare financial statements tailored to your business needs.',
      },
      {
        question: 'Where is Urban Accounting located?',
        answer:
          'Our Miami office is at ' +
          businessAddress +
          '. Contact us before visiting to arrange a consultation.',
      },
    ],
  },
  cta: {
    eyebrow: 'YOUR NEXT CHAPTER',
    title: 'Your financial journey\nstarts here.',
    description:
      'Start a conversation about your accounting and tax needs with Urban Accounting in Miami.',
    action: 'Schedule a Consultation',
    note: 'For your business. For your next step.',
  },
};
