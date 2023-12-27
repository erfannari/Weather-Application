import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { currentWeatherManagerService } from '../shared/current-weather-manager.service';
import { UserSearchListenerService } from '../shared/user-search-listener.service';
import { Observable, Subject, Subscription } from 'rxjs';
@Component({
  selector: 'app-city',
  standalone: true,
  imports: [],
  templateUrl: './city.component.html',
  styleUrl: './city.component.scss',
  providers: [currentWeatherManagerService],
})
export class CityComponent implements OnInit, AfterViewInit, OnDestroy {
  cityName: string = 'City...';
  country: string = 'Country...';
  constructor(
    private apiService: currentWeatherManagerService,
    private userSearchListener: UserSearchListenerService
  ) {}
  ngOnInit() {}
  ngAfterViewInit() {
    this.citySearch();
  }
  ngOnDestroy(): void {}

  citySearch(cityInput: string = 'tehran') {
    this.userSearchListener.UserSearchListenerSubject.next(cityInput);
    if (cityInput !== '') {
      this.apiService.Search(cityInput).subscribe((currentWeatherResponse) => {
        this.cityName = currentWeatherResponse.location.name;
        this.country = currentWeatherResponse.location.country;
      });
    } else {
      alert('Pls Enter City Name!');
    }
  }
}
