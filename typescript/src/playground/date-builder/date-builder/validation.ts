import { DateBuilder } from './base';

declare module './base' {
  interface DateBuilder {
    isValid(): boolean;

    isToday(): boolean;
    isTomorrow(): boolean;
    isYesterday(): boolean;

    isWeekend(): boolean;
    isWeekday(): boolean;

    isCurrentMonth(): boolean;
    isCurrentYear(): boolean;

    isLeapYear(): boolean;
  }
}

DateBuilder.prototype.isValid = function (): boolean {
  return this.date.isValid();
};

DateBuilder.prototype.isToday = function (): boolean {
  return this.date.isSame(new Date(), 'day');
};

DateBuilder.prototype.isTomorrow = function (): boolean {
  return this.date.isSame(this.date.toDate(), 'day');
};

DateBuilder.prototype.isYesterday = function (): boolean {
  return this.date.isSame(this.date.toDate(), 'day');
};

DateBuilder.prototype.isWeekend = function (): boolean {
  const day = this.date.day();

  return day === 0 || day === 6;
};

DateBuilder.prototype.isWeekday = function (): boolean {
  return !this.isWeekend();
};

DateBuilder.prototype.isCurrentMonth = function (): boolean {
  return this.date.isSame(new Date(), 'month');
};

DateBuilder.prototype.isCurrentYear = function (): boolean {
  return this.date.isSame(new Date(), 'year');
};

DateBuilder.prototype.isLeapYear = function (): boolean {
  const year = this.date.year();

  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
