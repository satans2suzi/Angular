import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDocumentaryComponent } from './list-documentary.component';

describe('ListDocumentaryComponent', () => {
  let component: ListDocumentaryComponent;
  let fixture: ComponentFixture<ListDocumentaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDocumentaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDocumentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
