import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import LoginDTO from '../../shared/DTOs/LoginDTO';
import { AuthService } from '../../shared/services/auth.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    CardModule,
    InputTextModule,
    ButtonModule,
    FloatLabelModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public loginForm: FormGroup;
  constructor(private _authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('Admin', [Validators.required]),
      password: new FormControl('ab123', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  public login() {
    const loginDto: LoginDTO = {
      username: this.username.value,
      password: this.password.value,
    };
    this._authService.login(loginDto).subscribe({
      next: (res) => {
        if (res.success != false) {
          localStorage.setItem('Token', res.data);
          this.router.navigateByUrl('products');
        }
      },
      error: (err: HttpErrorResponse) => {
        Swal.fire({
          title: err.error.message,
          icon: 'error',
        });
      },
    });
  }

  public get username(): AbstractControl<any, any> {
    return this.loginForm.controls['username'];
  }

  public get password(): AbstractControl<any, any> {
    return this.loginForm.controls['password'];
  }

  get IsFormValid(): boolean {
    return this.loginForm.valid;
  }
}
