import { TestBed } from '@angular/core/testing';

import { VarsityService } from './varsity.service';

describe('VarsityService', () => {
  let service: VarsityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VarsityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
