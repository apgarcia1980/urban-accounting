import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/i18n/language.service';
import { pageUrl } from '../../core/i18n/route-catalog';
import { businessConfig } from '../../core/config/business.config';
import { serviceLink } from '../../core/config/navigation.config';
import { LanguageSwitcherComponent } from '../navigation/language-switcher.component';
import { AccessibilityPanelComponent } from '../../shared/components/accessibility-panel/accessibility-panel.component';
@Component({
  selector: 'app-footer',
  imports: [RouterLink, LanguageSwitcherComponent, AccessibilityPanelComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected readonly language = inject(LanguageService);
  protected readonly business = businessConfig;
  protected readonly pageUrl = pageUrl;
  protected readonly serviceLink = serviceLink;
  protected readonly pages = ['about', 'contact'] as const;
}
