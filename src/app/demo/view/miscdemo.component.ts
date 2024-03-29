import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../breadcrumb.service';

@Component({
  templateUrl: './miscdemo.component.html'
})
export class MiscDemoComponent implements OnInit {

  public value = 0;

  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.setItems([
      {label: 'UI Kit'},
      {label: 'Misc', routerLink: ['/uikit/misc']}
    ]);
  }

  public ngOnInit() {
    const interval = setInterval(() => {
      this.value = this.value + Math.floor(Math.random() * 10) + 1;
      if (this.value >= 100) {
        this.value = 100;
        clearInterval(interval);
      }
    }, 2000);
  }
}
