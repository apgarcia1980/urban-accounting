import type { ContactFormContent, StaticPageContent } from '../../core/models/static-page-content';

export const enContact: StaticPageContent = {
  page: 'contact',
  seo: {
    title: 'Contact Urban Accounting | Miami, Florida',
    description:
      'Contact Urban Accounting in Miami, Florida to discuss accounting, bookkeeping, financial statements, tax preparation or tax planning.',
  },
  hero: {
    eyebrow: 'URBAN ACCOUNTING · MIAMI, FLORIDA',
    title: 'Let’s start with a conversation.',
    description: 'Contact Urban Accounting to discuss your accounting or tax needs in Miami.',
    action: 'Explore our services',
  },
  introduction: {
    eyebrow: 'CONTACT URBAN ACCOUNTING',
    title: 'A clear place\nto reach us.',
    paragraphs: [
      'Choose the contact option that works best for you. We can begin with the questions you have about accounting, bookkeeping, financial statements, tax preparation or tax planning.',
    ],
  },
  local: {
    eyebrow: 'MIAMI OFFICE',
    title: 'Visit by appointment\nafter getting in touch.',
    description:
      'Our published office address is shown below. Please contact Urban Accounting before visiting to arrange a consultation.',
    addressLabel: 'URBAN ACCOUNTING · MIAMI',
    action: 'Explore our services',
  },
};

export const enContactForm: ContactFormContent = {
  title: 'Tell us how we can help.',
  description: 'This form is ready for your information, but message delivery is not enabled yet.',
  fields: { name: 'Name', email: 'Email', phone: 'Phone', service: 'Service', message: 'Message' },
  optional: 'Optional',
  selectService: 'Select a service',
  submit: 'Send message',
  required: 'This field is required.',
  invalidEmail: 'Enter a valid email address.',
  unavailable:
    'Message delivery is not enabled yet. Please call or email Urban Accounting directly.',
  mapTitle: 'Urban Accounting location in Miami',
  mapDirections: 'Open in Google Maps',
};
