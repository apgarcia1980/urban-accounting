import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeContent, ServiceContent } from '../../../core/models/home-content';

@Component({
  selector: 'app-home-hero',
  imports: [RouterLink],
  templateUrl: './home-hero.component.html',
  styleUrl: './home-hero.component.scss',
})
export class HomeHeroComponent {
  readonly content = input.required<HomeContent['hero']>();
  readonly services = input.required<readonly ServiceContent[]>();
  readonly consultation = input.required<string>();
  readonly homeUrl = input.required<string>();
}
