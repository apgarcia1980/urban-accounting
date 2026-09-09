import { Component, ElementRef, HostListener, inject, input } from '@angular/core';
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
  private readonly host = inject(ElementRef<HTMLElement>);
  protected readonly accessibility = inject(AccessibilityService);
  protected readonly language = inject(LanguageService);

  @HostListener('document:click', ['$event'])
  protected closeOnOutsideClick(event: MouseEvent): void {
    if (this.host.nativeElement.contains(event.target as Node)) return;
    const panel = this.host.nativeElement.querySelector('details');
    if (panel?.open) panel.open = false;
  }

  protected setTextScale(value: string, panel: HTMLDetailsElement, summary: HTMLElement): void {
    this.accessibility.setTextScale(value);
    this.closePanel(panel, summary);
  }

  protected setHighContrast(value: boolean, panel: HTMLDetailsElement, summary: HTMLElement): void {
    this.accessibility.setHighContrast(value);
    this.closePanel(panel, summary);
  }

  protected setReducedMotion(
    value: boolean,
    panel: HTMLDetailsElement,
    summary: HTMLElement,
  ): void {
    this.accessibility.setReducedMotion(value);
    this.closePanel(panel, summary);
  }

  protected reset(panel: HTMLDetailsElement, summary: HTMLElement): void {
    this.accessibility.reset();
    this.closePanel(panel, summary);
  }
}
