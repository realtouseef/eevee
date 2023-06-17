import { TestBed } from '@angular/core/testing';

import { TopStoriesService } from './top-stories.service';

describe('TopStoresService', () => {
  let service: TopStoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopStoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
