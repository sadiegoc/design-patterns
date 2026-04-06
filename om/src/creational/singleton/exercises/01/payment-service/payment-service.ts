import { Log } from "../logger/log";

const log = Log.getInstance();

export class PaymentService {
  processPayment(amount: number): boolean {
    log.log(`Processing payment: ${amount}`);

    if (!this.validatePayment(amount)) {
      log.error('Invalid payment amount');
      return false;
    };

    if (amount < 5) {
      log.warn('Very low payment amount')
    }

    log.log('Payment processed.')

    return true;
  }

  refundPayment(amount: number): boolean {
    log.log(`Refund payment: ${amount}`);

    if (!this.validatePayment(amount)) {
      log.error('Invalid payment amount');
      return false;
    };

    return true;
  }

  private validatePayment(amount: number): boolean {
    return amount > 0;
  }
}
