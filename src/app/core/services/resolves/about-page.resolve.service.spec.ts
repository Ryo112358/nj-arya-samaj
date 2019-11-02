import { TestBed } from '@angular/core/testing';

import { AboutPageResolve } from './about-page.resolve.service';

describe('AboutPageResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AboutPageResolve = TestBed.get(AboutPageResolve);
    expect(service).toBeTruthy();
  });
});
