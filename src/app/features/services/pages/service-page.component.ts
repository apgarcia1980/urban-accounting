import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { LanguageService } from '../../../core/i18n/language.service';
import { publishedServiceRoutes, pageUrl } from '../../../core/i18n/route-catalog';
import { serviceBreadcrumbs } from '../../../core/i18n/service-breadcrumbs';
import { businessConfig } from '../../../core/config/business.config';
import {
  consultationRoutes,
  serviceLink,
  serviceLandingRoutes,
} from '../../../core/config/navigation.config';
import { ServicePageContent } from '../../../core/models/service-page-content';
import { ServiceContent } from '../../../core/models/home-content';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { FaqComponent } from '../../../shared/components/faq/faq.component';
import { ConsultationCtaComponent } from '../../../shared/components/consultation-cta/consultation-cta.component';
import { ServiceCardComponent } from '../../../shared/components/service-card/service-card.component';
import { ServiceHeroComponent } from '../components/service-hero.component';

@Component({
  selector: 'app-service-page',
  imports: [
    RouterLink,
    BreadcrumbComponent,
    FaqComponent,
    ConsultationCtaComponent,
    ServiceCardComponent,
    ServiceHeroComponent,
  ],
  templateUrl: './service-page.component.html',
  styleUrl: './service-page.component.scss',
})
export class ServicePageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly data = toSignal(this.route.data, { initialValue: this.route.snapshot.data });
  protected readonly content = computed(() => this.data()['servicePage'] as ServicePageContent);
  protected readonly language = inject(LanguageService);
  protected readonly breadcrumbs = computed(() =>
    serviceBreadcrumbs(this.language.current(), this.content()),
  );
  protected readonly path = computed(
    () => publishedServiceRoutes[this.content().id][this.language.current()],
  );
  protected readonly consultation = computed(() => consultationRoutes[this.language.current()]);
  protected readonly related = computed(() =>
    this.content()
      .related.ids.map((id) =>
        this.language.content().services.find((service) => service.id === id),
      )
      .filter((service): service is ServiceContent => service !== undefined),
  );
  protected readonly business = businessConfig;
  protected readonly serviceLink = serviceLink;
  protected readonly landingRoutes = serviceLandingRoutes;
  protected readonly pageUrl = pageUrl;
}
