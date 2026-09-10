import { TrustMetricsComponent } from '../components/trust-metrics.component';
import { GoogleReviewsSummaryComponent } from '../components/google-reviews-summary.component';
import { enHomeTrust } from '../../../content/en/home-trust';
import { esHomeTrust } from '../../../content/es/home-trust';
import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../../core/i18n/language.service';
import { pageUrl } from '../../../core/i18n/route-catalog';
import { consultationRoutes, serviceDestination } from '../../../core/config/navigation.config';
import { businessConfig } from '../../../core/config/business.config';
import { enHome } from '../../../content/en/home';
import { esHome } from '../../../content/es/home';
import { ServiceCardComponent } from '../../../shared/components/service-card/service-card.component';
import { FaqComponent } from '../../../shared/components/faq/faq.component';
import { ConsultationCtaComponent } from '../../../shared/components/consultation-cta/consultation-cta.component';
import { HomeHeroComponent } from '../components/home-hero.component';

@Component({
  selector: 'app-home-page',
  imports: [
    RouterLink,
    ServiceCardComponent,
    FaqComponent,
    ConsultationCtaComponent,
    HomeHeroComponent,
    TrustMetricsComponent,
    GoogleReviewsSummaryComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  protected readonly language = inject(LanguageService);
  protected readonly content = computed(() => (this.language.current() === 'es' ? esHome : enHome));
  protected readonly trustContent = computed(() =>
    this.language.current() === 'es' ? esHomeTrust : enHomeTrust,
  );
  protected readonly consultation = computed(() => consultationRoutes[this.language.current()]);
  protected readonly business = businessConfig;
  protected readonly serviceDestination = serviceDestination;
  protected readonly pageUrl = pageUrl;
}
