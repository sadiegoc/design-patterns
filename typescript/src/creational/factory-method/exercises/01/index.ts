import { NotificationFactory } from './notification-factory';

const emailNotification = NotificationFactory.createEmail();
const smsNotification = NotificationFactory.createSMS();
const pushNotification = NotificationFactory.createPush();

emailNotification.to('Diego').to('Núbia').send('Olá, mundo!');
smsNotification.send('Mensagem sem destinatário');
pushNotification.to('Kaio').send('E aí, minha puta.');
