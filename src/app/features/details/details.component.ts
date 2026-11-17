import { PostsService } from './../timeline/posts/services/posts.service';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Postsinterface } from '../timeline/posts/models/postsinterface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  private readonly activatedRoute=inject(ActivatedRoute)
  private readonly postsService=inject(PostsService)
 private readonly location = inject(Location);
  post=signal<Postsinterface>({}as Postsinterface )
  userId =signal<string>('')
  isloading = signal(true);
  errormsg = signal('');
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((par)=>{
      console.log(par.get('id'));
      this.userId.set(par.get('id')!)
      this.getSingalPost(par.get('id')!)
        if(!par.get('id')){
          this.isloading.set(false);
         this.errormsg.set('Post not found.');
        }
    })
  }
  getSingalPost(id:string){
    this.postsService.getSinglePost(id).subscribe({
      next:(res)=>{
        console.log(res.data.post);
        this.post.set(res.data.post)
         this.isloading.set(false);
      },
      error:(err)=>{
        console.log(err);
        this.isloading.set(false);
        this.errormsg.set(err.error?.message ?? 'Something went wrong.');
        
      }
    })
  }
  goBack(): void {
    this.location.back();
  }
}
