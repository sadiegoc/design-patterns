import { DateBuilder } from './base';

declare module './base' {
  interface DateBuilder {
    year(): number;
    month(): number;
    dateOfMonth(): number;
    day(): number;
    hour(): number;
    minute(): number;
    second(): number;
    millisecond(): number;
  }
}

DateBuilder.prototype.year = function (): number {
  return this.date.year();
};

DateBuilder.prototype.month = function (): number {
  return this.date.month();
};

DateBuilder.prototype.dateOfMonth = function (): number {
  return this.date.date();
};

DateBuilder.prototype.day = function (): number {
  return this.date.day();
};

DateBuilder.prototype.hour = function (): number {
  return this.date.hour();
};

DateBuilder.prototype.minute = function (): number {
  return this.date.minute();
};

DateBuilder.prototype.second = function (): number {
  return this.date.second();
};

DateBuilder.prototype.millisecond = function (): number {
  return this.date.millisecond();
};
