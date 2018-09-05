import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { InformationService } from '../../shared/services/information.service';
import { TabsPage } from '../tabs/tabs';

import { PermissionsService } from "../../shared/services/permissions.service";
import { AlertsService } from "../../shared/services/alerts.service";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  signInForm: FormGroup;
  public username;
  public password;

  constructor(public nav: NavController,
              public authService: AuthenticationService,
              public informationService: InformationService,
              public permissionsService: PermissionsService,
              public alert: AlertsService) {

    this.signInForm = new FormGroup({
      username: new FormControl(this.username, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ]),
      password: new FormControl(this.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ])
    });
  }

  login(signInForm) {
    if (signInForm.valid) {
      this.authService.authenticateUser(signInForm.value).subscribe(
        serviceUser => {
          this.informationService.setAttributesToData(serviceUser);
          this.permissionsService.setPermissions(serviceUser.id).subscribe(
            permissions => {
              if (permissions) {
                this.nav.setRoot(TabsPage);
              }
            }, resultCode => {
              this.alert.doAlert('Permissions Error','This user doesnt have enough permissions ' + resultCode.error);
            }
          );
        }, resultCode => {
          this.alert.doAlert('Login Error', resultCode.error);
        }
      )
    }
  }
}
