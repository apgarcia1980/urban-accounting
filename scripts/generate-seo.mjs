import { mkdir, writeFile } from 'node:fs/promises';
import { siteConfig } from '../src/app/core/config/site.config.ts';
import {
  languages,
  pageIds,
  pageUrl,
  publishedServiceIds,
  publishedServiceRoutes,
} from '../src/app/core/i18n/route-catalog.ts';

const escapeXml = (text) =>
  text.replace(
    /[<>&"']/g,
    (char) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' })[char],
  );
const urls = languages.flatMap((language) =>
  [
    ...pageIds.map((page) => pageUrl(language, page)),
    ...publishedServiceIds.map((id) => publishedServiceRoutes[id][language]),
  ].map(
    (path) => '  <url><loc>' + escapeXml(new URL(path, siteConfig.origin).href) + '</loc></url>',
  ),
);
await mkdir(new URL('../public/', import.meta.url), { recursive: true });
await writeFile(
  new URL('../public/sitemap.xml', import.meta.url),
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.join('\n') +
    '\n</urlset>\n',
);
await writeFile(
  new URL('../public/robots.txt', import.meta.url),
  'User-agent: *\n' +
    (siteConfig.indexable ? 'Allow: /' : 'Disallow: /') +
    '\nSitemap: ' +
    new URL('/sitemap.xml', siteConfig.origin).href +
    '\n',
);
