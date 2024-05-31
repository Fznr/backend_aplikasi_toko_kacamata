import { TestBed } from '@angular/core/testing';

import { OpticalService } from './optical.service';

describe('OpticalService', () => {
  let service: OpticalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpticalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
