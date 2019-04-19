import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherData {
    url:string = 'http://api.openweathermap.org/data/2.5/forecast';
    APPID:string ='93b149d74da7c74b55b64ca0c64902bc';

    requestUrl:string = this.url+'?APPID='+this.APPID +'&q=';

  constructor(private http: HttpClient) { }

  getWeatherData(city:string){
      return (this.http.get(this.requestUrl+city)); 
  }
}