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
    const isAuthenticated = this.authService.isLoggedIn(); // Use isLoggedIn() method for clarity
    if (!isAuthenticated) {
      this.router.navigate(['/login']); // Redirect to the login page if not authenticated
    }
    return isAuthenticated;
  }
}
