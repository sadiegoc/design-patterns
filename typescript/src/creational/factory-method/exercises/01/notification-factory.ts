import { EmailNotification } from './notifications/email-notification';
import { Notification } from './notifications/notification';
import { PushNotification } from './notifications/push-notification';
import { SMSNotification } from './notifications/sms-notification';

export class NotificationFactory {
  static createSMS(): Notification {
    return new SMSNotification();
  }

  static createEmail(): Notification {
    return new EmailNotification();
  }

  static createPush(): Notification {
    return new PushNotification();
  }
}
