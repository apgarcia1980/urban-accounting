import { Routes } from '@angular/router';
import {
  Language,
  publishedServiceIds,
  publishedServiceRoutes,
} from '../../core/i18n/route-catalog';

export function createServicesRoutes(language: Language): Routes {
  return [
    {
      path: '',
      pathMatch: 'full',
      data: { page: 'services' },
      loadComponent: () =>
        import('./pages/services-hub.component').then((m) => m.ServicesHubComponent),
    },
    ...publishedServiceIds.map((id) => ({
      path: publishedServiceRoutes[id][language].split('/').filter(Boolean).at(-1),
      pathMatch: 'full' as const,
      resolve: {
        servicePage: () =>
          language === 'es'
            ? import('../../content/es/service-pages').then((m) => m.esServicePages[id])
            : import('../../content/en/service-pages').then((m) => m.enServicePages[id]),
      },
      loadComponent: () =>
        import('./pages/service-page.component').then((m) => m.ServicePageComponent),
    })),
  ];
}
