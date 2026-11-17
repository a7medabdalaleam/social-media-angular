import { initFlowbite } from 'flowbite';
import { Postsinterface } from './models/postsinterface';
import { PostsService } from './services/posts.service';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { CommentsComponent } from './components/comments/comments.component';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { TirmPipe } from '../../../shared/pipes/tirm-pipe';
import { SearchPipe } from '../../../shared/pipes/search-pipe';
import { Highlightcss } from '../../../shared/directives/highlightcss';

@Component({
  selector: 'app-posts',
  imports: [
    ReactiveFormsModule,
    CommentsComponent,
    RouterLink,
    DatePipe,
    TirmPipe,
    SearchPipe,
    FormsModule,
    Highlightcss,
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit {
  text = signal('');
  Name: string = JSON.parse(localStorage.getItem('user') ?? '{}').name ?? '';
  userName: string = JSON.parse(localStorage.getItem('user') ?? '{}').username ?? '';
  UserPhoto = signal(JSON.parse(localStorage.getItem('user')!).photo);
  imgSrc = signal('');
  imageFile = signal<File | null>(null);
  private readonly PostsService = inject(PostsService);
  posts = signal<Postsinterface[]>([]);
  userId = signal(JSON.parse(localStorage.getItem('user')!)._id);
  content = new FormControl('');
  privacy = new FormControl('public');

  getPosts() {
    this.PostsService.getAllPosts().subscribe({
      next: (res) => {
        if (res.success) {
          this.posts.set(res.data.posts);
          setTimeout(() => initFlowbite(), 0);
          console.log(this.posts());
        }
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {},
    });
  }
  ngOnInit(): void {
    this.getPosts();
  }

  changePhoto(e: Event) {
    let input = e.target as HTMLInputElement;
    if (input.files) console.log(input.files[0]);
    this.imgSrc.set(URL.createObjectURL(input.files![0]));
    this.imageFile.set(input.files![0]);
  }
  removeImg() {
    this.imgSrc.set('');
  }
  submitformControl(e: SubmitEvent, myELemnt: HTMLFormElement) {
    e.preventDefault();
    let formData = new FormData();
    if (this.content.value) {
      formData.append('body', this.content.value);
    }
    if (this.privacy.value) {
      formData.append('privacy', this.privacy.value);
    }
    if (this.imageFile()) {
      formData.append('image', this.imageFile()!);
    }
    this.PostsService.createPost(formData).subscribe({
      next: (res) => {
        this.getPosts();
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        myELemnt.reset();
        this.imgSrc.set('');
      },
    });
  }
  deleteItem(id: string) {
    this.PostsService.deletePosts(id).subscribe({
      next: (res) => {
        console.log(res);
        if (res.success) {
          this.getPosts();
        }
      },
    });
  }
}
