import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetPlacementComponent } from './asset-placement.component';

describe('AssetPlacementComponent', () => {
  let component: AssetPlacementComponent;
  let fixture: ComponentFixture<AssetPlacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetPlacementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
