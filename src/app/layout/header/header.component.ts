import { afterNextRender, Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LanguageService } from '../../core/i18n/language.service';
import { pageUrl } from '../../core/i18n/route-catalog';
import { businessConfig } from '../../core/config/business.config';
import { consultationRoutes, serviceLink } from '../../core/config/navigation.config';
import { LanguageSwitcherComponent } from '../navigation/language-switcher.component';
import { AccessibilityPanelComponent } from '../../shared/components/accessibility-panel/accessibility-panel.component';

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
  protected readonly isHome = signal(false);
  protected readonly isScrolled = signal(false);
  protected readonly consultation = computed(() => consultationRoutes[this.language.current()]);

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const updateScroll = () => this.isScrolled.set(window.scrollY > 16);
      updateScroll();
      window.addEventListener('scroll', updateScroll, { passive: true });
      destroyRef.onDestroy(() => window.removeEventListener('scroll', updateScroll));
    });
    const router = inject(Router);
    this.isHome.set(/^\/(en|es)\/?$/.test(router.url));
    router.events.pipe(takeUntilDestroyed()).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHome.set(/^\/(en|es)\/?$/.test(event.urlAfterRedirects));
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
