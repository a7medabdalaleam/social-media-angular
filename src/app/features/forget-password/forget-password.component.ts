import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css',
})
export class ForgetPasswordComponent {
  forgetForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  isloading = signal(false);
  msgerro = signal('');
  successmsg = signal('');

  sendForget() {
    if (this.forgetForm.invalid) {
      this.forgetForm.markAllAsTouched();
      return;
    }
    this.isloading.set(true);
    this.msgerro.set('');
    this.successmsg.set('');

    // call your service here, then:
    // next: this.successmsg.set('Check your inbox for reset instructions.')
    // error: this.msgerro.set(err.error.message)
    // finalize: this.isloading.set(false)
  }
}
