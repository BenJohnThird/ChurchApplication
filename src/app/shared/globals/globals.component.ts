import { Component, OnInit, Renderer2 } from '@angular/core';
import { MenuService } from '../../app.menu.service';
import { PrimeNGConfig } from 'primeng/api';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-globals',
  templateUrl: './globals.component.html',
  styleUrls: ['./globals.component.scss']
})
export class GlobalsComponent implements OnInit {
  public rightPanelClick: boolean;

  public rightPanelActive: boolean;

  public menuClick: boolean;

  public staticMenuActive: boolean;

  public menuMobileActive: boolean;

  public megaMenuClick: boolean;

  public megaMenuActive: boolean;

  public megaMenuMobileClick: boolean;

  public megaMenuMobileActive: boolean;

  public topbarItemClick: boolean;

  public topbarMobileMenuClick: boolean;

  public topbarMobileMenuActive: boolean;

  public sidebarActive: boolean;

  public activeTopbarItem: any;

  public topbarMenuActive: boolean;

  public menuHoverActive: boolean;

  public configActive: boolean;

  constructor(
    public renderer: Renderer2,
    private menuService: MenuService,
    private primengConfig: PrimeNGConfig,
    public app: AppComponent) {
  }


  public ngOnInit(): void {
  }


  public onLayoutClick() {
    if (!this.topbarItemClick) {
      this.activeTopbarItem = null;
      this.topbarMenuActive = false;
    }

    if (!this.rightPanelClick) {
      this.rightPanelActive = false;
    }

    if (!this.megaMenuClick) {
      this.megaMenuActive = false;
    }

    if (!this.megaMenuMobileClick) {
      this.megaMenuMobileActive = false;
    }

    if (!this.menuClick) {
      if (this.isHorizontal()) {
        this.menuService.reset();
      }

      if (this.menuMobileActive) {
        this.menuMobileActive = false;
      }

      this.menuHoverActive = false;
    }

    this.menuClick = false;
    this.topbarItemClick = false;
    this.megaMenuClick = false;
    this.megaMenuMobileClick = false;
    this.rightPanelClick = false;
  }

  public onMegaMenuButtonClick(event) {
    this.megaMenuClick = true;
    this.megaMenuActive = !this.megaMenuActive;
    event.preventDefault();
  }

  public onMegaMenuClick(event) {
    this.megaMenuClick = true;
    event.preventDefault();
  }

  public onTopbarItemClick(event, item) {
    this.topbarItemClick = true;

    if (this.activeTopbarItem === item) {
      this.activeTopbarItem = null;
    } else {
      this.activeTopbarItem = item;
    }

    event.preventDefault();
  }

  public onRightPanelButtonClick(event) {
    this.rightPanelClick = true;
    this.rightPanelActive = !this.rightPanelActive;

    event.preventDefault();
  }

  public onRightPanelClose(event) {
    this.rightPanelActive = false;
    this.rightPanelClick = false;

    event.preventDefault();
  }

  public onRightPanelClick(event) {
    this.rightPanelClick = true;

    event.preventDefault();
  }

  public onTopbarMobileMenuButtonClick(event) {
    this.topbarMobileMenuClick = true;
    this.topbarMobileMenuActive = !this.topbarMobileMenuActive;

    event.preventDefault();
  }

  public onMegaMenuMobileButtonClick(event) {
    this.megaMenuMobileClick = true;
    this.megaMenuMobileActive = !this.megaMenuMobileActive;

    event.preventDefault();
  }

  public onMenuButtonClick(event) {
    this.menuClick = true;
    this.topbarMenuActive = false;

    if (this.isMobile()) {
      this.menuMobileActive = !this.menuMobileActive;
    }

    event.preventDefault();
  }

  public onSidebarClick(event: Event) {
    this.menuClick = true;
  }

  public onToggleMenuClick(event: Event) {
    this.staticMenuActive = !this.staticMenuActive;
    event.preventDefault();
  }

  public onRippleChange(event) {
    this.app.ripple = event.checked;
    this.primengConfig = event.checked;
  }

  public isDesktop() {
    return window.innerWidth > 991;
  }

  public isMobile() {
    return window.innerWidth <= 991;
  }

  public isHorizontal() {
    return this.app.horizontalMenu === true;
  }
}
