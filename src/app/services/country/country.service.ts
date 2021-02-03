import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from './country';
import { environment } from '../../../environments/environment';


@Injectable()
export class CountryService {

  constructor(private httpClient: HttpClient) { }

  /** GET countries from the server */
  getCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(environment.countryUrl);
  }

  /* GET countries whose name contains search */
  searchCountries(countryName: string): Observable<Country[]> {
    countryName = countryName.trim();

    return this.httpClient.get<Country[]>(environment.searchUrl+countryName);
  }

}
