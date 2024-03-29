import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../domain/product';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {
  }

  public getProductsSmall() {
    return this.http.get<any>('assets/demo/data/products-small.json')
      .toPromise()
      .then(res => res.data as Product[])
      .then(data => data);
  }

  public getProducts() {
    return this.http.get<any>('assets/demo/data/products.json')
      .toPromise()
      .then(res => res.data as Product[])
      .then(data => data);
  }

  public getProductsMixed() {
    return this.http.get<any>('assets/demo/data/products-mixed.json')
      .toPromise()
      .then(res => res.data as Product[])
      .then(data => data);
  }

  public getProductsWithOrdersSmall() {
    return this.http.get<any>('assets/demo/data/products-orders-small.json')
      .toPromise()
      .then(res => res.data as Product[])
      .then(data => data);
  }
}
