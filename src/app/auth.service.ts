import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthResponse } from './auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenSubject = new BehaviorSubject<string | null>(null);
  public token$: Observable<string | null> = this.tokenSubject.asObservable();

  constructor() {
    const token = localStorage.getItem('token');
    this.tokenSubject.next(token);
  }

  getToken(): string | null {
    return this.tokenSubject.value;
  }

  logout(): void {
    this.tokenSubject.next(null);
    localStorage.removeItem('token');
  }

  setToken(token: string): void {
    this.tokenSubject.next(token);
    localStorage.setItem('token', token);
  }

  signIn(email: string, password: string): Observable<AuthResponse> {
    const mockResponse: AuthResponse = { token: 'fake-jwt-token' };
    return new Observable((observer) => {
      observer.next(mockResponse);
      observer.complete();
    });
  }

  signUp(email: string, password: string): Observable<AuthResponse> {
    const mockResponse: AuthResponse = { token: 'fake-jwt-token' };
    return new Observable((observer) => {
      observer.next(mockResponse);
      observer.complete();
    });
  }
}
