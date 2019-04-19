import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherData } from './weather-data/weather-data.service';
import { HttpClientModule } from '@angular/common/http';
import { TodayWeatherComponent } from './today-weather/today-weather.component';
import { WeatherListItemComponent } from './weather-list-item/weather-list-item.component';
import { WeatherListComponent } from './weather-list/weather-list.component'; 

@NgModule({
  declarations: [
    AppComponent,
    TodayWeatherComponent,
    WeatherListItemComponent,
    WeatherListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [WeatherData],
  bootstrap: [AppComponent]
})
export class AppModule { }
