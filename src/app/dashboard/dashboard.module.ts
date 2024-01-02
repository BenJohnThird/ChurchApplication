import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MenuModule } from '../shared/menu/menu.module';
import { TopbarModule } from '../shared/topbar/topbar.module';
import { RightPanelModule } from '../shared/right-panel/right-panel.module';
import { BreadcrumbModule } from '../shared/breadcrumb/breadcrumb.module';
import { FooterModule } from '../shared/footer/footer.module';
import { ConfigModule } from '../shared/config/config.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from 'primeng/api';
import { CheckboxModule } from 'primeng/checkbox';
import { SongsListComponent } from './songs-list/songs-list.component';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    DashboardComponent,
    MainComponent,
    SongsListComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MenuModule,
    TopbarModule,
    RightPanelModule,
    BreadcrumbModule,
    FooterModule,
    ConfigModule,
    CheckboxModule,
    InputTextModule,
  ]
})
export class DashboardModule { }
