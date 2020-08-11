import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(
    public toastController: ToastController,
    private translateService: TranslateService
  ) {}

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: this.translateService.instant(msg),
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
}
