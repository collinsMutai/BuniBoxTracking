// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthResponse } from './auth.model'; // Adjust the path as necessary

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenSubject = new BehaviorSubject<string | null>(null);
  public token$: Observable<string | null> = this.tokenSubject.asObservable();

  constructor() {
    // Optionally load the token from local storage
    const token = localStorage.getItem('token');
    this.tokenSubject.next(token);
  }

  getToken(): string | null {
    return this.tokenSubject.value;
  }

  logout(): void {
    this.tokenSubject.next(null);
    localStorage.removeItem('token'); // Clear localStorage
  }

  setToken(token: string): void {
    this.tokenSubject.next(token);
    localStorage.setItem('token', token); // Store token in localStorage
  }

  signIn(email: string, password: string): Observable<AuthResponse> {
    // Replace this with your actual sign-in logic (API call)
    const mockResponse: AuthResponse = { token: 'fake-jwt-token' }; // Mock response
    return new Observable((observer) => {
      observer.next(mockResponse);
      observer.complete();
    });
  }

  signUp(email: string, password: string): Observable<AuthResponse> {
    // Replace this with your actual sign-up logic (API call)
    const mockResponse: AuthResponse = { token: 'fake-jwt-token' }; // Mock response
    return new Observable((observer) => {
      observer.next(mockResponse);
      observer.complete();
    });
  }
}
