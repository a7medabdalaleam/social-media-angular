import { AuthService } from './../../core/auth/services/auth.service';
import { Component, inject, Inject, signal } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { BtnTranslateComponent } from '../../shared/ui/btn-translate/btn-translate.component';

@Component({
  selector: 'app-register',
  imports: [RouterLink, RouterOutlet, ReactiveFormsModule, TranslatePipe, BtnTranslateComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  private readonly AuthService = inject(AuthService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly router = inject(Router);
  errormsg = signal('');
  isloading = signal(false);
  registerFrom = this.formBuilder.group(
    {
      name: ['', [Validators.required, Validators.minLength(3)]],
      username: [''],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
        ],
      ],
      rePassword: ['', Validators.required],
    },
    { validators: [this.confirmPassword] },
  );
  // registerFrom = new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   username: new FormControl(''),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   dateOfBirth: new FormControl('', Validators.required),
  //   gender: new FormControl('', Validators.required),
  //   password: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
  //   ]),
  //   rePassword: new FormControl('', Validators.required),
  // });

  sendResiter() {
    if (this.registerFrom.valid) {
      this.isloading.set(true);
      this.AuthService.singUp(this.registerFrom.value).subscribe({
        next: (res) => {
          if (res.success) {
            console.log(res);
            this.router.navigate(['/login']);
          }
        },
        error: (err) => {
          this.errormsg.set(err.error.message);
          this.isloading.set(false);
        },
        complete: () => {
          this.isloading.set(false);
        },
      });
    } else {
      this.registerFrom.markAllAsTouched();
    }
  }

  confirmPassword(group: AbstractControl) {
    let pas = group.get('password')?.value;
    let repas = group.get('rePassword')?.value;
    if (pas !== repas) {
      return { misMatch: true };
    } else {
      return null;
    }
  }
}
