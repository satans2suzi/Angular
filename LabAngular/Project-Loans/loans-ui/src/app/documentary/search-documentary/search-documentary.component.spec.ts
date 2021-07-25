import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDocumentaryComponent } from './search-documentary.component';

describe('SearchDocumentaryComponent', () => {
  let component: SearchDocumentaryComponent;
  let fixture: ComponentFixture<SearchDocumentaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDocumentaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDocumentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
