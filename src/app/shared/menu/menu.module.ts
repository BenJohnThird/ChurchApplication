import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuitemModule } from '../menuitem/menuitem.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [MenuComponent],
  exports: [MenuComponent],
  imports: [
    CommonModule,
    MenuitemModule,
    RouterModule,
  ]
})
export class MenuModule { }
