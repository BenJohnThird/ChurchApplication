import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightPanelComponent } from './right-panel.component';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [RightPanelComponent],
  exports: [RightPanelComponent],
  imports: [
    CommonModule,
    CheckboxModule,
    CalendarModule
  ]
})
export class RightPanelModule { }
