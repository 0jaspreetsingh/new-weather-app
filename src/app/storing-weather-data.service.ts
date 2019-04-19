import { Injectable } from '@angular/core';
import { WeatherData } from "src/app/weather-data/weather-data.service";

@Injectable({
  providedIn: 'root'
})
export class StoringWeatherDataService {
  locationWeatherData: any;
  constructor(private weatherData: WeatherData) { }

  getWeatherData(city: string) {
    return this.weatherData.getWeatherData(city).subscribe((data: any) => {
      this.locationWeatherData = data;
      console.log(data.list[0]);
      // console.log(data.city.country);
    }), (error) => {
      //console.log("City not found")
      console.log(error)
    }
  }
}
