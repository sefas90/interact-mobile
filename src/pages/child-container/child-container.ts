import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContainerService } from "../../shared/services/container.service";
import { BarcodeService } from "../../shared/services/barcode.service";
import { AlertsService } from "../../shared/services/alerts.service";
import { ParentContainerPage } from "../parent-container/parent-container";
import * as _ from "lodash";

@IonicPage()
@Component({
  selector: 'page-child-container',
  templateUrl: 'child-container.html',
})
export class ChildContainerPage {

  public container: object = {
    drumNumber: '',
    containerType: '',
    containerSize: '',
    unitOfMeasure: ''
  };
  public containerList: Array<object>;
  public barcodeData;

  constructor(public nav: NavController,
              public navParams: NavParams,
              private containerService: ContainerService,
              private barcodeService: BarcodeService,
              private alert: AlertsService) {
    const container = navParams.get('container');
    this.containerService.getContainer(container.id).subscribe(
      response => {
        this.container = response;
        this.containerList = response.inventories;
      }, error => {
        this.alert.doAlert('Error loading Container', 'Error:'+  error);
        this.nav.push(ParentContainerPage);
      }
    );
  }

  scan() {
    this.barcodeData = this.barcodeService.scan();
    const searchParams = {
      containerNumber: this.barcodeData.text
    };
    this.containerService.searchContainer(searchParams).subscribe(
      response => {
        let container = _.find(response, {containerName: searchParams.containerNumber});
        this.containerList.push(container);
      }, error => {
        console.log(error);
      }
    );
  }
  //TODO replace with scan for device test
  scanWeb() {
    const searchParams = {
      containerNumber: '1-000002-1'
    };
    this.containerService.searchAllContainers(searchParams).subscribe(
      response => {
        let canAdd = false;
        let container = _.find(response, {containerName: searchParams.containerNumber});
        _.forEach(this.containerList, function (containerList) {
          canAdd = !_.isEqual(_.get(containerList, 'id'), _.get(container, 'id'));
          return canAdd;
        });
        if (canAdd) {
          this.containerList.push(container);
        } else {
          const message = {
            message: 'container already in parent container'
          };
          this.alert.doAlert('Error', message);
        }
      }, error => {
        console.log(error);
      }
    );
  }
}
