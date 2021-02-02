import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CountryComponent } from '../app/components/country/country.component';

import { CountryService } from '../app/services/country/country.service';


const appRoutes: Routes = [
  { path: '', component : CountryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
