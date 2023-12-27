import { ForecastManagerService } from './../shared/forecast-manager.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { currentWeatherManagerService } from '../shared/current-weather-manager.service';
import { UserSearchListenerService } from '../shared/user-search-listener.service';
import { Subject, Subscription } from 'rxjs';
@Component({
  selector: 'app-weather-detail',
  standalone: true,
  imports: [],
  templateUrl: './weather-detail.component.html',
  styleUrl: './weather-detail.component.scss',
})
export class WeatherDetailComponent implements OnInit, OnDestroy {
  temp: string = '0';
  highTemp: string = '0';
  lowTemp: string = '0';
  feelsLike: string = '0';
  humidity: string = '0';
  windSpeed: string = '0';
  condition: string = '';
  conditionIcon: string = '';
  cityName: string = '';
  sunrise: string = '';
  sunset: string = '';
  currentDate = this.datePipe.transform(new Date(), 'longDate');
  currentTime: any;

  constructor(
    private datePipe: DatePipe,
    private apiService: currentWeatherManagerService,
    private userSearchListener: UserSearchListenerService,
    private forcastService: ForecastManagerService
  ) {}
  subscription: Subscription | undefined;
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  ngOnInit() {
    this.subscription =
      this.userSearchListener.UserSearchListenerSubject.subscribe(
        (inputValue) => {
          this.cityName = inputValue;
          this.apiService
            .Search(this.cityName)
            .subscribe((currentWeatherResponse) => {
              // Getting Current Weather Indices
              this.temp = currentWeatherResponse.current.temp_c;
              this.feelsLike = currentWeatherResponse.current.feelslike_c;
              this.humidity = currentWeatherResponse.current.humidity;
              this.windSpeed = currentWeatherResponse.current.wind_kph;
              this.condition = currentWeatherResponse.current.condition.text;
              if ((currentWeatherResponse.current.condition.text = 'Sunny')) {
                this.conditionIcon = '../../../assets/icons/sun.png';
              } else {
                this.conditionIcon =
                  currentWeatherResponse.current.condition.icon;
              }
              let localtime = currentWeatherResponse.location.localtime;
              this.currentTime = localtime.slice(11);
            });
          this.forcastService
            .Forecast(this.cityName)
            .subscribe((forecastResponse) => {
              this.highTemp =
                forecastResponse.forecast.forecastday[0].day.maxtemp_c;
              this.lowTemp =
                forecastResponse.forecast.forecastday[0].day.mintemp_c;
              // Getting sunrise info
              this.sunrise =
                forecastResponse.forecast.forecastday[0].astro.sunrise;
              // Getting sunset info
              this.sunset =
                forecastResponse.forecast.forecastday[0].astro.sunset;
            });
        }
      );
  }
}
