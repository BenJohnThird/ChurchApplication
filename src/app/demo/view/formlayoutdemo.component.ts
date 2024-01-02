import { Component } from '@angular/core';
import { BreadcrumbService } from '../../breadcrumb.service';

@Component({
  templateUrl: './formlayoutdemo.component.html'
})
export class FormLayoutDemoComponent {

  public selectedState: any = null;

  public states: any[] = [
    {name: 'Arizona', code: 'Arizona'},
    {name: 'California', value: 'California'},
    {name: 'Florida', code: 'Florida'},
    {name: 'Ohio', code: 'Ohio'},
    {name: 'Washington', code: 'Washington'}
  ];

  public dropdownItems = [
    {name: 'Option 1', code: 'Option 1'},
    {name: 'Option 2', code: 'Option 2'},
    {name: 'Option 3', code: 'Option 3'}
  ];

  public cities1: any[] = [];

  public cities2: any[] = [];

  public city1: any = null;

  public city2: any = null;

  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.setItems([
      {label: 'UI Kit'},
      {label: 'Form Layout', routerLink: ['/uikit/formlayout']}
    ]);
  }
}
