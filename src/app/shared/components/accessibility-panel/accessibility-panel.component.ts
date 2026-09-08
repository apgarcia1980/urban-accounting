import { Component, inject, input } from '@angular/core';
import { AccessibilityService } from '../../../core/accessibility/accessibility.service';
import { LanguageService } from '../../../core/i18n/language.service';

@Component({
  selector: 'app-accessibility-panel',
  templateUrl: './accessibility-panel.component.html',
  styleUrl: './accessibility-panel.component.scss',
})
export class AccessibilityPanelComponent {
  readonly idPrefix = input.required<string>();
  protected closePanel(panel: HTMLDetailsElement, summary: HTMLElement): void {
    panel.open = false;
    summary.focus();
  }
  protected readonly accessibility = inject(AccessibilityService);
  protected readonly language = inject(LanguageService);
}
