// import { Component, OnInit, TemplateRef } from '@angular/core';

// interface Seat {
//   left: string;
//   top: string;
//   seat_id: string;
//   seat_width: string;
//   seat_height: string;
//   seat_name: string;
//   seat_type: string;
//   seat_type_id: string;
//   seat_color: string;
//   selection_status: boolean;
// }

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css'],
// })
// export class DashboardComponent implements OnInit {
//   top: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//   top2: any[] = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
//   mid: any[] = [25];
//   bottomleft: any[] = [26, 26, 27];
//   bottom: any[] = [28, 29, 30, 31, 32, 33, 34, 35, 36];
//   bottom2left: any[] = [37, 38, 39];
//   bottom2: any[] = [40, 41, 42, 43, 44, 45, 46, 47, 48];

//   constructor() {}

//   ngOnInit(): void {}
// }

import { Component, OnInit } from '@angular/core';

interface Seat {
  seat: number; // Seat number
  status: string; // Status of the seat
  booked: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  top: Seat[] = [];
  top2: Seat[] = [];
  mid: Seat[] = [];
  bottomleft: Seat[] = [];
  bottom: Seat[] = [];
  bottom2left: Seat[] = [];
  bottom2: Seat[] = [];
  door:string = 'Closed'

  constructor() {}

  ngOnInit(): void {
    this.initializeSeats();
  }

  initializeSeats(): void {
    this.top = Array.from({ length: 12 }, (_, i) => ({
      seat: i + 1,
      status: 'occupied',
      booked: 'yes',
    }));

    this.top2 = Array.from({ length: 12 }, (_, i) => ({
      seat: i + 13,
      status: 'empty',
      booked: 'no',
    }));

    this.mid = [{ seat: 25, status: 'empty', booked: 'yes' }];

    this.bottomleft = [
      { seat: 26, status: 'occupied', booked: 'yes' },
      { seat: 26, status: 'empty', booked: 'no' },
      { seat: 27, status: 'empty', booked: 'no' },
    ];

    this.bottom = Array.from({ length: 9 }, (_, i) => ({
      seat: i + 28,
      status: 'occupied',
      booked: 'yes',
    }));

    this.bottom2left = [
      { seat: 37, status: 'empty', booked: 'no' },
      { seat: 38, status: 'occupied', booked: 'yes' },
      { seat: 39, status: 'empty', booked: 'yes' },
    ];

    this.bottom2 = Array.from({ length: 9 }, (_, i) => ({
      seat: i + 40,
      status: 'empty',
      booked: 'yes',
    }));
  }
}
