import { Component, computed, inject, input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { businessAddress } from '../../../core/config/business.config';

@Component({
  selector: 'app-location-map',
  templateUrl: './location-map.component.html',
  styleUrl: './location-map.component.scss',
})
export class LocationMapComponent {
  readonly title = input.required<string>();
  readonly directionsLabel = input.required<string>();
  private readonly sanitizer = inject(DomSanitizer);
  protected readonly address = businessAddress;
  protected readonly mapUrl = computed<SafeResourceUrl>(() =>
    this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.google.com/maps?q=${encodeURIComponent(this.address)}&output=embed`,
    ),
  );
  protected readonly directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessAddress)}`;
}
