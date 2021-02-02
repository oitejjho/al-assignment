import { Component, OnInit } from '@angular/core';
import { Country } from '../../services/country/country';
import { CountryService } from '../../services/country/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  providers: [CountryService],
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  countries: Country[] = [];

  constructor(private countryService : CountryService) { }

  ngOnInit() {
    this.getCountries();

  }

  getCountries(): void {
    this.countryService.getCountries()
      .subscribe(countries => (this.countries = countries));
  }

  search(searchCountry: string) {
    
    if (searchCountry) {
      this.countryService
        .searchCountries(searchCountry)
        .subscribe(countries => (this.countries = countries));
    }
    else{
      this.getCountries();
    }
  }

}
