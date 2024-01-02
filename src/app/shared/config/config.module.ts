import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config.component';
import { PrimengModule } from '../../modules/primeng/primeng.module';

@NgModule({
  declarations: [ConfigComponent],
  exports: [ConfigComponent],
  imports: [
    CommonModule,
    PrimengModule,
  ]
})
export class ConfigModule { }
