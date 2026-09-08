import { Routes } from '@angular/router';
import { Language } from '../../core/i18n/route-catalog';

export function createAboutRoutes(language: Language): Routes {
  return [
    {
      path: '',
      pathMatch: 'full',
      data: { page: 'about' },
      resolve: {
        pageContent: () =>
          language === 'es'
            ? import('../../content/es/about').then((m) => m.esAbout)
            : import('../../content/en/about').then((m) => m.enAbout),
      },
      loadComponent: () => import('./pages/about-page.component').then((m) => m.AboutPageComponent),
    },
  ];
}
