import { Log } from '../logger/log';

const log = Log.getInstance();

async function send(to: string, message: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      // console.log('-----------------------------------');
      // console.log(`\nto: ${to};\nmessage: ${message}\n`);
      // console.log('-----------------------------------');
      return resolve(false);
    }, 2000)
  });
}

export class NotificationService {
  async sendEmail(to: string, message: string): Promise<void> {
    log.log(`Sending e-mail to ${to}: ${message}`);

    const ok = await send(to, message);

    if (ok) {
      log.log('E-mail sent successfully!');
    } else {
      log.error('Failed to send e-mail.');
    }
  }
  
  async sendSMS(to: string, message: string): Promise<void> {
    log.log(`Sending SMS to ${to}: ${message}`);
  
    const ok = await send(to, message);
  
    if (ok) {
      log.log('SMS sent successfully!');
    } else {
      log.error('Failed to send SMS.');
    }
  }
  
  async sendPushNotification(userId: string, message: string): Promise<void> {
    log.log(`Sending Notification to ${userId}: ${message}`);
  
    const ok = await send(userId, message);
  
    if (ok) {
      log.log('Notification sent successfully!');
    } else {
      log.error('Failed to send Notification.');
    }
  }
}
