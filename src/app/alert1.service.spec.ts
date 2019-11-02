import { TestBed } from '@angular/core/testing';

import { Alert1Service } from './alert1.service';

describe('Alert1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Alert1Service = TestBed.get(Alert1Service);
    expect(service).toBeTruthy();
  });
});
