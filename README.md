# Urban Accounting

Base Angular 22 standalone, TypeScript strict, SCSS y SSR con hidratación.

## Comandos

- `npm ci`
- `npm start`: desarrollo en http://localhost:4200
- `npm run build`: genera robots/sitemap, bundles y las catorce páginas públicas prerenderizadas.
- `npm run serve:ssr`: servidor de producción en http://localhost:4000

## Organización

- `core/`: configuración, catálogo de rutas/idiomas, SEO y accesibilidad.
- `layout/`: shell, header, footer y cambio de idioma.
- `shared/components/`: accesibilidad, tarjetas de servicio, FAQ, CTA y página provisional.
- `features/{home,services,about,resources,contact}/`: límites lazy con rutas propias.
- `content/{en,es}/`: contenido tipado de Home, servicios y navegación.
- `src/styles/`: tokens, temas y estilos globales.

Las features no se importan entre sí. Cada una puede añadir pages, components,
services y models cuando los necesite. Home tiene página y hero propios;
Services utiliza una plantilla de landing y contenido tipado para Accounting y Bookkeeping.
Los demás servicios y las otras features conservan el placeholder.

## Decisiones de esta fase

El idioma se deriva de la URL (en-US/es-US). La raíz redirige a /en/.
Las catorce rutas públicas se prerenderizan; las desconocidas se renderizan mediante
SSR con estado 404. La Home está implementada en ambos idiomas.
SEO se resuelve fuera de los componentes mediante TitleStrategy y SeoService.
Antes de publicar, configurar el dominio real y la indexación en
`src/app/core/config/site.config.ts`, sustituir metadata provisional y reconstruir.
El origen local y noindex son intencionales durante esta fase. Añadir también el
dominio real a `security.allowedHosts` en `angular.json` antes de publicar.
Los tokens toman el ZIP como referencia; las fuentes usan fallback del sistema,
sin descargas externas. La reducción de movimiento del sistema siempre se respeta.
Preferencias locales restauradas después de hidratación, tolerando storage bloqueado.

Contenido del negocio: https://www.urbanaccounting.net/ (consulta: 2026-09-08).
NAP centralizado en `core/config/business.config.ts`; dirección pendiente de verificación.
Destinos de consultas y futuras landings en `core/config/navigation.config.ts`.
El footer conserva el aviso de derechos; no se inventan políticas legales ni redes sociales.
