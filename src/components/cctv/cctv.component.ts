import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-cctv',
  templateUrl: './cctv.component.html',
  styleUrls: ['./cctv.component.css'],
})
export class CctvComponent implements OnInit {
  currentVideo: SafeResourceUrl; // Use SafeResourceUrl for safe binding
  currentCameraName: string; // New property for the current camera name

  constructor(private sanitizer: DomSanitizer) {
    this.currentVideo = this.sanitizeUrl(
      'https://www.youtube.com/embed/HkdDJyD65mg'
    ); // Default to main camera video
    this.currentCameraName = 'Main Camera'; // Default camera name
  }

  ngOnInit(): void {}

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  selectCamera(videoId: string, cameraName: string): void {
    this.currentVideo = this.sanitizeUrl(
      `https://www.youtube.com/embed/${videoId}`
    );
    this.currentCameraName = cameraName; // Update current camera name
  }
}
