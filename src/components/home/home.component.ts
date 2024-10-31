import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  currentSlide: number = 0;
  slides?: NodeListOf<HTMLElement>;
  slideInterval: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.slides = document.querySelectorAll<HTMLElement>('.slide');
    this.showSlide(this.currentSlide);

    this.slideInterval = setInterval(() => {
      this.changeSlide(1);
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  showSlide(index: number) {
    this.currentSlide = (index + this.slides!.length) % this.slides!.length;
    this.slides!.forEach((slide, i) => {
      slide.style.display = i === this.currentSlide ? 'block' : 'none';
    });
  }

  changeSlide(direction: number) {
    this.showSlide(this.currentSlide + direction);
  }

  navigateToAbout() {
    this.router.navigate(['/about-us']);
  }

  navigateToContact() {
    this.router.navigate(['/contact-us']);
  }
}
