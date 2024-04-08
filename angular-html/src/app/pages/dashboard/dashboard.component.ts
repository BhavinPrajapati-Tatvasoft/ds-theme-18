import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CountUpModule } from 'ngx-countup';
import { TableComponent } from '../../components/table/table.component';
import { Chart } from 'chart.js/auto';
import { RoundProgressComponent } from 'angular-svg-round-progressbar';
import Aos from 'aos';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatButtonModule,
    CountUpModule,
    TableComponent,
    RoundProgressComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  countUpOption = {
    useIndianSeparators: true,
    prefix: '$',
  };

  constructor() {}
  ngOnInit(): void {
    new Chart('profitEarnedChart', {
      type: 'bar',
      data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [
          {
            data: [12, 5, 7, 5, 17, 10, 10, 30],
            backgroundColor: '#9E333D',
            borderWidth: 1,
            borderColor: 'transparent',
            barThickness: 7,
          },
          {
            data: [10, 3, 4, 2, 12, 6, 7],
            backgroundColor: '#E67B86',
            borderWidth: 1,
            borderColor: 'transparent',
            barThickness: 7,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            ticks: {
              color: '#606060',
              font: {
                size: 12,
                lineHeight: '14px',
              },
              padding: 3,
            },
            grid: {
              drawTicks: false,
              display: false,
            },
            border: {
              color: '#BEBEBE',
            },
          },
          y: {
            ticks: {
              color: '#606060',
              font: {
                size: 12,
                lineHeight: '14px',
              },
              padding: 3,
              stepSize: 10,
            },
            grid: {
              drawTicks: false,
              display: false,
            },
            border: {
              display: false,
            },
          },
        },
        animation: {
          duration: 2000,
          easing: 'easeOutSine',
        },
      },
    });

    new Chart('resolvedComplaintChart', {
      type: 'line',
      data: {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [
          {
            data: [0, 27, 20, 34, 0],
            fill: true,
            borderColor: '#9E333D',
            borderWidth: 1,
            pointBorderWidth: 0,
            pointStyle: 'line',
            tension: 0.4,
            label: 'Unlimited Pizza',
            backgroundColor: '#FF55551B',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            ticks: {
              display: false,
            },
            grid: {
              display: false,
            },
            border: {
              display: false,
            },
          },
          y: {
            ticks: {
              display: false,
            },
            grid: {
              display: false,
            },
            border: {
              display: false,
            },
          },
        },
        animation: {
          duration: 2000,
          easing: 'easeOutSine',
        },
      },
    });
  }
}
