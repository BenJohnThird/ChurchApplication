import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppNotfoundComponent } from './pages/app.notfound.component';
import { AppErrorComponent } from './pages/app.error.component';
import { AppAccessdeniedComponent } from './pages/app.accessdenied.component';
import { AppLoginComponent } from './pages/app.login.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'login',
    component: AppLoginComponent
  },
  {
    path: 'style',
    redirectTo: 'style-index',
    pathMatch: 'full',
  },
  {
    path: 'style-index',
    loadChildren: () => import('src/app/style-index/style-index.module')
      .then(m => m.StyleIndexModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('src/app/dashboard/dashboard.module')
      .then(m => m.DashboardModule),
  },
  {path: 'error', component: AppErrorComponent},
  {path: 'accessdenied', component: AppAccessdeniedComponent},
  {path: 'notfound', component: AppNotfoundComponent},
  {path: '**', redirectTo: '/notfound'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
