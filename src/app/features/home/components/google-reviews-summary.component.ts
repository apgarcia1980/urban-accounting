import { Component, computed, input } from '@angular/core';
import { trustConfig } from '../../../core/config/trust.config';
import { HomeTrustContent } from '../../../core/models/home-trust-content';

@Component({
  selector: 'app-google-reviews-summary',
  templateUrl: './google-reviews-summary.component.html',
  styleUrl: './google-reviews-summary.component.scss',
})
export class GoogleReviewsSummaryComponent {
  readonly content = input.required<HomeTrustContent>();
  protected readonly data = trustConfig.google;
  protected readonly stars = [1, 2, 3, 4, 5];
  protected readonly ratingLabel = computed(() =>
    this.data.rating === null
      ? this.content().pending
      : this.content().ratingLabel.replace('{rating}', this.data.rating.toFixed(1)),
  );
}
