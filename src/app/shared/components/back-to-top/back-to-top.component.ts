import { afterNextRender, Component, DestroyRef, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LanguageService } from '../../../core/i18n/language.service';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrl: './back-to-top.component.scss',
})
export class BackToTopComponent {
  protected readonly language = inject(LanguageService);
  protected readonly visible = signal(false);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const updateVisibility = (): void => this.visible.set(window.scrollY > 320);
      window.addEventListener('scroll', updateVisibility, { passive: true });
      updateVisibility();
      this.destroyRef.onDestroy(() => window.removeEventListener('scroll', updateVisibility));
    });
  }

  protected scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: this.document.documentElement.classList.contains('reduce-motion')
        ? 'auto'
        : 'smooth',
    });
  }
}
