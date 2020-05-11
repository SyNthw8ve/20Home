import { TestBed } from '@angular/core/testing';

import { RegionFetchService } from './region-fetch.service';

describe('RegionFetchService', () => {
  let service: RegionFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegionFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
