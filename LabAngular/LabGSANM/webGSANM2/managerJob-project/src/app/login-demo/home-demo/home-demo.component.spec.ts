import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDemoComponent } from './home-demo.component';

describe('HomeDemoComponent', () => {
  let component: HomeDemoComponent;
  let fixture: ComponentFixture<HomeDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
