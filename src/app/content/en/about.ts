import type { StaticPageContent } from '../../core/models/static-page-content';

export const enAbout: StaticPageContent = {
  page: 'about',
  seo: {
    title: 'About Urban Accounting | Miami, Florida',
    description:
      'Learn about Urban Accounting in Miami and the accounting, bookkeeping, financial statement and tax services available to businesses and individuals.',
  },
  hero: {
    eyebrow: 'URBAN ACCOUNTING · MIAMI, FLORIDA',
    title: 'A clearer conversation about your finances.',
    description:
      'Urban Accounting provides accounting and tax services in Miami for businesses and individuals seeking organized information and professional support.',
    action: 'Contact Urban Accounting',
  },
  introduction: {
    eyebrow: 'WHO WE ARE',
    title: 'Accounting and tax support\nwith a personal perspective.',
    paragraphs: [
      'Urban Accounting is a Miami-based firm offering accounting, bookkeeping, financial statements, tax preparation and tax planning.',
      'Every financial question begins with a different situation. We focus on understanding what you need, organizing the conversation and providing careful, professional support.',
    ],
  },
  approach: {
    eyebrow: 'HOW WE WORK',
    title: 'Start with the information\nand the questions that matter.',
    description:
      'A practical approach built around clear communication and attention to financial details.',
    items: [
      {
        title: 'A personal conversation',
        description:
          'Begin by discussing your business or personal financial needs and the questions you want to address.',
      },
      {
        title: 'Attention to the details',
        description:
          'Organized records and careful financial information create a more useful starting point.',
      },
      {
        title: 'Connected services',
        description:
          'Accounting, bookkeeping, financial statements and tax services can each support a different part of the conversation.',
      },
    ],
  },
  related: {
    eyebrow: 'OUR SERVICES',
    title: 'Support for the financial\nquestions in front of you.',
    description: 'Explore the five services currently available through Urban Accounting.',
    ids: ['accounting', 'bookkeeping', 'financial-statements', 'tax-preparation', 'tax-planning'],
    action: 'Explore this service',
  },
  local: {
    eyebrow: 'IN MIAMI',
    title: 'A local point of contact\nfor financial questions.',
    description:
      'Urban Accounting operates in Miami, Florida. Reach out to discuss your needs and arrange a consultation before visiting the office.',
    addressLabel: 'MIAMI OFFICE',
    action: 'Contact our team',
  },
  cta: {
    eyebrow: 'START WITH A CONVERSATION',
    title: 'Let’s discuss\nwhat you need.',
    description: 'Talk to Urban Accounting about your accounting or tax questions.',
    action: 'Contact Urban Accounting',
    note: 'For businesses and individuals in Miami.',
  },
};
