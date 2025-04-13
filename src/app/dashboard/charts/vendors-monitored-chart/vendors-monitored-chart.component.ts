import { Component } from '@angular/core';
import {
  NgApexchartsModule,
  ApexNonAxisChartSeries,
  ApexChart,
  ApexStroke,
  ApexFill,
  ApexPlotOptions,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  fill: ApexFill;
  stroke: ApexStroke;
  plotOptions: ApexPlotOptions;
  // dataLabels: ApexDataLabels;
};
@Component({
  selector: 'app-vendors-monitored-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './vendors-monitored-chart.component.html',
  styleUrl: './vendors-monitored-chart.component.scss'
})
export class VendorsMonitoredChartComponent {

  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [80], 
      chart: {
        type: 'radialBar',
        height: 450,
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          hollow: {
            size: '65%',
            margin:-5
          },
          track: {
            background: '#F1F5F9',
            strokeWidth: '100%',
            margin: 0
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              formatter: function (val: number) {
                return `${Math.round(240)}`;
              },
              fontSize: '40px',
              fontWeight: 700,
              color: '#1E1E1E',
              offsetY: 10
              
            }
          }
        }
      },
      fill: {
        colors: ['#7E3AF2']
      },
      stroke: {
        lineCap: 'round'
      }
    };
  }
}
