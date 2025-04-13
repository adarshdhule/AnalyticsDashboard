import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorBreakdownChartComponent } from './vendor-breakdown-chart.component';

describe('VendorBreakdownChartComponent', () => {
  let component: VendorBreakdownChartComponent;
  let fixture: ComponentFixture<VendorBreakdownChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendorBreakdownChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorBreakdownChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
