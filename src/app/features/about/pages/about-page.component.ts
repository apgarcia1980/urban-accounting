import { PhotoMastheadComponent } from '../../../shared/components/photo-masthead/photo-masthead.component';
import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../../core/i18n/language.service';
import { pageUrl } from '../../../core/i18n/route-catalog';
import { pageBreadcrumbs } from '../../../core/i18n/page-breadcrumbs';
import { businessConfig } from '../../../core/config/business.config';
import { serviceLink } from '../../../core/config/navigation.config';
import { enAbout } from '../../../content/en/about';
import { esAbout } from '../../../content/es/about';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { ServiceCardComponent } from '../../../shared/components/service-card/service-card.component';
import { ConsultationCtaComponent } from '../../../shared/components/consultation-cta/consultation-cta.component';

@Component({
  selector: 'app-about-page',
  imports: [
    PhotoMastheadComponent,
    RouterLink,
    BreadcrumbComponent,
    ServiceCardComponent,
    ConsultationCtaComponent,
  ],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
})
export class AboutPageComponent {
  protected readonly language = inject(LanguageService);
  protected readonly content = computed(() =>
    this.language.current() === 'es' ? esAbout : enAbout,
  );
  protected readonly breadcrumbs = computed(() =>
    pageBreadcrumbs(this.language.current(), this.content()),
  );
  protected readonly services = computed(() => this.language.content().services);
  protected readonly business = businessConfig;
  protected readonly pageUrl = pageUrl;
  protected readonly serviceLink = serviceLink;
}
