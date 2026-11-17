import { Component } from '@angular/core';

@Component({
  selector: 'app-siderightbar',
  imports: [],
  templateUrl: './siderightbar.component.html',
  styleUrl: './siderightbar.component.css',
})
export class SiderightbarComponent {
  Name: string = JSON.parse(localStorage.getItem('user') ?? '{}').name ?? '';
  userName: string = JSON.parse(localStorage.getItem('user') ?? '{}').username ?? '';
}
