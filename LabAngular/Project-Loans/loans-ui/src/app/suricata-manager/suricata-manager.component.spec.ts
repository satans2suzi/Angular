import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuricataManagerComponent } from './suricata-manager.component';

describe('SuricataManagerComponent', () => {
  let component: SuricataManagerComponent;
  let fixture: ComponentFixture<SuricataManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuricataManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuricataManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
