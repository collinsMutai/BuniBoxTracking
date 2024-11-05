import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  isCollapsed: boolean = false;
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.token$.subscribe((token) => {
      this.isLoggedIn = !!token;
    });
  }

  toggleHandler() {
    this.isCollapsed = !this.isCollapsed;
  }

  loginHandler() {
    console.log('Login handler clicked, isLoggedIn:', this.isLoggedIn);
    if (this.isLoggedIn) {
      this.authService.logout();
      this.router.navigate(['/home']);
      this.isLoggedIn = false; // Update the local state
    } else {
      this.router.navigate(['/login']);
    }
  }
}
