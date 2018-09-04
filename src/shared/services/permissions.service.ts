import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { LogoutService } from './logout.service';
import { ConfigService } from '../../config.service';
/*
import { Observable } from 'rxjs';
import { Response } from '@angular/http';
import { CONSTANTS } from '../../app/core/constants';
import * as _ from 'lodash';
*/

@Injectable()
export class PermissionsService {
  private url = 'dashboard/';
  _dashboard: any;
  counter = 25;
  modulePermissions: any;

  _modulePermissions: any;
  _functionPermissions: any;

  constructor(private logoutService: LogoutService,
              private http: HttpClientService,
              private configService: ConfigService) {
  }

  setDashboard() {
    return this.http.post(this.url, {id: 1});
  }

  getDashboard() {
    return this._dashboard;
  }

}
