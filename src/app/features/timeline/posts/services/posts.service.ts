import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private readonly httpclient = inject(HttpClient);
  // header = {
  //   headers: {
  //     AUTHORIZATION: `Bearer ${localStorage.getItem('token')} `,
  //   },
  // };
  getAllPosts(): Observable<any> {
    return this.httpclient.get(environment.baseUrl + 'posts', );
  }
  getSinglePost(postid: string): Observable<any> {
    return this.httpclient.get(environment.baseUrl + `posts/${postid}`, );
  }
  deletePosts(postid: string): Observable<any> {
    return this.httpclient.delete(environment.baseUrl + `posts/${postid}`, );
  }
  createPost(data: object): Observable<any> {
    return this.httpclient.post(environment.baseUrl + 'posts', data, );
  }
}
