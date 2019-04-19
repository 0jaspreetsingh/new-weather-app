import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherListItemComponent } from './weather-list-item.component';

describe('WeatherListItemComponent', () => {
  let component: WeatherListItemComponent;
  let fixture: ComponentFixture<WeatherListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
