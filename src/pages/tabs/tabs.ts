import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ParentContainerPage } from "../parent-container/parent-container";
import { ChildContainerPage } from "../child-container/child-container";

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  homeTab: any;
  parentTab: any;
  childTab: any;
  tab4: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.homeTab = HomePage;
    this.parentTab = ParentContainerPage;
    this.childTab = ChildContainerPage;
  }

}
