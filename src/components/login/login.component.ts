// login.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../app/auth.service';
import { AuthResponse } from '../../app/auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isSignup: boolean = false;
  authForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: [''],
    });
  }

  ngOnInit(): void {}

  toggleForm() {
    this.isSignup = !this.isSignup;
    this.authForm.reset();
  }

  onSubmit() {
    if (this.authForm.valid) {
      const { email, password } = this.authForm.value;

      if (this.isSignup) {
        this.authService.signUp(email, password).subscribe({
          next: (response: AuthResponse | null) => {
            if (response) {
              console.log('Sign-up successful:', response);
              this.authService.setToken(response.token);
              this.router.navigate(['/']);
            } else {
              console.error('Sign-up failed: No response');
            }
          },
          error: (err: any) => console.error('Sign-up error:', err),
        });
      } else {
        this.authService.signIn(email, password).subscribe({
          next: (response: AuthResponse | null) => {
            if (response) {
              console.log('Login successful:', response);
              this.authService.setToken(response.token);
              this.router.navigate(['/buslist']);
            } else {
              console.error('Login failed: No response');
            }
          },
          error: (err: any) => console.error('Login error:', err),
        });
      }
    } else {
      console.log('Form is invalid');
    }
  }
}
