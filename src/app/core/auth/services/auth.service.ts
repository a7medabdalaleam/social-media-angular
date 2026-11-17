import { HttpClient } from '@angular/common/http';
import { inject, Injectable, ɵNG_INJ_DEF } from '@angular/core';
import { ObjectUnsubscribedError, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly httpClient = inject(HttpClient);
  private readonly router = inject(Router);

  singUp(data: Object): Observable<any> {
    return this.httpClient.post(environment.baseUrl + 'users/signup', data);
  }
  singIn(data: Object): Observable<any> {
    return this.httpClient.post(environment.baseUrl + 'users/signin', data);
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
