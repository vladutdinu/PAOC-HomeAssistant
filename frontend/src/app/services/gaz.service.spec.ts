import { TestBed } from '@angular/core/testing';

import { GazService } from './gaz.service';

describe('GazService', () => {
  let service: GazService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GazService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
