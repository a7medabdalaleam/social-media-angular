import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { BtnTranslateComponent } from '../../shared/ui/btn-translate/btn-translate.component';

@Component({
  selector: 'app-auth-layout',
  imports: [
    RouterOutlet,
    RouterLinkWithHref,
    RouterLinkActive,
    TranslatePipe,
    BtnTranslateComponent,
  ],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css',
})
export class AuthLayoutComponent {}
