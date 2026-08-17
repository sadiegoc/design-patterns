import { Notification } from './notification';

export class PushNotification implements Notification {
  private recipients: string[] = [];
  private message: string = '';

  to(recipient: string): Notification {
    this.recipients.push(recipient);
    return this;
  }

  send(message: string): void {
    if (this.recipients.length == 0) {
      console.log('Não há destinatários configurados.');
      return;
    }

    this.message = message;
    console.log(`Enviando Push para [${this.recipients.join(', ')}]:`);
    console.log(this.message);
  }
}
