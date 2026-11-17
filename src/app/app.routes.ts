import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { ForgetPasswordComponent } from './features/forget-password/forget-password.component';
import { ProfileComponent } from './features/profile/profile.component';
import { TimelineComponent } from './features/timeline/timeline.component';
import { ChangePasswordComponent } from './features/change-password/change-password.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { authguardGuard } from './core/auth/guard/authguard-guard';
import { gestgaurdGuard } from './core/auth/guard/gestgaurd-guard';
import { NotificationComponent } from './features/notification/notification.component';
import { DetailsComponent } from './features/details/details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: AuthLayoutComponent,
    canActivate: [gestgaurdGuard],
    children: [
      { path: 'login', component: LoginComponent, title: 'Login Account | Route Posts' },
      { path: 'register', component: RegisterComponent, title: 'Create Account | Route Posts' },
      { path: 'forget-password', component: ForgetPasswordComponent },
    ],
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authguardGuard],
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'timeline', component: TimelineComponent },
      { path: 'notification', component: NotificationComponent },
      { path: 'change-password', component: ChangePasswordComponent },
      { path: 'details/:id', component: DetailsComponent },
    ],
  },
  // { path: 'notfound', component: NotFoundComponent },
  // { path: '**', redirectTo: 'notfound' },
];
