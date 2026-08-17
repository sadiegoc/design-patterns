export interface Notification {
  to(recipient: string): Notification;
  send(message: string): void;
}
