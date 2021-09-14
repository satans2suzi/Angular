import { TestBed } from '@angular/core/testing';

import { AssetsPlacedService } from './assets-placed.service';

describe('AssetsPlacedService', () => {
  let service: AssetsPlacedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetsPlacedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
