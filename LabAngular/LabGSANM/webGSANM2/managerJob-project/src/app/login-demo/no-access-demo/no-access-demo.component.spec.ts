import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAccessDemoComponent } from './no-access-demo.component';

describe('NoAccessDemoComponent', () => {
  let component: NoAccessDemoComponent;
  let fixture: ComponentFixture<NoAccessDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoAccessDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoAccessDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
