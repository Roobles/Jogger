/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RunningCalculationsService } from './running-calculations.service';

describe('RunningCalculationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RunningCalculationsService]
    });
  });

  it('should ...', inject([RunningCalculationsService], (service: RunningCalculationsService) => {
    expect(service).toBeTruthy();
  }));
});
