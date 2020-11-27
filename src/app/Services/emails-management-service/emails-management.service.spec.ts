import { TestBed } from '@angular/core/testing';

import { EmailsManagementService } from './emails-management.service';

describe('EmailsManagementService', () => {
  let service: EmailsManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailsManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
