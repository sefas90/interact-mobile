import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationService {
  private _url = 'authentication/login';
  config: any;
  constructor(private http: HttpClientService) {
  }

  authenticateUser(user): Observable<any> {
    const url = this._url;
    return this.http.post(url, user);
  }

}
