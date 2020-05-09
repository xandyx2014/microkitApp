import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { LocalNotifications, LocalNotificationScheduleResult } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class RecordatorioService {

  constructor() {
    Plugins.LocalNotifications.addListener('localNotificationReceived', (notification) => {
      console.log('Notification: ', notification);
    })

    Plugins.LocalNotifications.addListener('localNotificationActionPerformed', (notification) => {
      console.log('Notification action performed', notification);
    });
  }
  async crear() {
    const notify = await Plugins.LocalNotifications.schedule({
      notifications: [{
        title: 'Get 10% off!',
        body: 'Swipe now to learn more',
        // Get random id to test cancel
        id: Math.floor(Math.random() * 10),
        sound: 'beep.aiff',
        attachments: [
          { id: 'face', url: 'res://public/assets/ionitron.png' }
        ],
        actionTypeId: 'OPEN_PRODUCT',
        extra: {
          productId: 'PRODUCT-1'
        }
      }]
    });
    console.log(notify);
  }
}
