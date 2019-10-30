import { TestBed } from '@angular/core/testing';

import { ResidenteService } from './residente.service';

describe('ResidenteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResidenteService = TestBed.get(ResidenteService);
    expect(service).toBeTruthy();
  });
});
