import { TestBed, inject } from '@angular/core/testing';

import { FaasosApiService } from './faasos-api.service';

describe('FaasosApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FaasosApiService]
    });
  });

  it('should be created', inject([FaasosApiService], (service: FaasosApiService) => {
    expect(service).toBeTruthy();
  }));
});
