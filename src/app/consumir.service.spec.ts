import { TestBed, inject } from '@angular/core/testing';

import { ConsumirService } from './consumir.service';

describe('ConsumirService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsumirService]
    });
  });

  it('should be created', inject([ConsumirService], (service: ConsumirService) => {
    expect(service).toBeTruthy();
  }));
});
