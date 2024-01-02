import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { BreadcrumbService } from '../../breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnDestroy {

  public subscription: Subscription;

  public items: MenuItem[];

  constructor(public breadcrumbService: BreadcrumbService) {
    console.log('HELlo');
    this.subscription = breadcrumbService.itemsHandler.subscribe(response => {
      this.items = response;
      console.log(this.items, 'WEWEW');
    });
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
