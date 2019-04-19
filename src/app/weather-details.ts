export class WeatherDetails{
    // city:string='New Delhi';
    // country:string='IN'
    // population:number;
    main:string;
    description:string;
    iconCode:string;
    temperature:number;
    humidity:number;
    pressure:number;
    seaLevel:number;
    windSpeed:number;
    imageUrl:string="https://openweathermap.org/img/w/";

    constructor(dataList:any){
        this.main=dataList.weather.main;
        this.description=dataList.weather.description;
        this.iconCode=dataList.weather.icon;
        this.temperature= dataList.main.temp;
        this.humidity=dataList.main.humidity;
        this.pressure= dataList.main.pressure;
        this.seaLevel=dataList.main.sea_level;
        this.windSpeed=dataList.wind.speed;
        this.imageUrl+=this.iconCode+".png";
    }
}