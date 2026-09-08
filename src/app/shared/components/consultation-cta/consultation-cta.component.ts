import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsultationContent } from '../../../core/models/home-content';
@Component({
  selector: 'app-consultation-cta',
  imports: [RouterLink],
  templateUrl: './consultation-cta.component.html',
  styleUrl: './consultation-cta.component.scss',
})
export class ConsultationCtaComponent {
  readonly content = input.required<ConsultationContent>();
  readonly destination = input.required<string>();
}
