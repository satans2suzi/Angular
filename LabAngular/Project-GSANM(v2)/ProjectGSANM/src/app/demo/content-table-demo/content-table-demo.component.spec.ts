import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTableDemoComponent } from './content-table-demo.component';

describe('ContentTableDemoComponent', () => {
  let component: ContentTableDemoComponent;
  let fixture: ComponentFixture<ContentTableDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTableDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
