import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeachReportComponent } from './seach-report.component';

describe('SeachReportComponent', () => {
  let component: SeachReportComponent;
  let fixture: ComponentFixture<SeachReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeachReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeachReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
