import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServicePageContent } from '../../../core/models/service-page-content';

@Component({
  selector: 'app-service-hero',
  imports: [RouterLink],
  templateUrl: './service-hero.component.html',
  styleUrl: './service-hero.component.scss',
})
export class ServiceHeroComponent {
  readonly content = input.required<ServicePageContent['hero']>();
  readonly consultation = input.required<string>();
  readonly path = input.required<string>();
}
