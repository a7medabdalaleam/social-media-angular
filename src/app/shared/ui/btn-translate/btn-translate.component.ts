import { TranslateService } from '@ngx-translate/core';
import { Component, inject } from '@angular/core';
import { TranslateServiceqwe } from '../../../core/services/translate.service';

@Component({
  selector: 'app-btn-translate',
  imports: [],
  templateUrl: './btn-translate.component.html',
  styleUrl: './btn-translate.component.css',
})
export class BtnTranslateComponent {
  readonly translateService = inject(TranslateService);
  private readonly translateServiceqwe = inject(TranslateServiceqwe);
  changeLang(lang: string) {
    this.translateService.use(lang);
    localStorage.setItem('lang', lang);
    this.translateServiceqwe.onchangeLang();
  }
}
