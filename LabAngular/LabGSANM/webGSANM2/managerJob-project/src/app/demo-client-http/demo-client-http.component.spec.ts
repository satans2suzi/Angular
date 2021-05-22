import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoClientHttpComponent } from './demo-client-http.component';

describe('DemoClientHttpComponent', () => {
  let component: DemoClientHttpComponent;
  let fixture: ComponentFixture<DemoClientHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoClientHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoClientHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
