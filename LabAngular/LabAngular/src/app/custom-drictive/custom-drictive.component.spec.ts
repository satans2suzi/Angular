import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDrictiveComponent } from './custom-drictive.component';

describe('CustomDrictiveComponent', () => {
  let component: CustomDrictiveComponent;
  let fixture: ComponentFixture<CustomDrictiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDrictiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDrictiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
