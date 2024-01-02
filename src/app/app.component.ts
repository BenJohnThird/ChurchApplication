import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  public horizontalMenu: boolean;

  public darkMode = false;

  public menuColorMode = 'light';

  public menuColor = 'layout-menu-light';

  public themeColor = 'blue';

  public layoutColor = 'blue';

  public ripple = true;

  public inputStyle = 'outlined';

  constructor(private primengConfig: PrimeNGConfig) {
  }

  public ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
