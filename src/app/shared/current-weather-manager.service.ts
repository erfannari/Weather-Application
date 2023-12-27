import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class currentWeatherManagerService {
  constructor(private http: HttpClient) {}
  Search(city: string) {
    return this.http.get<any>(
      `http://api.weatherapi.com/v1/current.json?key=baa13d9a9c6a460bbc082442232412&q=${city}&aqi=yes`,
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
