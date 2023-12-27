import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HttpClientModule } from '@angular/common/http';
import { currentWeatherManagerService } from './shared/current-weather-manager.service';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeroComponent, HttpClientModule],
  providers: [DatePipe, currentWeatherManagerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
