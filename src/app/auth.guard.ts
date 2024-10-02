// auth.guard.ts
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from './auth.service'; // Adjust the import path as necessary

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isAuthenticated = !!this.authService.getToken(); // Check if the user is authenticated
    if (!isAuthenticated) {
      this.router.navigate(['/']); // Redirect to the login page if not authenticated
    }
    return isAuthenticated;
  }
}
