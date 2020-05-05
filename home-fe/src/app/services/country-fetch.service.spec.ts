import { TestBed } from '@angular/core/testing';

import { CountryFetchService } from './country-fetch.service';

describe('CountryFetchService', () => {
  let service: CountryFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
