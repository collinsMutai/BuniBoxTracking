import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements AfterViewInit, OnDestroy {
  private map!: L.Map;
  private lat: number = -1.2858655665309664;
  private lng: number = 36.8219;
  private marker!: L.Marker;
  private intervalId: any;

  ngAfterViewInit(): void {
    this.initMap();
    this.startMovingBus();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  private initMap(): void {
    this.map = L.map('map').setView([this.lat, this.lng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap',
    }).addTo(this.map);

    this.marker = L.marker([this.lat, this.lng]).addTo(this.map);
  }

  private startMovingBus(): void {
    this.intervalId = setInterval(() => {
      const randomLat = this.lat + (Math.random() - 0.5) * 0.01;
      const randomLng = this.lng + (Math.random() - 0.5) * 0.01;
      this.updateLocation(randomLat, randomLng);
    }, 1000);
  }

  public updateLocation(newLat: number, newLng: number): void {
    this.marker.setLatLng([newLat, newLng]);
    this.map.setView([newLat, newLng], 13);

    this.lat = newLat;
    this.lng = newLng;
  }

  onSearch() {}
}
