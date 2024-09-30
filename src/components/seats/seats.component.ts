import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {
topOne: any [] = [2, 6, 10, 14, 18, 22, 24, 28, 32, 36, 40, 44, 47]
topTwo: any [] = [1, 5, 9, 13, 17, 21, 23, 27, 31, 35, 39, 43, 48]
mid:any [] = [49]
bottomOne:any [] = [3, 7, 11, 15, 19, 25, 29, 33, 37, 41, 46]
bottomTwo: any [] = []

  constructor() { }

  ngOnInit(): void {
  }

}
