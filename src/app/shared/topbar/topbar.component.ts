import { Component } from '@angular/core';
import { StyleIndexComponent } from '../../style-index/style-index.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

  public activeItem: number;

  constructor(public appMain: DashboardComponent) {
  }

  public mobileMegaMenuItemClick(index: number): void {
    this.appMain.megaMenuMobileClick = true;
    this.activeItem = this.activeItem === index ? null : index;
  }

}
