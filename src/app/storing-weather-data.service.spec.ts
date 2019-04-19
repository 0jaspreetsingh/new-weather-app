import { TestBed } from '@angular/core/testing';

import { StoringWeatherDataService } from './storing-weather-data.service';

describe('StoringWeatherDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoringWeatherDataService = TestBed.get(StoringWeatherDataService);
    expect(service).toBeTruthy();
  });
});
