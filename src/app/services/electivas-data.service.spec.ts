import { TestBed } from '@angular/core/testing';

import { ElectivasDataService } from './electivas-data.service';

describe('ElectivasDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElectivasDataService = TestBed.get(ElectivasDataService);
    expect(service).toBeTruthy();
  });
});
