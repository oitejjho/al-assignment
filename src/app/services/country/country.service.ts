import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';
import { Country } from './country';


@Injectable()
export class CountryService {

  countryUrl = 'https://restcountries.eu/rest/v2/all';  // URL to get all countries api
  searchUrl = 'https://restcountries.eu/rest/v2/name/';  // URL to search countries api

  constructor(private httpClient: HttpClient) { }

  /** GET countries from the server */
  getCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(this.countryUrl);
  }

  /* GET countries whose name contains search */
  searchCountries(countryName: string): Observable<Country[]> {
    countryName = countryName.trim();

    return this.httpClient.get<Country[]>(this.searchUrl+countryName);
  }

}
