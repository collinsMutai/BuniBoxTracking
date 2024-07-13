import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements AfterViewInit {
  private map!: L.Map;
  private lat: number = -1.2858655665309664; 
  private lng: number = 36.8219; 

  ngAfterViewInit(): void {
    this.initMap();
  }
  private marker!: L.Marker;
  private initMap(): void {
    this.map = L.map('map').setView([this.lat, this.lng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap',
    }).addTo(this.map);

    this.marker = L.marker([this.lat, this.lng]).addTo(this.map);
  }

  public updateLocation(newLat: number, newLng: number): void {
    this.marker.setLatLng([newLat, newLng]);
    this.map.setView([newLat, newLng], 13);
  }
}
