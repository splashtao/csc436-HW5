import { TestBed, inject } from '@angular/core/testing';

import { PyramidRowService } from './pyramid-row.service';

describe('PyramidRowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PyramidRowService]
    });
  });

  it('should ...', inject([PyramidRowService], (service: PyramidRowService) => {
    expect(service).toBeTruthy();
  }));
});
