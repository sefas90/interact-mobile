import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class AlertsService {
  constructor(public alertCtrl: AlertController) { }

  doAlert(title, error) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: error.message,
      buttons: ['Ok']
    });

    alert.present();
  }

  doConfirm(title, message, okOptions, cancelOptions) {
    const alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: cancelOptions.button,
          handler: () => {
            console.log(cancelOptions.action);
          }
        },
        {
          text: okOptions.button,
          handler: () => {
            console.log(okOptions.action);
          }
        }
      ]
    });

    alert.present();
  }
}
