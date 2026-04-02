import { NotificationService } from "./notification-service/notification-service";
import { PaymentService } from "./payment-service/payment-service";
import { UserService } from "./user-service/user-service";

const userService = new UserService();
const paymentService = new PaymentService();
const notificationService = new NotificationService();

async function notifications() {
  await notificationService.sendEmail('sa.diego.c@gmail.com', 'Você é um cara legal.');
  await notificationService.sendSMS('83998338864', 'Você é um cara bonito.');
  await notificationService.sendPushNotification('sadiegoc', 'Você é um cara gostoso.');
}

userService.createUser();
console.log(userService.getUser());
userService.createUser('Diego');
console.log(userService.getUser());

userService.deleteUser();
userService.createUser('Diego', 'sadiegoc');
console.log(userService.getUser());
userService.updateUser('Diego');
userService.updateUser('Diego Sá', 'sa.diego.c');
console.log(userService.getUser());
userService.deleteUser();
console.log(userService.getUser());

paymentService.processPayment(-10);
paymentService.processPayment(0);
paymentService.processPayment(3);
paymentService.processPayment(20);

paymentService.refundPayment(-10);
paymentService.refundPayment(0);
paymentService.refundPayment(10);

notifications();