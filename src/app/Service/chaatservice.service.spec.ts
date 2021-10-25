import { TestBed } from '@angular/core/testing';

import { ChaatserviceService } from './chaatservice.service';

describe('ChaatserviceService', () => {
  let service: ChaatserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChaatserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
