import { TestBed } from '@angular/core/testing';

import { CountryRegionsFetchService } from './country-regions-fetch.service';

describe('CountryRegionsFetchService', () => {
  let service: CountryRegionsFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryRegionsFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
