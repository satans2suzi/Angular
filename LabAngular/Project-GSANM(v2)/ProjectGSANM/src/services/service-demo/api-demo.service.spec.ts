import { TestBed } from '@angular/core/testing';

import { ApiDemoService } from './api-demo.service';

describe('ApiDemoService', () => {
  let service: ApiDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
