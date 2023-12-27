import { Component } from '@angular/core';
import { CityComponent } from '../city/city.component';
import { WeatherDetailComponent } from '../weather-detail/weather-detail.component';
import { WeekComponent } from '../week/week.component';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CityComponent, WeatherDetailComponent, WeekComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {}
