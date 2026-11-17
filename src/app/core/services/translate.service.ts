import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateServiceqwe {
  onchangeLang() {
    if (localStorage.getItem('lang') === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'en');
    }
  }
}
