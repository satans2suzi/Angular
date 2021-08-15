import { TestBed } from '@angular/core/testing';

import { CheckLazyGuard } from './check-lazy.guard';

describe('CheckLazyGuard', () => {
  let guard: CheckLazyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckLazyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
