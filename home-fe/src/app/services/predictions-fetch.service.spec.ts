import { TestBed } from '@angular/core/testing';

import { PredictionsFetchService } from './predictions-fetch.service';

describe('PredictionsFetchService', () => {
  let service: PredictionsFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PredictionsFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
