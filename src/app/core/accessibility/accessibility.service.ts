import { DOCUMENT } from '@angular/common';
import { afterNextRender, inject, Injectable, signal } from '@angular/core';

type TextScale = 100 | 125 | 150;
interface Preferences {
  textScale: TextScale;
  highContrast: boolean;
  reducedMotion: boolean;
}
const defaults: Preferences = { textScale: 100, highContrast: false, reducedMotion: false };
const storageKey = 'urban-accounting.accessibility';

@Injectable({ providedIn: 'root' })
export class AccessibilityService {
  private readonly document = inject(DOCUMENT);
  private readonly state = signal<Preferences>({ ...defaults });
  readonly preferences = this.state.asReadonly();

  constructor() {
    // Restore after hydration so server and initial client markup stay identical.
    afterNextRender(() => {
      try {
        const stored: unknown = JSON.parse(
          this.document.defaultView?.localStorage.getItem(storageKey) ?? 'null',
        );
        if (this.isPreferences(stored)) this.state.set(stored);
      } catch {
        /* Storage may be disabled or contain an obsolete value. */
      }
      this.apply();
    });
  }

  setTextScale(value: string): void {
    const scale = Number(value);
    if (scale === 100 || scale === 125 || scale === 150) this.update({ textScale: scale });
  }

  setHighContrast(value: boolean): void {
    this.update({ highContrast: value });
  }
  setReducedMotion(value: boolean): void {
    this.update({ reducedMotion: value });
  }
  reset(): void {
    this.update(defaults);
  }

  private update(patch: Partial<Preferences>): void {
    this.state.update((state) => ({ ...state, ...patch }));
    this.apply();
    try {
      this.document.defaultView?.localStorage.setItem(storageKey, JSON.stringify(this.state()));
    } catch {
      /* Preferences still apply for this session without storage. */
    }
  }

  private apply(): void {
    const root = this.document.documentElement;
    const state = this.state();
    root.style.setProperty('--text-scale', `${state.textScale}%`);
    root.classList.toggle('high-contrast', state.highContrast);
    root.classList.toggle('reduce-motion', state.reducedMotion);
  }

  private isPreferences(value: unknown): value is Preferences {
    if (!value || typeof value !== 'object') return false;
    const candidate = value as Record<string, unknown>;
    return (
      [100, 125, 150].includes(Number(candidate['textScale'])) &&
      typeof candidate['textScale'] === 'number' &&
      typeof candidate['highContrast'] === 'boolean' &&
      typeof candidate['reducedMotion'] === 'boolean'
    );
  }
}
