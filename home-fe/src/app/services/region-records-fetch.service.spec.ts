import { TestBed } from '@angular/core/testing';

import { RegionRecordsFetchService } from './region-records-fetch.service';

describe('RegionRecordsFetchService', () => {
  let service: RegionRecordsFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegionRecordsFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
