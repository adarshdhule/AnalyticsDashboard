import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorsMonitoredChartComponent } from './vendors-monitored-chart.component';

describe('VendorsMonitoredChartComponent', () => {
  let component: VendorsMonitoredChartComponent;
  let fixture: ComponentFixture<VendorsMonitoredChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendorsMonitoredChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorsMonitoredChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
