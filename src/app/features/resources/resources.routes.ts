import { Routes } from '@angular/router';

export const resourcesRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    data: { page: 'resources' },
    loadComponent: () =>
      import('../../shared/components/placeholder-page/placeholder-page.component').then(
        (m) => m.PlaceholderPageComponent,
      ),
  },
];
