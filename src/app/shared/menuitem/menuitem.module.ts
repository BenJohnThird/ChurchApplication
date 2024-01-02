import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuitemComponent } from './menuitem.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MenuitemComponent],
  exports: [MenuitemComponent],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class MenuitemModule { }
