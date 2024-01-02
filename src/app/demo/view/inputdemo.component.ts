import { Component, OnInit } from '@angular/core';
import { CountryService } from '../service/countryservice';
import { SelectItem } from 'primeng/api';
import { BreadcrumbService } from '../../breadcrumb.service';

@Component({
  templateUrl: './inputdemo.component.html',
  styles: [`:host ::ng-deep .p-multiselect {
		min-width: 15rem;
	}

	:host ::ng-deep .multiselect-custom-virtual-scroll .p-multiselect {
		min-width: 20rem;
	}

	:host ::ng-deep .multiselect-custom .p-multiselect-label {
		padding-top: .25rem;
		padding-bottom: .25rem;

	}


	:host ::ng-deep .multiselect-custom .country-item.country-item-value {
		padding: .25rem .5rem;
		border-radius: 3px;
		display: inline-flex;
		margin-right: .5rem;
		background-color: var(--primary-color);
		color: var(--primary-color-text);
	}

	:host ::ng-deep .multiselect-custom .country-item.country-item-value img.flag {
		width: 17px;
	}

	:host ::ng-deep .multiselect-custom .country-item {
		display: flex;
		align-items: center;
	}

	:host ::ng-deep .multiselect-custom .country-item img.flag {
		width: 18px;
		margin-right: .5rem;
	}

	:host ::ng-deep .multiselect-custom .country-placeholder {
		padding: 0.25rem;
	}

	:host ::ng-deep .p-colorpicker {
		width: 2.5em
	}
    `]
})
export class InputDemoComponent implements OnInit {
  public countries: any[];

  public filteredCountries: any[];

  public selectedCountryAdvanced: any[];

  public valSlider = 50;

  public valColor = '#424242';

  public valRadio: string;

  public valCheck: string[] = [];

  public valCheck2: boolean;

  public valSwitch: boolean;

  public cities: SelectItem[];

  public selectedList: SelectItem;

  public selectedDrop: SelectItem;

  public selectedMulti: string[] = [];

  public valToggle = false;

  public paymentOptions: any[];

  public valSelect1: string;

  public valSelect2: string;

  public valueKnob = 20;

  constructor(private countryService: CountryService, private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.setItems([
      {label: 'UI Kit'},
      {label: 'Input', routerLink: ['/uikit/input']}
    ]);
  }

  public ngOnInit() {
    this.countryService.getCountries().then(countries => {
      this.countries = countries;
    });

    this.cities = [
      {label: 'New York', value: {id: 1, name: 'New York', code: 'NY'}},
      {label: 'Rome', value: {id: 2, name: 'Rome', code: 'RM'}},
      {label: 'London', value: {id: 3, name: 'London', code: 'LDN'}},
      {label: 'Istanbul', value: {id: 4, name: 'Istanbul', code: 'IST'}},
      {label: 'Paris', value: {id: 5, name: 'Paris', code: 'PRS'}}
    ];

    this.paymentOptions = [
      {name: 'Option 1', value: 1},
      {name: 'Option 2', value: 2},
      {name: 'Option 3', value: 3}
    ];
  }

  public filterCountry(event) {
    const filtered: any[] = [];
    const query = event.query;
    for (let i = 0; i < this.countries.length; i++) {
      const country = this.countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }
}
