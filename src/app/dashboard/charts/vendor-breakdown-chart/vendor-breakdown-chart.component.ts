import { Component } from '@angular/core';
import {
  NgApexchartsModule,
  ApexOptions,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexPlotOptions,
  ApexDataLabels,
  ApexStroke,
  ApexLegend,
  ApexFill
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  legend: ApexLegend;
  fill:ApexFill
};

@Component({
  selector: 'app-vendor-breakdown-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './vendor-breakdown-chart.component.html',
  styleUrl: './vendor-breakdown-chart.component.scss'
})
export class VendorBreakdownChartComponent {

  public vendorBreakdownChart: ChartOptions = {
    series: [
      {
        name: 'Vendor A',
        data: [45, 52, 38, 45, 19, 23, 43, 32, 34, 52, 41, 39]
      },
      {
        name: 'Vendor B',
        data: [35, 41, 62, 32, 34, 52, 41, 45, 38, 45, 19, 23]
      },
      {
        name: 'Vendor C',
        data: [25, 32, 27, 43, 22, 34, 45, 41, 52, 38, 43, 29]
      }
    ],
    chart: {
      type: 'bar',
      height: 250,
      stacked: true,
      toolbar: { show: false }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                   'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      title: {
        text: 'Month',
        style: {
          fontSize: '14px',
          fontWeight: 520,
          fontFamily: 'Roboto, sans-serif',
          color: '#374151'
        }
      }
    },
    yaxis: {
      title: {
        text: 'Security rating',
        style: {
          fontSize: '14px',
          fontWeight: 520,
          fontFamily: 'Roboto, sans-serif',
          color: '#374151'
        }
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '40%',
        borderRadius: 8,
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'all',
        barHeight: '200%'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: false,
      width: -3
    },
    legend: {
      show:false
    },
    fill: {
      opacity: 1,
      colors: ['#6D28D9', '#8B5CF6', '#E5E7EB']
    }
  };
  

}
