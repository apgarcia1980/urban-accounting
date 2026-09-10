import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  computed,
  inject,
  signal,
} from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { consultationRoutes, serviceLink } from '../../core/config/navigation.config';
import { identifyRoute, pageUrl } from '../../core/i18n/route-catalog';

import { AccessibilityPanelComponent } from '../../shared/components/accessibility-panel/accessibility-panel.component';
import { LanguageService } from '../../core/i18n/language.service';
import { LanguageSwitcherComponent } from '../navigation/language-switcher.component';
import { businessConfig } from '../../core/config/business.config';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, LanguageSwitcherComponent, AccessibilityPanelComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected readonly language = inject(LanguageService);
  protected readonly pages = ['about', 'contact'] as const;
  protected readonly business = businessConfig;
  protected readonly pageUrl = pageUrl;
  protected readonly serviceLink = serviceLink;
  protected readonly menuOpen = signal(false);
  protected readonly servicesOpen = signal(false);
  protected readonly hasPhotoHero = signal(false);
  protected readonly isScrolled = signal(false);
  protected readonly consultation = computed(() => consultationRoutes[this.language.current()]);

  constructor() {
    const destroyRef = inject(DestroyRef);
    const element = inject<ElementRef<HTMLElement>>(ElementRef);
    afterNextRender(() => {
      const updateScroll = () => this.isScrolled.set(window.scrollY > 16);
      updateScroll();
      window.addEventListener('scroll', updateScroll, { passive: true });
      // Measure the closed header so wrapped navigation and text scaling leave room for breadcrumbs.
      const updateHeight = () => {
        if (!this.menuOpen()) {
          document.documentElement.style.setProperty(
            '--site-header-height',
            `${element.nativeElement.getBoundingClientRect().height}px`,
          );
        }
      };
      const observer = new ResizeObserver(updateHeight);
      observer.observe(element.nativeElement);
      updateHeight();
      destroyRef.onDestroy(() => observer.disconnect());
      destroyRef.onDestroy(() => window.removeEventListener('scroll', updateScroll));
    });
    const router = inject(Router);
    this.hasPhotoHero.set(identifyRoute(router.url).page !== null);
    router.events.pipe(takeUntilDestroyed()).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.hasPhotoHero.set(identifyRoute(event.urlAfterRedirects).page !== null);
        this.menuOpen.set(false);
        this.servicesOpen.set(false);
      }
    });
  }

  protected closeMenu(button: HTMLButtonElement): void {
    this.menuOpen.set(false);
    this.servicesOpen.set(false);
    button.focus();
  }

  protected closeServices(event: Event, button: HTMLButtonElement): void {
    if (!this.servicesOpen()) return;
    event.stopPropagation();
    this.servicesOpen.set(false);
    button.focus();
  }
}
