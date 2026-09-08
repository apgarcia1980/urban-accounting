import { RenderMode, ServerRoute } from '@angular/ssr';
import { languages, pageIds, pageUrl } from './core/i18n/route-catalog';
import { publishedServiceIds, publishedServiceRoutes } from './core/i18n/route-catalog';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Server },
  ...languages.flatMap((language) =>
    pageIds.map((page): ServerRoute => ({
      path: pageUrl(language, page).replace(/^\/+|\/+$/g, ''),
      renderMode: RenderMode.Prerender,
    })),
  ),
  ...publishedServiceIds.flatMap((id) =>
    languages.map((language): ServerRoute => ({
      path: publishedServiceRoutes[id][language].replace(/^\/+|\/+$/g, ''),
      renderMode: RenderMode.Prerender,
    })),
  ),
  { path: '**', renderMode: RenderMode.Server, status: 404 },
];
