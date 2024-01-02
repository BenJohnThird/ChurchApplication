import { Component, OnInit } from '@angular/core';
import { CountryService } from '../service/countryservice';
import { BreadcrumbService } from '../../breadcrumb.service';

@Component({
  templateUrl: './floatlabeldemo.component.html',
})
export class FloatLabelDemoComponent implements OnInit {

  public countries: any[];

  public cities: any[];

  public filteredCountries: any[];

  public value1: any;

  public value2: any;

  public value3: any;

  public value4: any;

  public value5: any;

  public value6: any;

  public value7: any;

  public value8: any;

  public value9: any;

  public value10: any;

  public value11: any;

  public value12: any;

  constructor(private countryService: CountryService, private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.setItems([
      {label: 'UI Kit'},
      {label: 'Float Label', routerLink: ['/uikit/floatlabel']}
    ]);
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];
  }

  public ngOnInit() {
    this.countryService.getCountries().then(countries => {
      this.countries = countries;
    });
  }

  public searchCountry(event) {
    // in a real application, make a request to a remote url with the query and
    // return filtered results, for demo we filter at client side
    const filtered: any[] = [];
    const query = event.query;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.countries.length; i++) {
      const country = this.countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }
}
