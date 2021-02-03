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
  filtereCountries: Country[] = [];

  constructor(private countryService : CountryService) { }

  ngOnInit() {
    this.getCountries();

  }

  getCountries(): void {
    this.countryService.getCountries().subscribe(countries => {
      this.filtereCountries = countries;
      this.countries = JSON.parse(JSON.stringify(this.filtereCountries));
    });
    
  }

  search(searchCountry: string): void {
    
    searchCountry = searchCountry.trim();
    if(searchCountry)
      this.filtereCountries = this.countries.filter(country => country.name.toLowerCase().indexOf(searchCountry.toLowerCase()) !== -1);
    else
      this.filtereCountries = this.countries;
    
  
  }

}
