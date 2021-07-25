import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDocumentaryComponent } from './details-documentary.component';

describe('DetailsDocumentaryComponent', () => {
  let component: DetailsDocumentaryComponent;
  let fixture: ComponentFixture<DetailsDocumentaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsDocumentaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDocumentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
