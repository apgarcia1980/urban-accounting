import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceContent } from '../../../core/models/home-content';

@Component({
  selector: 'app-service-card',
  imports: [RouterLink],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss',
  host: { '[class.featured]': 'featured()' },
})
export class ServiceCardComponent {
  readonly featured = input(false);
  readonly fragment = input<string>();
  readonly service = input.required<ServiceContent>();
  readonly number = input.required<number>();
  readonly action = input.required<string>();
  readonly destination = input.required<string>();
}
