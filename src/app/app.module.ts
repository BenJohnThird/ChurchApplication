import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Application Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppNotfoundComponent } from './pages/app.notfound.component';
import { AppErrorComponent } from './pages/app.error.component';
import { AppAccessdeniedComponent } from './pages/app.accessdenied.component';
import { AppLoginComponent } from './pages/app.login.component';
import { AppCrudComponent } from './pages/app.crud.component';
import { AppCalendarComponent } from './pages/app.calendar.component';
import { AppTimelineDemoComponent } from './pages/app.timelinedemo.component';

// Demo vendor-styles
import { DashboardDemoComponent } from './demo/view/dashboarddemo.component';
import { FormLayoutDemoComponent } from './demo/view/formlayoutdemo.component';
import { FloatLabelDemoComponent } from './demo/view/floatlabeldemo.component';
import { InvalidStateDemoComponent } from './demo/view/invalidstatedemo.component';
import { InputDemoComponent } from './demo/view/inputdemo.component';
import { ButtonDemoComponent } from './demo/view/buttondemo.component';
import { TableDemoComponent } from './demo/view/tabledemo.component';
import { ListDemoComponent } from './demo/view/listdemo.component';
import { TreeDemoComponent } from './demo/view/treedemo.component';
import { PanelsDemoComponent } from './demo/view/panelsdemo.component';
import { OverlaysDemoComponent } from './demo/view/overlaysdemo.component';
import { MediaDemoComponent } from './demo/view/mediademo.component';
import { MenusComponent } from './demo/view/menus/menus.component';
import { MessagesDemoComponent } from './demo/view/messagesdemo.component';
import { MiscDemoComponent } from './demo/view/miscdemo.component';
import { EmptyDemoComponent } from './demo/view/emptydemo.component';
import { ChartsDemoComponent } from './demo/view/chartsdemo.component';
import { FileDemoComponent } from './demo/view/filedemo.component';
import { DocumentationComponent } from './demo/view/documentation.component';
import { IconsComponent } from './utilities/icons.component';
import { BlocksComponent } from './blocks/blocks/blocks.component';
import { BlockViewer } from './blocks/blockviewer/blockviewer.component';

// Demo services
import { CountryService } from './demo/service/countryservice';
import { EventService } from './demo/service/eventservice';
import { NodeService } from './demo/service/nodeservice';
import { CustomerService } from './demo/service/customerservice';
import { PhotoService } from './demo/service/photoservice';
import { ProductService } from './demo/service/productservice';
import { IconService } from './demo/service/iconservice';
import { ConfigService } from './demo/service/app.config.service';

// Application services
import { BreadcrumbService } from './breadcrumb.service';
import { MenuService } from './app.menu.service';
import { AppCodeModule } from './blocks/app-code/app.code.component';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PrimengModule } from './modules/primeng/primeng.module';

@NgModule({
  imports: [
    PrimengModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AppCodeModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    AppNotfoundComponent,
    AppErrorComponent,
    AppAccessdeniedComponent,
    AppLoginComponent,
    AppCrudComponent,
    AppCalendarComponent,
    AppTimelineDemoComponent,
    DashboardDemoComponent,
    FormLayoutDemoComponent,
    FloatLabelDemoComponent,
    InvalidStateDemoComponent,
    InputDemoComponent,
    ButtonDemoComponent,
    TableDemoComponent,
    ListDemoComponent,
    TreeDemoComponent,
    PanelsDemoComponent,
    OverlaysDemoComponent,
    MediaDemoComponent,
    MenusComponent,
    MessagesDemoComponent,
    MessagesDemoComponent,
    MiscDemoComponent,
    ChartsDemoComponent,
    EmptyDemoComponent,
    FileDemoComponent,
    DocumentationComponent,
    IconsComponent,
    BlocksComponent,
    BlockViewer,
    LandingPageComponent,
  ],
  providers: [
    CountryService, CustomerService, EventService, IconService, NodeService,
    PhotoService, ProductService, MenuService, BreadcrumbService, ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
