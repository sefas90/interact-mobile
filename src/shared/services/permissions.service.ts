import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { LogoutService } from './logout.service';
import { ConfigService } from '../../config.service';
import { Observable } from "rxjs";
import { CONSTANTS } from "../../app/core/constants";
/*
import { Observable } from 'rxjs';
import { Response } from '@angular/http';
import { CONSTANTS } from '../../app/core/constants';
import * as _ from 'lodash';
*/

@Injectable()
export class PermissionsService {
  private _url = 'permissions/';
  private static readonly _resource_level = 1;
  private static _permissions: any;

  _dashboard: any;
  counter = 25;
  modulePermissions: any;

  _modulePermissions: any;
  _functionPermissions: any;

  constructor(private logoutService: LogoutService,
              private http: HttpClientService,
              private configService: ConfigService) {
  }

  setPermissions(userId): Observable <any> {
    const url = this._url + 'user/' + userId + CONSTANTS.SEPARATOR + 'resourcelevel/' + PermissionsService._resource_level;
    return this.http.get(url);
  }

  setDashboard() {
    return this.http.post(this._url, {id: 1});
  }

  getPermissions() {
    return PermissionsService._permissions;
  }

}
