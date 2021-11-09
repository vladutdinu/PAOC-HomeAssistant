import { TestBed } from '@angular/core/testing';

import { UmiditateService } from './umiditate.service';

describe('UmiditateService', () => {
  let service: UmiditateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UmiditateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
