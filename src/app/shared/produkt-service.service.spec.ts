import { TestBed } from '@angular/core/testing';

import { ProduktService } from './produkt-service.service';

describe('ProduktService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProduktService = TestBed.get(ProduktService);
    expect(service).toBeTruthy();
  });
});
