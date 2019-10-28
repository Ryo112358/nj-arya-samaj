import { TestBed } from '@angular/core/testing';

import { MandalaResolveService } from './mandala.resolve.service';

describe('MandalaResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MandalaResolveService = TestBed.get(MandalaResolveService);
    expect(service).toBeTruthy();
  });
});
