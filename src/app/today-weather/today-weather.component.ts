import { Component, OnInit,Input } from '@angular/core';
import { AppComponent } from "src/app/app.component";

@Component({
  selector: 'app-today-weather',
  templateUrl: './today-weather.component.html',
  styleUrls: ['./today-weather.component.css']
})
export class TodayWeatherComponent implements OnInit {

  @Input() todayWeatherData:any;
  imageUrl:string="https://openweathermap.org/img/w/";
  
  constructor(appComponent:AppComponent) { }

  ngOnInit() {
  }

  displayWeatherData(){
    console.log(this.todayWeatherData.city.name);
  }

}
