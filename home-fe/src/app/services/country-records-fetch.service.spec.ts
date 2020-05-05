import { TestBed } from '@angular/core/testing';

import { CountryRecordsService } from './country-records-fetch.service';

describe('CountryFetchService', () => {
  let service: CountryRecordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryRecordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
