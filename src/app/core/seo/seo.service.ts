import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoMetadata {
  title: string;
  description: string;
  canonical?: string;
  alternates?: readonly { locale: string; url: string }[];
  locale: string;
  indexable: boolean;
  structuredData?: Record<string, unknown>;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  update(data: SeoMetadata): void {
    this.title.setTitle(data.title);
    this.meta.updateTag({ name: 'description', content: data.description });
    this.meta.updateTag({
      name: 'robots',
      content: data.indexable ? 'index, follow' : 'noindex, nofollow',
    });
    for (const [property, content] of Object.entries({
      'og:title': data.title,
      'og:description': data.description,
      'og:type': 'website',
      'og:locale': data.locale.replace('-', '_'),
    }))
      this.meta.updateTag({ property, content });
    this.meta.removeTag('property="og:url"');
    this.document.head
      .querySelectorAll('link[rel="canonical"], link[rel="alternate"][hreflang], script[data-seo]')
      .forEach((node) => node.remove());
    if (data.canonical) {
      this.meta.updateTag({ property: 'og:url', content: data.canonical });
      this.addLink('canonical', data.canonical);
    }
    for (const alternate of data.alternates ?? [])
      this.addLink('alternate', alternate.url, alternate.locale);
    if (data.structuredData) {
      const script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo', '');
      script.textContent = JSON.stringify(data.structuredData).replace(/</g, '\\u003c');
      this.document.head.appendChild(script);
    }
  }

  private addLink(rel: string, href: string, locale?: string): void {
    const link = this.document.createElement('link');
    link.rel = rel;
    link.href = href;
    if (locale) link.hreflang = locale;
    this.document.head.appendChild(link);
  }
}
