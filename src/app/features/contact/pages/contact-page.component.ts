import { PhotoMastheadComponent } from '../../../shared/components/photo-masthead/photo-masthead.component';
import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../../core/i18n/language.service';
import { pageUrl } from '../../../core/i18n/route-catalog';
import { pageBreadcrumbs } from '../../../core/i18n/page-breadcrumbs';
import { businessConfig } from '../../../core/config/business.config';
import { enContact, enContactForm } from '../../../content/en/contact';
import { esContact, esContactForm } from '../../../content/es/contact';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { ContactFormComponent } from '../../../shared/components/contact-form/contact-form.component';
import { LocationMapComponent } from '../../../shared/components/location-map/location-map.component';

@Component({
  selector: 'app-contact-page',
  imports: [
    PhotoMastheadComponent,
    RouterLink,
    BreadcrumbComponent,
    ContactFormComponent,
    LocationMapComponent,
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss',
})
export class ContactPageComponent {
  protected readonly language = inject(LanguageService);
  protected readonly content = computed(() =>
    this.language.current() === 'es' ? esContact : enContact,
  );
  protected readonly formContent = computed(() =>
    this.language.current() === 'es' ? esContactForm : enContactForm,
  );
  protected readonly breadcrumbs = computed(() =>
    pageBreadcrumbs(this.language.current(), this.content()),
  );
  protected readonly services = computed(() => this.language.content().services);
  protected readonly business = businessConfig;
  protected readonly pageUrl = pageUrl;
}
