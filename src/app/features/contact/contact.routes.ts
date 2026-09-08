import { Routes } from '@angular/router';
import { Language } from '../../core/i18n/route-catalog';

export function createContactRoutes(language: Language): Routes {
  return [
    {
      path: '',
      pathMatch: 'full',
      data: { page: 'contact' },
      resolve: {
        pageContent: () =>
          language === 'es'
            ? import('../../content/es/contact').then((m) => m.esContact)
            : import('../../content/en/contact').then((m) => m.enContact),
      },
      loadComponent: () =>
        import('./pages/contact-page.component').then((m) => m.ContactPageComponent),
    },
  ];
}
