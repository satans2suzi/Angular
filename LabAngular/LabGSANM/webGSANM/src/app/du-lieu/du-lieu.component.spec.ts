import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuLieuComponent } from './du-lieu.component';

describe('DuLieuComponent', () => {
  let component: DuLieuComponent;
  let fixture: ComponentFixture<DuLieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuLieuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuLieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
