import { Injectable } from '@angular/core';
import { AlertsService} from "./alerts.service";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Injectable()
export class BarcodeService {
  public barcodeData;
  constructor(public alert: AlertsService,
              public barcodeScanner: BarcodeScanner,) { }

  scan() {
    const options = {
      preferFrontCamera: false, // iOS and Android
      showFlipCameraButton: true, // iOS and Android
      showTorchButton: true, // iOS and Android
      torchOn: false, // Android, launch with the torch switched on (if available)
      prompt: 'Place a barcode inside the scan area', // Android
      // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
      resultDisplayDuration: 500,
      formats: 'QR_CODE,CODE_39', // default: all but PDF_417 and RSS_EXPANDED
      // Android only (portrait|landscape), default unset so it rotates with the device
      orientation: 'portrait',
      disableAnimations: true, // iOS
      disableSuccessBeep: false // iOS
    };

    this.barcodeScanner
      .scan(options)
      .then((data) => {
        this.barcodeData = data;
      })
      .catch((error) => {
        this.alert.doAlert('Alert!', error);
      });

    return this.barcodeData;
  }
}
