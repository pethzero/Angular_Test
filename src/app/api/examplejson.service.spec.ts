import { TestBed } from '@angular/core/testing';

import { ExampleJsonService } from './examplejson.service';

describe('ExampleJsonService', () => {
  let service: ExampleJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
