import { Component, OnInit } from '@angular/core';

interface Seat {
  seat: number;
  status: string;
  booked: string;
}

@Component({
  selector: 'app-occupancy',
  templateUrl: './occupancy.component.html',
  styleUrls: ['./occupancy.component.css'],
})
export class OccupancyComponent implements OnInit {
  top: Seat[] = [];
  top2: Seat[] = [];
  mid: Seat[] = [];
  bottomleft: Seat[] = [];
  bottom: Seat[] = [];
  bottom2left: Seat[] = [];
  bottom2: Seat[] = [];
  door: string = 'Closed';

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
      { seat: 27, status: 'empty', booked: 'no' },
      { seat: 28, status: 'occupied', booked: 'yes' },
    ];

    this.bottom = Array.from({ length: 9 }, (_, i) => ({
      seat: i + 29,
      status: 'empty',
      booked: 'no',
    }));

    this.bottom2left = [
      { seat: 37, status: 'empty', booked: 'no' },
      { seat: 38, status: 'occupied', booked: 'yes' },
      { seat: 39, status: 'empty', booked: 'yes' },
    ];

    this.bottom2 = Array.from({ length: 6 }, (_, i) => ({
      seat: i + 40,
      status: 'empty',
      booked: 'no',
    }));
  }

  getSeatStyle(seat: Seat) {
    const isMobile = window.innerWidth <= 426;

    if (isMobile) {
      return {
        display: 'block',
        margin: '10px 0',

        'border-color': seat.status === 'empty' ? 'green' : 'red',
      };
    } else {
      return {
        display: 'inline-block',
        margin: '0 10px',
        'border-color': seat.status === 'empty' ? 'green' : 'red',
      };
    }
  }
}
