import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar.component';
import { CalendarModule } from 'primeng/calendar';
@NgModule({
  declarations: [TopbarComponent],
  exports: [TopbarComponent],
  imports: [
    CommonModule,
    CalendarModule
  ]
})
export class TopbarModule { }
