import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    data: { page: 'home' },
    loadComponent: () => import('./pages/home-page.component').then((m) => m.HomePageComponent),
  },
];
