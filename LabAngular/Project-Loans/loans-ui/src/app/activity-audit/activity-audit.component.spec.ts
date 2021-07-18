import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityAuditComponent } from './activity-audit.component';

describe('ActivityAuditComponent', () => {
  let component: ActivityAuditComponent;
  let fixture: ComponentFixture<ActivityAuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityAuditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
