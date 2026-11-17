import { Component } from '@angular/core';
import { SideleftbarComponent } from './sideleftbar/sideleftbar.component';
import { PostsComponent } from './posts/posts.component';
import { SiderightbarComponent } from './siderightbar/siderightbar.component';

@Component({
  selector: 'app-timeline',
  imports: [SideleftbarComponent, PostsComponent, SiderightbarComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
})
export class TimelineComponent {}
