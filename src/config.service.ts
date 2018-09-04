import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {

  private _url: string = './assets/config.json';
  config: any;

  constructor(private http: HttpClient) {
  }

  load() {
    return new Promise((resolve) => {
      this.http.get(this._url).subscribe(
        config => {
          this.config = config;
          resolve();
        });
    });
  }
}
