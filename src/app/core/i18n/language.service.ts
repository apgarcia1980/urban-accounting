import { DOCUMENT } from '@angular/common';
import { computed, inject, Injectable, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { enContent } from '../../content/en/site';
import { esContent } from '../../content/es/site';
import { identifyRoute, Language, locales, pageUrl } from './route-catalog';
import { publishedServiceRoutes } from './route-catalog';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  private readonly currentRoute = signal(identifyRoute(this.router.url));
  readonly current = computed(() => this.currentRoute().language);
  readonly locale = computed(() => locales[this.current()]);
  readonly content = computed(() => (this.current() === 'es' ? esContent : enContent));

  constructor() {
    this.router.events.pipe(takeUntilDestroyed()).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute.set(identifyRoute(event.urlAfterRedirects));
        this.document.documentElement.lang = this.locale();
      }
    });
  }

  equivalentUrl(language: Language): string {
    const service = this.currentRoute().service;
    if (service) return publishedServiceRoutes[service][language];
    return pageUrl(language, this.currentRoute().page ?? 'home');
  }
}
