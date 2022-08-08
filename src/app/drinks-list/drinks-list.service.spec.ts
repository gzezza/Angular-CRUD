import { TestBed } from '@angular/core/testing';

import { DrinksListService } from './drinks-list.service';

describe('DrinksListService', () => {
  let service: DrinksListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrinksListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
