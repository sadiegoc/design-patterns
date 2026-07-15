import { DateBuilder } from './base';

declare module './base' {
  interface DateBuilder {
    setYear(value: number): DateBuilder;
    setMonth(value: number): DateBuilder;
    setDate(value: number): DateBuilder;
    setHour(value: number): DateBuilder;
    setMinute(value: number): DateBuilder;
    setSecond(value: number): DateBuilder;
    setMillisecond(value: number): DateBuilder;
  }
}

DateBuilder.prototype.setYear = function (value: number): DateBuilder {
  return new DateBuilder(this.date.year(value));
};

DateBuilder.prototype.setMonth = function (value: number): DateBuilder {
  return new DateBuilder(this.date.month(value));
};

DateBuilder.prototype.setDate = function (value: number): DateBuilder {
  return new DateBuilder(this.date.date(value));
};

DateBuilder.prototype.setHour = function (value: number): DateBuilder {
  return new DateBuilder(this.date.hour(value));
};

DateBuilder.prototype.setMinute = function (value: number): DateBuilder {
  return new DateBuilder(this.date.minute(value));
};

DateBuilder.prototype.setSecond = function (value: number): DateBuilder {
  return new DateBuilder(this.date.second(value));
};

DateBuilder.prototype.setMillisecond = function (value: number): DateBuilder {
  return new DateBuilder(this.date.millisecond(value));
};
