import { Injectable } from '@angular/core';
import { InformationService } from './information.service';
import { HttpClientService } from './http-client.service';
import { AlertsService } from "./alerts.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class LogoutService {
  private _url = 'authentication/logout';
  constructor(private informationService: InformationService,
              private http: HttpClientService,
              private alert: AlertsService ) {
  }

  logout(): Observable <boolean> {
    const url = this._url;
    return new Observable ((observer) => {
      this.http.get(url).subscribe(
        response => {
          this.informationService.removeData();
          observer.next(true);
          observer.complete();
        }, resultCode => {
          this.alert.doAlert('Error', resultCode.error);
          observer.next(false);
          observer.complete();
        }
      )
    });
  }
}
