import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbService } from '../../breadcrumb.service';

@Component({
  templateUrl: './buttondemo.component.html'
})
export class ButtonDemoComponent implements OnInit {

  public items: MenuItem[];

  public loading = [false, false, false, false];

  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.setItems([
      {label: 'UI Kit'},
      {label: 'Button', routerLink: ['/uikit/button']}
    ]);
  }

  public ngOnInit() {
    this.items = [
      {label: 'Update', icon: 'pi pi-refresh'},
      {label: 'Delete', icon: 'pi pi-times'},
      {label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'},
      {separator: true},
      {label: 'Setup', icon: 'pi pi-cog'}
    ];
  }

  public load(index) {
    this.loading[index] = true;
    setTimeout(() => this.loading[index] = false, 1000);
  }
}
