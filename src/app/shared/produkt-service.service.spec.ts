import { TestBed } from '@angular/core/testing';

import { ProduktServiceService } from './produkt-service.service';

describe('ProduktServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProduktServiceService = TestBed.get(ProduktServiceService);
    expect(service).toBeTruthy();
  });
});
