import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendReportDemoComponent } from './send-report-demo.component';

describe('SendReportDemoComponent', () => {
  let component: SendReportDemoComponent;
  let fixture: ComponentFixture<SendReportDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendReportDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendReportDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
