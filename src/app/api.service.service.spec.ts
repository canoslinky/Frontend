import { TestBed, inject } from '@angular/core/testing';

import { Api.ServiceService } from './api.service.service';

describe('Api.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Api.ServiceService]
    });
  });

  it('should be created', inject([Api.ServiceService], (service: Api.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
