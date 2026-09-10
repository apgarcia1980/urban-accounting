import { Component, input } from '@angular/core';

@Component({
  selector: 'app-photo-masthead',
  templateUrl: './photo-masthead.component.html',
  styleUrl: './photo-masthead.component.scss',
})
export class PhotoMastheadComponent {
  readonly image = input.required<string>();
}
