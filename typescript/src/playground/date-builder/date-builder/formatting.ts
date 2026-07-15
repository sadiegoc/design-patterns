import { DateBuilder } from './base';

declare module './base' {
  interface DateBuilder {
    format(pattern?: string): string;
    formatDate(): string;
    formatDateTime(): string;
    formatTime(): string;
    formatISO(): string;
    formatRFC(): string;
    formatBrazilian(): string;
    formatDatabase(): string;
  }
}

DateBuilder.prototype.format = function (
  pattern = 'YYYY-MM-DD HH:mm:ss',
): string {
  return this.date.format(pattern);
};

DateBuilder.prototype.formatDate = function (): string {
  return this.date.format('YYYY-MM-DD');
};

DateBuilder.prototype.formatDateTime = function (): string {
  return this.date.format('YYYY-MM-DD HH:mm:ss');
};

DateBuilder.prototype.formatTime = function (): string {
  return this.date.format('HH:mm:ss');
};

DateBuilder.prototype.formatISO = function (): string {
  return this.date.toISOString();
};

DateBuilder.prototype.formatRFC = function (): string {
  return this.date.toDate().toUTCString();
};

DateBuilder.prototype.formatBrazilian = function (): string {
  return this.date.format('DD/MM/YYYY HH:mm:ss');
};

DateBuilder.prototype.formatDatabase = function (): string {
  return this.date.format('YYYY-MM-DD HH:mm:ss');
};
