// top-nav.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Subscribe to token changes
    this.authService.token$.subscribe((token) => {
      this.isLoggedIn = !!token; // Update login status
    });
  }

  logout(): void {
    this.authService.logout(); // Call logout method
    this.router.navigate(['/']); // Redirect to login page after logout
  }
}
