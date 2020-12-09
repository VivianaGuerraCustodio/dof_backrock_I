import { TestBed } from '@angular/core/testing';

import { CrudKeywordsService } from './crud-keywords.service';

describe('CrudKeywordsService', () => {
  let service: CrudKeywordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudKeywordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
