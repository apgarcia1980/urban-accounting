import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../../../core/i18n/language.service';
import { PageId } from '../../../core/i18n/route-catalog';

@Component({
  selector: 'app-placeholder-page',
  templateUrl: './placeholder-page.component.html',
  styleUrl: './placeholder-page.component.scss',
})
export class PlaceholderPageComponent {
  protected readonly language = inject(LanguageService);
  private readonly page = inject(ActivatedRoute).snapshot.data['page'] as PageId | undefined;
  protected readonly title = computed(() =>
    this.page ? this.language.content().navigation[this.page] : this.language.content().notFound,
  );
  protected readonly isPlaceholder = this.page !== undefined;
}
