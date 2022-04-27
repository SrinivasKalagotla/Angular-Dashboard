import { TestBed } from '@angular/core/testing';

import { AttackerService } from './attacker.service';

describe('AttackerService', () => {
  let service: AttackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
