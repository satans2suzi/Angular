import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAPIComponent } from './component-api.component';

describe('ComponentAPIComponent', () => {
  let component: ComponentAPIComponent;
  let fixture: ComponentFixture<ComponentAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentAPIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
