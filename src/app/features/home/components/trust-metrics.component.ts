import { Component, input } from '@angular/core';
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
}
