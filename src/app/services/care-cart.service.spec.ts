import { TestBed } from '@angular/core/testing';

import { CareCartService } from './care-cart.service';

describe('CareCartService', () => {
  let service: CareCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
