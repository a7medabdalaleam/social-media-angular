import { Component, inject, input, OnInit, signal } from '@angular/core';
import { CommentsssService } from '../../services/commentsss.service';
import { Commentss } from '../../models/commentss';

@Component({
  selector: 'app-comments',
  imports: [],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css',
})
export class CommentsComponent implements OnInit {
  private readonly commentsssService = inject(CommentsssService);
  postid = input.required<string>();
  allComments = signal<Commentss[]>([]);
  ngOnInit(): void {
    this.getComments();
  }
  getComments() {
    this.commentsssService.getAllcomments(this.postid()).subscribe({
      next: (res) => {
        console.log(res);
        this.allComments.set(res.data.comments);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
