import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PermissionsService } from '../../shared/services/permissions.service';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  profilePage:any = ProfilePage;

  constructor(public navCtrl: NavController) {

  }
}
