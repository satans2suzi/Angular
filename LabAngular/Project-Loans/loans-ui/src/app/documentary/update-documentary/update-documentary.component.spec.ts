import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDocumentaryComponent } from './update-documentary.component';

describe('UpdateDocumentaryComponent', () => {
  let component: UpdateDocumentaryComponent;
  let fixture: ComponentFixture<UpdateDocumentaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDocumentaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDocumentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
