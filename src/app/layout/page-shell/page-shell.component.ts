import { afterNextRender, Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { LanguageService } from '../../core/i18n/language.service';
import { BackToTopComponent } from '../../shared/components/back-to-top/back-to-top.component';

@Component({
  selector: 'app-page-shell',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, BackToTopComponent],
  templateUrl: './page-shell.component.html',
  styleUrl: './page-shell.component.scss',
})
export class PageShellComponent {
  protected readonly language = inject(LanguageService);
  private readonly document = inject(DOCUMENT);
  protected readonly router = inject(Router);
  private hydrated = false;

  constructor() {
    afterNextRender(() => {
      this.hydrated = true;
    });
    this.router.events.pipe(takeUntilDestroyed()).subscribe((event) => {
      if (event instanceof NavigationEnd && this.hydrated) {
        this.document.getElementById('main-content')?.focus({ preventScroll: true });
      }
    });
  }
}
