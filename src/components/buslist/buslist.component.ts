import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buslist',
  templateUrl: './buslist.component.html',
  styleUrls: ['./buslist.component.css'],
})
export class BuslistComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  viewBusHandler() {
    this.router.navigate(['/dashboard']);
  }
}
