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
   
    this.authService.token$.subscribe((token) => {
      this.isLoggedIn = !!token; 
    });
  }

  loginHandler() {
    console.log('Login handler clicked, isLoggedIn:', this.isLoggedIn);
    if (this.isLoggedIn) {
      this.authService.logout();
      this.router.navigate(['/home']);
      this.isLoggedIn = false; 
    } else {
      this.router.navigate(['/login']);
    }
  }

 
}
