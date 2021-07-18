import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustormersComponent } from './custormers.component';

describe('CustormersComponent', () => {
  let component: CustormersComponent;
  let fixture: ComponentFixture<CustormersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustormersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustormersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
