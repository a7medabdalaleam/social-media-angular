import { Component, HostListener, OnInit, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { AuthService } from '../../core/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  userName: string = JSON.parse(localStorage.getItem('user') ?? '{}').username ?? '';
  UserPhoto = signal(JSON.parse(localStorage.getItem('user')!).photo);
  Name = signal(JSON.parse(localStorage.getItem('user')!).name);
  ispadding = signal(false);

  private readonly authService = inject(AuthService);
  ngOnInit(): void {
    initFlowbite();
  }
  logout() {
    this.authService.logout();
  }
}
