import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StyleIndexRoutingModule } from './style-index-routing.module';
import { StyleIndexComponent } from './style-index.component';
import { MenuModule } from '../shared/menu/menu.module';
import { BreadcrumbModule } from '../shared/breadcrumb/breadcrumb.module';
import { TopbarModule } from '../shared/topbar/topbar.module';
import { RightPanelModule } from '../shared/right-panel/right-panel.module';
import { FooterModule } from '../shared/footer/footer.module';
import { ConfigModule } from '../shared/config/config.module';

@NgModule({
  declarations: [
    StyleIndexComponent
  ],
  imports: [
    CommonModule,
    StyleIndexRoutingModule,
    MenuModule,
    BreadcrumbModule,
    TopbarModule,
    RightPanelModule,
    FooterModule,
    ConfigModule
  ]
})
export class StyleIndexModule { }
