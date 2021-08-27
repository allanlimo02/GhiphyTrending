import { TestBed } from '@angular/core/testing';

import { DataMainService } from './data-main.service';

describe('DataMainService', () => {
  let service: DataMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
