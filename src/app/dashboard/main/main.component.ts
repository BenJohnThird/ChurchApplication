import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../breadcrumb.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private breadcrumbService: BreadcrumbService,
  ) { }

  public ngOnInit(): void {
    this.breadcrumbService.setItems([
      {label: 'Dashboard', routerLink: ['/dashboard']}
    ]);
  }

}
