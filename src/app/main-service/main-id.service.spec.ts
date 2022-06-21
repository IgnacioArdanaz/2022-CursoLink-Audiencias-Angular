import { TestBed } from '@angular/core/testing';

import { MainIdService } from './main-id.service';

describe('MainIdService', () => {
  let service: MainIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
