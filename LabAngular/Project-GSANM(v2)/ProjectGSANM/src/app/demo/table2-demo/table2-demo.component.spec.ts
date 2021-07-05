import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table2DemoComponent } from './table2-demo.component';

describe('Table2DemoComponent', () => {
  let component: Table2DemoComponent;
  let fixture: ComponentFixture<Table2DemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Table2DemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Table2DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
