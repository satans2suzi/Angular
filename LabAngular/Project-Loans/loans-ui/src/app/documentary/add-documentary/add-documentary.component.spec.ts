import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDocumentaryComponent } from './add-documentary.component';

describe('AddDocumentaryComponent', () => {
  let component: AddDocumentaryComponent;
  let fixture: ComponentFixture<AddDocumentaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDocumentaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDocumentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
