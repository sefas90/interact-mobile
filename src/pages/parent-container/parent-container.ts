import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeService } from "../../shared/services/barcode.service";
import { ContainerService } from "../../shared/services/container.service";
import { ChildContainerPage } from "../child-container/child-container";
import { ProfilePage } from "../profile/profile";

import { AlertsService } from "../../shared/services/alerts.service";

import * as _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-parent-container',
  templateUrl: 'parent-container.html',
})
export class ParentContainerPage {
  public barcodeData;
  public container: object;
  profilePage:any = ProfilePage;
  constructor(private nav: NavController,
              private navParams: NavParams,
              private barcodeService: BarcodeService,
              private containerService: ContainerService,
              private alert: AlertsService) {
  }

  scan() {
    this.barcodeData = this.barcodeService.scan();
    this.alert.doAlert('data', {message: this.barcodeData});
    const searchParams = {
      containerNumber: this.barcodeData.text
    };

    this.containerService.searchContainer(searchParams).subscribe(
      response => {
        this.container = _.find(response.result, {drumName: searchParams.containerNumber});
        this.nav.push(ChildContainerPage, {container: this.container});
      }, error => {
        console.log(error);
      }
    );
  }
  //TODO replace with scan for device test
  scanWeb() {
    const searchParams = {
      containerNumber: 'IC18--00000002'
    };
    this.containerService.searchContainer(searchParams).subscribe(
      response => {
        this.container = _.find(response.result, {drumName: searchParams.containerNumber});
        this.nav.push(ChildContainerPage, {container: this.container});
      }, error => {
        console.log(error);
      }
    );
  }
}
