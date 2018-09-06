import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParentContainerPage } from './parent-container';

@NgModule({
  declarations: [
    ParentContainerPage,
  ],
  imports: [
    IonicPageModule.forChild(ParentContainerPage),
  ],
})
export class ParentContainerPageModule {}
