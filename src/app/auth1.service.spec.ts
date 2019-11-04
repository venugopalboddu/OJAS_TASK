import { TestBed } from '@angular/core/testing';

import { Auth1Service } from './auth1.service';

describe('Auth1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Auth1Service = TestBed.get(Auth1Service);
    expect(service).toBeTruthy();
  });
});
