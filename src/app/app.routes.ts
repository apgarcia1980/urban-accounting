import { Routes } from '@angular/router';
import { languages, pageUrl } from './core/i18n/route-catalog';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'en/' },
  ...languages.flatMap((language): Routes => [
    {
      path: pageUrl(language, 'home').replace(/^\/+|\/+$/g, ''),
      pathMatch: 'full',
      loadChildren: () => import('./features/home/home.routes').then((m) => m.homeRoutes),
    },
    {
      path: pageUrl(language, 'services').replace(/^\/+|\/+$/g, ''),
      loadChildren: () =>
        import('./features/services/services.routes').then((m) => m.createServicesRoutes(language)),
    },
    {
      path: pageUrl(language, 'about').replace(/^\/+|\/+$/g, ''),
      loadChildren: () =>
        import('./features/about/about.routes').then((m) => m.createAboutRoutes(language)),
    },
    {
      path: pageUrl(language, 'contact').replace(/^\/+|\/+$/g, ''),
      loadChildren: () =>
        import('./features/contact/contact.routes').then((m) => m.createContactRoutes(language)),
    },
  ]),
  {
    path: '**',
    loadComponent: () =>
      import('./shared/components/placeholder-page/placeholder-page.component').then(
        (m) => m.PlaceholderPageComponent,
      ),
  },
];
