import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { Observable } from 'rxjs';

@Injectable()
export class ContainerService {
  private _url = 'inventory/';
  config: any;
  constructor(private http: HttpClientService) {
  }

  searchContainer(searchParams): Observable<any> {
    const url = this._url + 'search/';
    return this.http.customGet(url, searchParams);
  }

  searchAllContainers(searchParams): Observable<any>{
    const url = this._url + 'searchAll';
    return this.http.customGet(url, searchParams);
  }

  getContainer(containerId): Observable<any> {
    const url = this._url + 'containers/' + containerId;
    return this.http.get(url);
  }

}
