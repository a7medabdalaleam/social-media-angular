import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerComponent } from 'ngx-spinner';
import { TranslateServiceqwe } from './core/services/translate.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxSpinnerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('social-App');
  private readonly translateService = inject(TranslateServiceqwe);
  constructor() {
    this.translateService.onchangeLang();
  }
}
