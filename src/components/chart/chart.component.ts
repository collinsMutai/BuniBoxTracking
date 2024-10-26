import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  barChart: Chart | undefined;
  doughnutChart: Chart | undefined;

  constructor() {}

  ngOnInit(): void {
    this.createBarChart();
    this.createDoughnutChart();
  }

  createBarChart() {
    this.barChart = new Chart('BarChart', {
      type: 'bar',

      data: {
        labels: [
          '2022-05-10',
          '2022-05-11',
          '2022-05-12',
          '2022-05-13',
          '2022-05-14',
          '2022-05-15',
          '2022-05-16',
          '2022-05-17',
        ],
        datasets: [
          {
            label: 'Sales',
            data: [467, 576, 572, 79, 92, 574, 573, 576],
            backgroundColor: '#CCCCCC',
          },
          {
            label: 'Profit',
            data: [542, 542, 536, 327, 17, 0, 538, 541],
            backgroundColor: '#FF8C32',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }

  createDoughnutChart() {
    this.doughnutChart = new Chart('DoughnutChart', {
      type: 'doughnut', 

      data: {
        labels: ['Active Buses', 'Total Buses', 'Distance Covered (km)'],
        datasets: [
          {
            label: 'Bus Statistics',
            data: [500, 690, 1200], 
            backgroundColor: ['#333333', '#CCCCCC', '#FF8C32'],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      },
    });
  }
}
