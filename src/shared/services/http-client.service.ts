import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../../config.service';
import { InformationService } from './information.service';

@Injectable()
export class HttpClientService {

  config: any;
  urlBase: string;

  constructor(private http: HttpClient,
              private informationService: InformationService,
              private configService: ConfigService) {
    this.urlBase = configService.config.endpoint;
  }

  createAuthorizationHeader(headers: HttpHeaders) {
    const token = this.informationService.getAttributeFromLocalStorage('token');
    if (token === null) {
      return headers;
    }

    headers = headers.append('X-Authorization', 'Bearer ' + token);
    return headers;
  }


  get(url) {
    let headers = new HttpHeaders();
    headers = this.createAuthorizationHeader(headers);
    return this.http.get(this.urlBase + url, {
      headers: headers
    });
  }

  post(url, data) {
    let headers = new HttpHeaders();
    headers = this.createAuthorizationHeader(headers);
    return this.http.post(this.urlBase + url, data, {
      headers: headers
    });
  }

  patch(url, data) {
    let headers = new HttpHeaders();
    headers = this.createAuthorizationHeader(headers);
    return this.http.patch(this.urlBase + url, data, {
      headers: headers
    });
  }

  put(url, data) {
    let headers = new HttpHeaders();
    headers = this.createAuthorizationHeader(headers);
    return this.http.put(this.urlBase + url, data, {
      headers: headers
    });
  }

  delete(url) {
    let headers = new HttpHeaders();
    headers = this.createAuthorizationHeader(headers);
    return this.http.delete(this.urlBase + url, {
      headers: headers
    });
  }
}
