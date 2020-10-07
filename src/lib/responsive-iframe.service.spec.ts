import { TestBed } from '@angular/core/testing';

import { ResponsiveIframeService } from './responsive-iframe.service';

describe('ResponsiveIframeService', () => {
  let service: ResponsiveIframeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsiveIframeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
