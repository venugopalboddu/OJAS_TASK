import { TestBed, async, inject } from '@angular/core/testing';

import { AuthgGuard } from './authg.guard';

describe('AuthgGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthgGuard]
    });
  });

  it('should ...', inject([AuthgGuard], (guard: AuthgGuard) => {
    expect(guard).toBeTruthy();
  }));
});
