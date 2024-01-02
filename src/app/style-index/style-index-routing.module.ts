import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StyleIndexComponent } from './style-index.component';
import { LandingPageComponent } from '../pages/landing-page/landing-page.component';
import { DashboardDemoComponent } from '../demo/view/dashboarddemo.component';
import { FormLayoutDemoComponent } from '../demo/view/formlayoutdemo.component';
import { FloatLabelDemoComponent } from '../demo/view/floatlabeldemo.component';
import { InvalidStateDemoComponent } from '../demo/view/invalidstatedemo.component';
import { InputDemoComponent } from '../demo/view/inputdemo.component';
import { ButtonDemoComponent } from '../demo/view/buttondemo.component';
import { TableDemoComponent } from '../demo/view/tabledemo.component';
import { ListDemoComponent } from '../demo/view/listdemo.component';
import { TreeDemoComponent } from '../demo/view/treedemo.component';
import { PanelsDemoComponent } from '../demo/view/panelsdemo.component';
import { OverlaysDemoComponent } from '../demo/view/overlaysdemo.component';
import { MediaDemoComponent } from '../demo/view/mediademo.component';
import { MessagesDemoComponent } from '../demo/view/messagesdemo.component';
import { MiscDemoComponent } from '../demo/view/miscdemo.component';
import { ChartsDemoComponent } from '../demo/view/chartsdemo.component';
import { FileDemoComponent } from '../demo/view/filedemo.component';
import { IconsComponent } from '../utilities/icons.component';
import { EmptyDemoComponent } from '../demo/view/emptydemo.component';
import { AppCrudComponent } from '../pages/app.crud.component';
import { AppCalendarComponent } from '../pages/app.calendar.component';
import { AppTimelineDemoComponent } from '../pages/app.timelinedemo.component';
import { DocumentationComponent } from '../demo/view/documentation.component';
import { BlocksComponent } from '../blocks/blocks/blocks.component';

const routes: Routes = [
  {
    path: '',
    component: StyleIndexComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {path: 'dashboard', component: DashboardDemoComponent},
      {path: 'uikit/formlayout', component: FormLayoutDemoComponent},
      {path: 'uikit/floatlabel', component: FloatLabelDemoComponent},
      {path: 'uikit/invalidstate', component: InvalidStateDemoComponent},
      {path: 'uikit/input', component: InputDemoComponent},
      {path: 'uikit/button', component: ButtonDemoComponent},
      {path: 'uikit/table', component: TableDemoComponent},
      {path: 'uikit/list', component: ListDemoComponent},
      {path: 'uikit/tree', component: TreeDemoComponent},
      {path: 'uikit/panel', component: PanelsDemoComponent},
      {path: 'uikit/overlay', component: OverlaysDemoComponent},
      {path: 'uikit/media', component: MediaDemoComponent},
      {path: 'uikit/menu', loadChildren: () => import('../demo/view/menus/menus.module')
          .then(m => m.MenusModule)},
      {path: 'uikit/message', component: MessagesDemoComponent},
      {path: 'uikit/misc', component: MiscDemoComponent},
      {path: 'uikit/charts', component: ChartsDemoComponent},
      {path: 'uikit/file', component: FileDemoComponent},
      {path: 'utilities/icons', component: IconsComponent},
      {path: 'vendor-styles/empty', component: EmptyDemoComponent},
      {path: 'vendor-styles/crud', component: AppCrudComponent},
      {path: 'vendor-styles/calendar', component: AppCalendarComponent},
      {path: 'vendor-styles/timeline', component: AppTimelineDemoComponent},
      {path: 'components/charts', component: ChartsDemoComponent},
      {path: 'components/file', component: FileDemoComponent},
      {path: 'documentation', component: DocumentationComponent},
      {path: 'blocks', component: BlocksComponent},
      { path: 'landing', component: LandingPageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StyleIndexRoutingModule { }
