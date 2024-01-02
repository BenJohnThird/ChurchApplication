import { Component } from '@angular/core';
import { StyleIndexComponent } from '../../style-index/style-index.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent {
  constructor(public appMain: DashboardComponent) {}

}
