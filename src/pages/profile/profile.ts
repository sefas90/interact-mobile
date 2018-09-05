import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InformationService } from "../../shared/services/information.service";
import { LogoutService } from "../../shared/services/logout.service";
import { LoginPage } from "../login/login";
import { AlertsService } from "../../shared/services/alerts.service";

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit{
  enableNotifications = true;
  language: any;
  languages = ['English', 'Spanish'];
  public userInfo: any;

  constructor(private nav: NavController,
              private alert: AlertsService,
              private informationService: InformationService,
              private logout: LogoutService) {
  }

  ngOnInit(){
    this.userInfo = this.informationService.getAttributeFromJsonData('loggedUser');
    this.userInfo.imageUrl = 'assets/imgs/g1.jpg';
  }

  //TODO
  toggleNotifications() {
  }

  logOut() {
    this.logout.logout().subscribe( data => {
      this.alert.doAlert('Success', 'logout');
      this.nav.setRoot(LoginPage);
      }, error =>{
      this.alert.doAlert('error', error);
      }
    );
  }
}
