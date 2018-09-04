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
    const user = this.informationService.getAttributeFromData('user');
    if (user === null) {
      return headers;
    }

    headers.append('Authorization', 'Bearer ' + user.token);
    headers.append('Content-Type', 'application/json');
  }


  get(url) {
    const headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.get(this.urlBase + url, {
      headers: headers
    });
  }

  post(url, data) {
    const headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.post(this.urlBase + url, data, {
      headers: headers
    });
  }

  patch(url, data) {
    const headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.patch(this.urlBase + url, data, {
      headers: headers
    });
  }

  put(url, data) {
    const headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.put(this.urlBase + url, data, {
      headers: headers
    });
  }

  delete(url) {
    const headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.delete(this.urlBase + url, {
      headers: headers
    });
  }
}
