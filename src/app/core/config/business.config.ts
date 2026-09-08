// Source: https://www.urbanaccounting.net/ — checked 2026-09-08.
// Address is provisional pending the owner's verification of external discrepancies.
// Change it here to update the Home, FAQ, footer and structured data together.
export const businessConfig = {
  name: 'Urban Accounting',
  phone: '305-965-3708',
  phoneHref: 'tel:+13059653708',
  email: 'info@urbanaccounting.net',
  address: {
    streetAddress: '2555 SW 8 Street, Suite 302',
    addressLocality: 'Miami',
    addressRegion: 'FL',
    postalCode: '33135',
    addressCountry: 'US',
  },
  addressNeedsVerification: true,
  source: 'https://www.urbanaccounting.net/',
} as const;
export const businessAddress = `${businessConfig.address.streetAddress}, ${businessConfig.address.addressLocality}, ${businessConfig.address.addressRegion} ${businessConfig.address.postalCode}`;
