import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Image } from '../domain/image';

@Injectable()
export class PhotoService {

  constructor(private http: HttpClient) {
  }

  public getImages() {
    return this.http.get<any>('assets/demo/data/photos.json')
      .toPromise()
      .then(res => res.data as Image[])
      .then(data => data);
  }
}
