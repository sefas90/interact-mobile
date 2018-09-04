import { Injectable } from '@angular/core';
import { InformationService } from './information.service';

@Injectable()
export class LogoutService {

  constructor(private informationService: InformationService) {
  }

  public logout(): void {
    this.informationService.removeData();
  }

}
