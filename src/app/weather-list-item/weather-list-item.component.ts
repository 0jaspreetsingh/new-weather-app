import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";

@Component({
  selector: 'app-weather-list-item',
  templateUrl: './weather-list-item.component.html',
  styleUrls: ['./weather-list-item.component.css']
})
export class WeatherListItemComponent implements OnInit {

  @Input() weatherListItem: any;
  constructor() { }

  ngOnInit() {
  }

}
