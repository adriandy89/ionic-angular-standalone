/**
 *
 * @author Adrian Duardo Yanes
 * @license Private
 */

import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { IToastInterface } from '../interfaces';

abstract class NotificationClass {
  abstract notify(messageProps: IToastInterface): Promise<void>;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService implements NotificationClass {
  constructor(private toastController: ToastController) {}

  async notify({
    typeOfNotification,
    message,
  }: IToastInterface): Promise<void> {

    const toast = await this.toastController.create({
      message,
      duration: 3000,
      position: 'top',
      cssClass: typeOfNotification,
      buttons: [
        {
          icon: 'close',
          role: 'cancel',
        },
      ],
    });
    await toast.present();
  }
}
