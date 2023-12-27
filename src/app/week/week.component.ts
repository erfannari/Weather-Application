import { UserSearchListenerService } from './../shared/user-search-listener.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ForecastManagerService } from '../shared/forecast-manager.service';
import { DayDetail } from '../shared/dayDetail.model';
import { BrowserModule } from '@angular/platform-browser';
import { TransformDate } from '../shared/date.pipe';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-week',
  standalone: true,
  imports: [BrowserModule, TransformDate],
  templateUrl: './week.component.html',
  styleUrl: './week.component.scss',
})
export class WeekComponent implements OnInit, OnDestroy {
  cityName: string = '';
  forcastResponseMap: string = '';
  dayDetail: DayDetail[] = [
    {
      dayName: '',
      conditionIcon: '',
      conditionText: 'Sample',
      maxTemp: '0',
      minTemp: '0',
    },
    {
      dayName: '',
      conditionIcon: '',
      conditionText: 'Sample',
      maxTemp: '0',
      minTemp: '0',
    },
    {
      dayName: '',
      conditionIcon: '',
      conditionText: 'Sample',
      maxTemp: '0',
      minTemp: '0',
    },
    {
      dayName: 'Thu',
      conditionIcon: '',
      conditionText: 'Sample',
      maxTemp: '0',
      minTemp: '0',
    },
    {
      dayName: 'Fri',
      conditionIcon: '',
      conditionText: 'Sample',
      maxTemp: '0',
      minTemp: '0',
    },
    {
      dayName: 'Sat',
      conditionIcon: '',
      conditionText: 'Sample',
      maxTemp: '0',
      minTemp: '0',
    },
    {
      dayName: 'Sun',
      conditionIcon: '',
      conditionText: 'Sample',
      maxTemp: '0',
      minTemp: '0',
    },
  ];
  constructor(
    private forcastService: ForecastManagerService,
    private userSearchListener: UserSearchListenerService
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
          this.forcastService
            .Forecast(this.cityName)
            .subscribe((forecastResponse) => {
              forecastResponse.forecast.forecastday.map(
                (value: any, index: number) => {
                  this.dayDetail[index].dayName = value.date;
                  this.dayDetail[index].maxTemp = value.day.maxtemp_c;
                  this.dayDetail[index].maxTemp = value.day.maxtemp_c;
                  this.dayDetail[index].minTemp = value.day.mintemp_c;
                  if ((value.day.condition.icon = 'Sunny')) {
                    this.dayDetail[index].conditionIcon =
                      '../../../assets/icons/sun.png';
                  } else {
                    this.dayDetail[index].conditionIcon =
                      value.day.condition.icon;
                  }
                  this.dayDetail[index].conditionText =
                    value.day.condition.text;
                }
              );
            });
        }
      );
  }
}
