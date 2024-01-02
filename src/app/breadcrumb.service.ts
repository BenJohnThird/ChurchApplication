import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MenuItem } from 'primeng/api';

@Injectable()
export class BreadcrumbService {

  private itemsSource = new Subject<MenuItem[]>();

  public itemsHandler = this.itemsSource.asObservable();

  public setItems(items: MenuItem[]): void {
    this.itemsSource.next(items);
  }
}
