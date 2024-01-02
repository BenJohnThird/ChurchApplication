import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MenuService {

  private menuSource = new Subject<string>();
  private resetSource = new Subject();

  public menuSource$ = this.menuSource.asObservable();
  public resetSource$ = this.resetSource.asObservable();

  public onMenuStateChange(key: string) {
    this.menuSource.next(key);
  }

  public reset() {
    this.resetSource.next(null);
  }
}
