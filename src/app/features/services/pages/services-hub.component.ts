import { PhotoMastheadComponent } from '../../../shared/components/photo-masthead/photo-masthead.component';
import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../../core/i18n/language.service';
import { ServiceCardComponent } from '../../../shared/components/service-card/service-card.component';
import { serviceLink } from '../../../core/config/navigation.config';

@Component({
  selector: 'app-services-hub',
  imports: [PhotoMastheadComponent, ServiceCardComponent],
  templateUrl: './services-hub.component.html',
  styleUrl: './services-hub.component.scss',
})
export class ServicesHubComponent {
  protected readonly language = inject(LanguageService);
  protected readonly services = computed(() => this.language.content().services);
  protected readonly serviceLink = serviceLink;
}
