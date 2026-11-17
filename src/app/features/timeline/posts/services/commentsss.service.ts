import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentsssService {
  // header = {
  //   headers: {
  //     AUTHORIZATION: `Bearer ${localStorage.getItem('token')} `,
  //   },
  // };
  private readonly httpClient = inject(HttpClient);
  getAllcomments(postId: string, limits: number = 10): Observable<any> {
    return this.httpClient.get(
      environment.baseUrl + `posts/${postId}/comments?page=1&limit=${limits}`,
    );
  }
}
