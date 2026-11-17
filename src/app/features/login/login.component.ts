import { JsonPipe } from '@angular/common';
import { AuthService } from './../../core/auth/services/auth.service';
import { ProfileComponent } from './../profile/profile.component';
import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { BtnTranslateComponent } from '../../shared/ui/btn-translate/btn-translate.component';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule, TranslatePipe, BtnTranslateComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly router = inject(Router);
  isloading = signal(false);
  msgerro = signal('');
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required]],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
      ],
    ],
  });
  // loginForm = new FormGroup({
  //   email: new FormControl('', [Validators.required]),
  //   password: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
  //   ]),
  // });

  sendLogin() {
    if (this.loginForm.valid) {
      this.isloading.set(true);
      this.authService.singIn(this.loginForm.value).subscribe({
        next: (res) => {
          if (res.success) {
            localStorage.setItem('user', JSON.stringify(res.data.user));
            localStorage.setItem('token', res.data.token);
            this.router.navigate(['/timeline']);
          }
        },
        error: (err) => {
          this.isloading.set(false);
          this.msgerro.set(err.error.message);
        },
        complete: () => {
          this.isloading.set(false);
        },
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
