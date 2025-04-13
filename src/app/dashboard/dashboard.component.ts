
import { Component } from '@angular/core';
import { VendorBreakdownChartComponent } from './charts/vendor-breakdown-chart/vendor-breakdown-chart.component';
import { VendorsMonitoredChartComponent } from './charts/vendors-monitored-chart/vendors-monitored-chart.component';
import { TableComponent } from './team-table/team-table.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [VendorBreakdownChartComponent,VendorsMonitoredChartComponent,TableComponent]
})
export class DashboardComponent {


}
