import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { DayDetail } from './dayDetail.model';

@Injectable({
  providedIn: 'root',
})
export class ForecastManagerService {
  constructor(private http: HttpClient) {}
  Forecast(city: string) {
    return this.http.get<any>(
      `http://api.weatherapi.com/v1/forecast.json?key=baa13d9a9c6a460bbc082442232412&q=${city}&days=7&aqi=no&alerts=no`,
      {
        headers: {
          apiKey: 'baa13d9a9c6a460bbc082442232412 ',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Methods': 'GET',
          'Access-Control-Allow-Headers': 'Content-Type, Origin',
          'Content-Type': 'application/json'
        },
      }
    );
  }
}
