import { Component, input } from '@angular/core';
import { FaqItem } from '../../../core/models/home-content';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  readonly items = input.required<readonly FaqItem[]>();
}
