import { TestBed } from '@angular/core/testing';

import { IssuesService } from './issues.service';

describe('Issues.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IssuesService = TestBed.get(Issues.Service);
    expect(service).toBeTruthy();
  });
});
