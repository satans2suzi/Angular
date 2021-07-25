import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDocumentaryComponent } from './delete-documentary.component';

describe('DeleteDocumentaryComponent', () => {
  let component: DeleteDocumentaryComponent;
  let fixture: ComponentFixture<DeleteDocumentaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDocumentaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDocumentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
