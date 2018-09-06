import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChildContainerPage } from './child-container';

@NgModule({
  declarations: [
    ChildContainerPage,
  ],
  imports: [
    IonicPageModule.forChild(ChildContainerPage),
  ],
})
export class ChildContainerPageModule {}
