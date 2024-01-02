import { Component, OnDestroy, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Subscription } from 'rxjs';
import { AppConfig } from '../../demo/domain/appconfig';
import { AppComponent } from '../../app.component';
import { StyleIndexComponent } from '../../style-index/style-index.component';
import { ConfigService } from '../../demo/service/app.config.service';
import { DashboardComponent } from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
  animations: [
    trigger('children', [
      state('hiddenAnimated', style({
        opacity: 0,
        transform: ' translateX(-50%) translateY(-50%)'
      })),
      state('visibleAnimated', style({
        opacity: 1,
        transform: 'translateX(-50%) translateY(-50%) scale(1)',
      })),
      transition('visibleAnimated => hiddenAnimated', animate('150ms cubic-bezier(0, 0, 0.2, 1)')),
      transition('hiddenAnimated => visibleAnimated', animate('150ms cubic-bezier(0, 0, 0.2, 1)'))
    ])
  ]
})
export class ConfigComponent implements OnInit, OnDestroy {

  public darkColors: any;

  public lightColors: any;

  public customColors: any;

  public menuColors: any;

  public selectedColorOptions: any;

  public componentThemes: any;

  public subscription: Subscription;

  public config: AppConfig;

  constructor(public app: AppComponent, public containerComponent: DashboardComponent, public configService: ConfigService) {
  }

  public ngOnInit(): void {
    this.config = this.configService.config;
    this.subscription = this.configService.configUpdate$.subscribe(config => {
      this.config = config;
    });

    this.lightColors = [
      {name: 'Blue', file: 'blue', image: 'blue.svg'},
      {name: 'Green', file: 'green', image: 'green.svg'},
      {name: 'Yellow', file: 'yellow', image: 'yellow.svg'},
      {name: 'Cyan', file: 'cyan', image: 'cyan.svg'},
      {name: 'Purple', file: 'purple', image: 'purple.svg'},
      {name: 'Orange', file: 'orange', image: 'orange.svg'},
      {name: 'Teal', file: 'teal', image: 'teal.svg'},
      {name: 'Magenta', file: 'magenta', image: 'magenta.svg'},
      {name: 'Lime', file: 'lime', image: 'lime.svg'},
      {name: 'Brown', file: 'brown', image: 'brown.svg'},
      {name: 'Red', file: 'red', image: 'red.svg'},
      {name: 'Indigo', file: 'indigo', image: 'indigo.svg'},
    ];
    this.darkColors = [
      {name: 'Blue', file: 'blue', image: 'blue.svg'},
      {name: 'Green', file: 'green', image: 'green.svg'},
      {name: 'Yellow', file: 'yellow', image: 'yellow.svg'},
      {name: 'Cyan', file: 'cyan', image: 'cyan.svg'},
      {name: 'Purple', file: 'purple', image: 'purple.svg'},
      {name: 'Orange', file: 'orange', image: 'orange.svg'},
      {name: 'Teal', file: 'teal', image: 'teal.svg'},
      {name: 'Magenta', file: 'magenta', image: 'magenta.svg'},
      {name: 'Lime', file: 'lime', image: 'lime.svg'},
      {name: 'Brown', file: 'brown', image: 'brown.svg'},
      {name: 'Red', file: 'red', image: 'red.svg'},
      {name: 'Indigo', file: 'indigo', image: 'indigo.svg'},
    ];
    this.customColors = [
      {name: 'Chile', file: 'chile', image: 'chile.png'},
      {name: 'Naples', file: 'naples', image: 'naples.png'},
      {name: 'Georgia', file: 'georgia', image: 'georgia.png'},
      {name: 'Infinity', file: 'infinity', image: 'infinity.png'},
      {name: 'Chicago', file: 'chicago', image: 'chicago.png'},
      {name: 'Majesty', file: 'majesty', image: 'majesty.png'},
      {name: 'Fish', file: 'fish', image: 'fish.png'},
      {name: 'Dawn', file: 'dawn', image: 'dawn.png'},
      {name: 'Record', file: 'record', image: 'record.png'},
      {name: 'Pool', file: 'pool', image: 'pool.png'},
      {name: 'Metal', file: 'metal', image: 'metal.png'},
      {name: 'China', file: 'china', image: 'china.png'},
      {name: 'Table', file: 'table', image: 'table.png'},
      {name: 'Panorama', file: 'panorama', image: 'panorama.png'},
      {name: 'Barcelona', file: 'barcelona', image: 'barcelona.png'},
      {name: 'Underwater', file: 'underwater', image: 'underwater.png'},
      {name: 'Symmetry', file: 'symmetry', image: 'symmetry.png'},
      {name: 'Rain', file: 'rain', image: 'rain.png'},
      {name: 'Utah', file: 'utah', image: 'utah.png'},
      {name: 'Wave', file: 'wave', image: 'wave.png'},
      {name: 'Flora', file: 'flora', image: 'flora.png'},
      {name: 'Speed', file: 'speed', image: 'speed.png'},
      {name: 'Canopy', file: 'canopy', image: 'canopy.png'},
      {name: 'SanPaolo', file: 'sanpaolo', image: 'sanpaolo.png'},
      {name: 'Basketball', file: 'basketball', image: 'basketball.png'},
      {name: 'Misty', file: 'misty', image: 'misty.png'},
      {name: 'Summit', file: 'summit', image: 'summit.png'},
      {name: 'Wall', file: 'wall', image: 'wall.png'},
      {name: 'Ferris', file: 'ferris', image: 'ferris.png'},
      {name: 'Ship', file: 'ship', image: 'ship.png'},
      {name: 'NY', file: 'ny', image: 'ny.png'},
      {name: 'Cyan', file: 'cyan', image: 'cyan.png'},
      {name: 'Violet', file: 'violet', image: 'violet.png'},
      {name: 'Red', file: 'red', image: 'red.png'},
      {name: 'Blue', file: 'blue', image: 'blue.png'},
      {name: 'Porsuk', file: 'porsuk', image: 'porsuk.png'},
      {name: 'Pink', file: 'pink', image: 'pink.png'},
      {name: 'Purple', file: 'purple', image: 'purple.png'},
      {name: 'Orange', file: 'orange', image: 'orange.png'},
    ];
    this.menuColors = [
      {name: 'light'},
      {name: 'custom'},
      {name: 'dark'}
    ];
    this.selectedColorOptions = this.lightColors;
    this.componentThemes = [
      {name: 'Blue', file: 'blue', image: 'blue.svg'},
      {name: 'Green', file: 'green', image: 'green.svg'},
      {name: 'Yellow', file: 'yellow', image: 'yellow.svg'},
      {name: 'Cyan', file: 'cyan', image: 'cyan.svg'},
      {name: 'Purple', file: 'purple', image: 'purple.svg'},
      {name: 'Orange', file: 'orange', image: 'orange.svg'},
      {name: 'Teal', file: 'teal', image: 'teal.svg'},
      {name: 'Magenta', file: 'magenta', image: 'magenta.svg'},
      {name: 'Lime', file: 'lime', image: 'lime.svg'},
      {name: 'Brown', file: 'brown', image: 'brown.svg'},
      {name: 'Red', file: 'red', image: 'red.svg'},
      {name: 'Indigo', file: 'indigo', image: 'indigo.svg'},
    ];
  }

  public changeLayout(event: MouseEvent, mode: boolean) {
    this.app.darkMode = mode;

    if (mode === true) {
      this.app.menuColorMode = 'dark';
      this.app.menuColor = 'layout-menu-dark';
      this.selectedColorOptions = this.darkColors;
      this.app.layoutColor = this.selectedColorOptions[0].file;
      this.changeLightDarkLayout('layout-css', this.selectedColorOptions[0].file, 'layout-dark');
      this.changeLightDarkTheme('theme-css', 'theme-dark');
    } else {
      this.app.menuColorMode = 'light';
      this.app.menuColor = 'layout-menu-light';
      this.selectedColorOptions = this.lightColors;
      this.app.layoutColor = this.selectedColorOptions[0].file;
      this.changeLightDarkLayout('layout-css', this.selectedColorOptions[0].file, 'layout-light');
      this.changeLightDarkTheme('theme-css', 'theme-light');
    }
    this.configService.updateConfig({...this.config, ...{dark: mode}});
    event.preventDefault();
  }

  public changeLightDarkTheme(id: string, value: string): void {
    const element = document.getElementById(id);
    const urlTokens = element.getAttribute('href').split('/');
    urlTokens[urlTokens.length - 1] = value + '.css';
    const newURL = urlTokens.join('/');
    this.replaceLink(element, newURL);
  }

  public changeLightDarkLayout(id: string, color: string, mode: string): void {
    const element = document.getElementById(id);
    const urlTokens = element.getAttribute('href')
      .split('/');
    urlTokens[urlTokens.length - 2] = color;
    urlTokens[urlTokens.length - 1] = mode + '.css';
    const newURL = urlTokens.join('/');
    this.replaceLink(element, newURL);
  }

  public changeMenuToHorizontal(event: MouseEvent, mode: boolean): void {
    this.app.horizontalMenu = mode;
    event.preventDefault();
  }

  public changeMenuColor(event: MouseEvent, mode: string): void {
    this.app.menuColorMode = mode;
    if (mode !== 'custom') {
      this.app.menuColor = 'layout-menu-' + mode;
      if (mode === 'dark') {
        this.selectedColorOptions = this.darkColors;
        this.app.layoutColor = this.selectedColorOptions[0].file;
        this.changeStyleSheetsColor('layout-css', this.selectedColorOptions[0].file);
      } else {
        this.selectedColorOptions = this.lightColors;
        this.app.layoutColor = this.selectedColorOptions[0].file;
        this.changeStyleSheetsColor('layout-css', this.selectedColorOptions[0].file);
      }
    } else {
      this.app.menuColor = 'layout-menu-' + this.customColors[0].file;
      this.selectedColorOptions = this.customColors;
    }
    event.preventDefault();
  }

  public changeMenuTheme(event: { preventDefault: () => void; }, color: string): void {
    if (this.app.menuColorMode !== 'custom') {
      this.changeStyleSheetsColor('layout-css', color);
      this.app.layoutColor = color;
    } else {
      this.app.menuColor = 'layout-menu-' + color;
    }
    event.preventDefault();
  }

  public changeComponentTheme(event: { preventDefault: () => void; }, color: string): void {
    this.app.themeColor = color;
    this.changeStyleSheetsColor('theme-css', color);
    event.preventDefault();
  }

  public changeStyleSheetsColor(id, value): void {
    const element = document.getElementById(id);
    const urlTokens = element.getAttribute('href').split('/');
    urlTokens[urlTokens.length - 2] = value;
    const newURL = urlTokens.join('/');
    this.replaceLink(element, newURL);
  }

  public onConfigButtonClick(event): void {
    this.containerComponent.configActive = true;
    event.preventDefault();
  }

  public onConfigCloseClick(event): void {
    this.containerComponent.configActive = false;
    event.preventDefault();
  }

  public replaceLink(linkElement, href): void {
    if (this.isIE()) {
      linkElement.setAttribute('href', href);
    } else {
      const id = linkElement.getAttribute('id');
      const cloneLinkElement = linkElement.cloneNode(true);
      cloneLinkElement.setAttribute('href', href);
      cloneLinkElement.setAttribute('id', id + '-clone');
      linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);
      cloneLinkElement.addEventListener('load', () => {
        linkElement.remove();
        cloneLinkElement.setAttribute('id', id);
      });
    }
  }

  public isIE(): boolean {
    return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
