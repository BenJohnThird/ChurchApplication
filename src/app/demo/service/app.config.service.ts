import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AppConfig } from '../domain/appconfig';

@Injectable()
export class ConfigService {

  public config: AppConfig = {
    theme: 'lara-light-indigo',
    dark: false,
    inputStyle: 'outlined',
    ripple: true
  };

  private configUpdate = new Subject<AppConfig>();

  public configUpdate$ = this.configUpdate.asObservable();

  public updateConfig(config: AppConfig) {
    this.config = config;
    this.configUpdate.next(config);
  }

  public getConfig() {
    return this.config;
  }
}
