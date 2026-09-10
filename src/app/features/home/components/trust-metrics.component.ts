import {
  afterNextRender,
  Component,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  signal,
} from '@angular/core';
import { AccessibilityService } from '../../../core/accessibility/accessibility.service';
import { trustConfig } from '../../../core/config/trust.config';
import { HomeTrustContent } from '../../../core/models/home-trust-content';

@Component({
  selector: 'app-trust-metrics',
  templateUrl: './trust-metrics.component.html',
  styleUrl: './trust-metrics.component.scss',
})
export class TrustMetricsComponent {
  readonly content = input.required<HomeTrustContent>();
  protected readonly data = trustConfig;
  // Keep server rendering and the initial hydration render at the final values.
  protected readonly progress = signal(1);
  private readonly accessibility = inject(AccessibilityService);
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);
  private observer?: IntersectionObserver;
  private frame?: number;
  private started = false;
  private finished = false;

  constructor() {
    effect(() => {
      if (this.accessibility.preferences().reducedMotion) this.finish();
    });

    afterNextRender(() => {
      const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (
        this.finished ||
        motion.matches ||
        this.accessibility.preferences().reducedMotion ||
        typeof IntersectionObserver === 'undefined'
      ) {
        this.finish();
        return;
      }

      const onMotionChange = () => {
        if (motion.matches) this.finish();
      };
      motion.addEventListener('change', onMotionChange);
      this.destroyRef.onDestroy(() => motion.removeEventListener('change', onMotionChange));

      this.progress.set(0);
      this.observer = new IntersectionObserver((entries) => {
        if (this.started || this.finished || !entries.some((entry) => entry.isIntersecting)) return;
        this.started = true;
        let start: number | undefined;
        const tick = (now: number) => {
          start ??= now;
          const elapsed = Math.min((now - start) / 1200, 1);
          this.progress.set(1 - Math.pow(1 - elapsed, 3));
          if (elapsed === 1) this.finish();
          else this.frame = requestAnimationFrame(tick);
        };
        this.frame = requestAnimationFrame(tick);
      });
      this.observer.observe(this.element.nativeElement);
    });

    this.destroyRef.onDestroy(() => this.finish());
  }

  protected animatedValue(value: number, decimals = 0): string {
    return (value * this.progress()).toFixed(decimals);
  }

  private finish(): void {
    this.finished = true;
    this.progress.set(1);
    this.observer?.disconnect();
    if (this.frame !== undefined) cancelAnimationFrame(this.frame);
  }
}
