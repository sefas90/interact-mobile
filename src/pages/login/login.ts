import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService} from "@ngx-translate/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { InformationService } from '../../shared/services/information.service';
import { HomePage } from "../home/home";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  signInForm: FormGroup;
  public username;
  public password;

  constructor(public nav: NavController,
              public formBuilder: FormBuilder,
              public translate: TranslateService,
              public authService: AuthenticationService,
              public informationService: InformationService) {

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
          this.nav.setRoot(HomePage);
        }, error => {
          console.log(error);
        }
      )
    }
  }
}
