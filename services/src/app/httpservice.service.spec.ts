/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpserviceService } from './httpservice.service';

describe('HttpserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpserviceService]
    });
  });

  it('should ...', inject([HttpserviceService], (service: HttpserviceService) => {
    expect(service).toBeTruthy();
  }));
});
