import { TestBed } from '@angular/core/testing';

import { CursomcService } from './cursomc.service';

describe('CursomcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CursomcService = TestBed.get(CursomcService);
    expect(service).toBeTruthy();
  });
});
