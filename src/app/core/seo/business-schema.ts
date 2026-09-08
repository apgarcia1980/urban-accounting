import { businessConfig } from '../config/business.config';
import { siteConfig } from '../config/site.config';

export function businessSchema(): Record<string, unknown> {
  return {
    '@type': 'AccountingService',
    '@id': siteConfig.origin + '/#business',
    name: businessConfig.name,
    url: siteConfig.origin,
    telephone: businessConfig.phoneHref.replace('tel:', ''),
    email: businessConfig.email,
    address: { '@type': 'PostalAddress', ...businessConfig.address },
    areaServed: { '@type': 'City', name: 'Miami' },
  };
}
