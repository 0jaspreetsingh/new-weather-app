import { Component } from '@angular/core';
import { StoringWeatherDataService } from "src/app/storing-weather-data.service";
import { WeatherData } from "src/app/weather-data/weather-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  city: string = "";
  locationWeather: any;
  ///weatherDetais:DataResponse[];

  // constructor(private weatherDataService: StoringWeatherDataService) { }

  constructor(private weatherData:WeatherData){}
  // getdata() {
  //   this.weatherDataService.getWeatherData(this.city);
  // }

  getData() {
      this.weatherData.getWeatherData(this.city).subscribe((data: any) => {
      this.locationWeather = data;
      console.log(data);
      // console.log(data.city.country);
    }), (error) => {
      //console.log("City not found")
      console.log(error)
    }
  }

}
