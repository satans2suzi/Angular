import { TestBed } from '@angular/core/testing';

import { DemoHttpService } from './demo-http.service';

describe('DemoHttpService', () => {
  let service: DemoHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
