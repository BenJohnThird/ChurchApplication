import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { MenuService } from '../../app.menu.service';
import { filter } from 'rxjs/operators';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { BreadcrumbService } from '../../breadcrumb.service';

@Component({
  /* tslint:disable:component-selector */
  selector: '[app-menuitem]',
  /* tslint:enable:component-selector */
  template: `
    <ng-container>
      <a [attr.href]="item.url" (click)="itemClick($event)"
         *ngIf="(!item.routerLink || item.items) && item.visible !== false"
         (mouseenter)="onMouseEnter()" (keydown.enter)="itemClick($event)"
         [attr.target]="item.target" [attr.tabindex]="0" [ngClass]="item.class">
        <span class="menuitem-text">{{item.label}}</span>
        <i class="pi pi-fw pi-angle-down layout-submenu-toggler" *ngIf="item.items"></i>
        <i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
      </a>
      <a (click)="itemClick($event)" (mouseenter)="onMouseEnter()"
         *ngIf="(item.routerLink && !item.items) && item.visible !== false"
         [routerLink]="item.routerLink" routerLinkActive="active-menuitem-routerlink" [ngClass]="item.class"
         [routerLinkActiveOptions]="{exact: !item.preventExact}" [attr.target]="item.target" [attr.tabindex]="0">
        <span class="menuitem-text">{{item.label}}</span>
        <i class="pi pi-fw pi-angle-down layout-submenu-toggler" *ngIf="item.items"></i>
        <i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
      </a>
      <ul *ngIf="(item.items && active) && item.visible !== false" [@children]="(appMain.isHorizontal() && root) ? (active ? 'visible' : 'hidden') :
              (active ? 'visibleAnimated' : 'hiddenAnimated')">
        <ng-template ngFor let-child let-i="index" [ngForOf]="item.items">
          <li app-menuitem [item]="child" [index]="i" [parentKey]="key" [class]="child.badgeClass"></li>
        </ng-template>
      </ul>
    </ng-container>
  `,
  host: {
    '[class.active-menuitem]': 'active'
  },
  animations: [
    trigger('children', [
      state('void', style({
        height: '0px'
      })),
      state('hiddenAnimated', style({
        height: '0px'
      })),
      state('visibleAnimated', style({
        height: '*'
      })),
      state('visible', style({
        height: '*',
        'z-index': 100
      })),
      state('hidden', style({
        height: '0px',
        'z-index': '*'
      })),
      transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
      transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
      transition('void => visibleAnimated, visibleAnimated => void',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class MenuitemComponent implements OnInit, OnDestroy {

  @Input() public item: any;

  @Input() public index: number;

  @Input() public root: boolean;

  @Input() public parentKey: string;

  public active = false;

  public menuSourceSubscription: Subscription;

  public menuResetSubscription: Subscription;

  public key: string;

  constructor(
    public appMain: DashboardComponent,
    public router: Router,
    private cd: ChangeDetectorRef,
    private menuService: MenuService,
    private breadcrumbService: BreadcrumbService,
  ) {
    this.menuSourceSubscription = this.menuService.menuSource$.subscribe(key => {
      // deactivate current active menu
      if (this.active && this.key !== key && key.indexOf(this.key) !== 0) {
        this.active = false;
      }
    });

    this.menuResetSubscription = this.menuService.resetSource$.subscribe(() => {
      this.active = false;
    });

    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(params => {
        if (this.appMain.isHorizontal()) {
          this.active = false;
        } else {
          if (this.item.routerLink) {
            this.updateActiveStateFromRoute();
          } else {
            this.active = false;
          }
        }
      });
  }

  public ngOnInit(): void {
    if (!this.appMain.isHorizontal() && this.item.routerLink) {
      this.updateActiveStateFromRoute();
    }

    this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);
  }

  public updateActiveStateFromRoute(): void {
    this.active = this.router.isActive(this.item.routerLink[0], !this.item.items && !this.item.preventExact);

    if (this.active) {
      this.breadcrumbService.setItems([
        {label: this.item.label, routerLink: this.item.routerLink}
      ]);
    }
  }

  public itemClick(event: Event): void {
    // avoid processing disabled items
    if (this.item.disabled) {
      event.preventDefault();
      return;
    }

    // navigate with hover in horizontal mode
    if (this.root) {
      this.appMain.menuHoverActive = !this.appMain.menuHoverActive;
    }

    // notify other items
    this.menuService.onMenuStateChange(this.key);

    // execute command
    if (this.item.command) {
      this.item.command({originalEvent: event, item: this.item});
    }

    // toggle active state
    if (this.item.items) {
      this.active = !this.active;
    } else {
      // activate item
      this.active = true;

      // hide overlay menus
      if (this.appMain.isMobile()) {
        this.appMain.sidebarActive = false;
        this.appMain.menuMobileActive = false;
      }

      // reset horizontal menu
      if (this.appMain.isHorizontal()) {
        this.menuService.reset();
      }
    }
  }

  public onMouseEnter(): void {
    // activate item on hover
    if (this.root && this.appMain.menuHoverActive && this.appMain.isHorizontal() && this.appMain.isDesktop()) {
      this.menuService.onMenuStateChange(this.key);
      this.active = true;
    }
  }

  public ngOnDestroy(): void {
    if (this.menuSourceSubscription) {
      this.menuSourceSubscription.unsubscribe();
    }

    if (this.menuResetSubscription) {
      this.menuResetSubscription.unsubscribe();
    }
  }
}
