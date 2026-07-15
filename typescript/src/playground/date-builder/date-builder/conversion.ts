import { DateBuilder } from './base';

declare module './base' {
  interface DateBuilder {
    unix(): number;
    valueOf(): number;
    toDate(): Date;
    toISOString(): string;
    toJSON(): string;
    toUnix(): number;
    toMilliseconds(): number;
    toObject(): Object;
    toArray(): number[];
    toString(): string;
    toUTCString(): string;
    toLocaleString(locale?: string): string;
    toLocaleDateString(locale?: string): string;
    toLocaleTimeString(locale?: string): string;
  }
}

DateBuilder.prototype.toDate = function (): Date {
  return this.date.toDate();
};

DateBuilder.prototype.toISOString = function (): string {
  return this.date.toISOString();
};

DateBuilder.prototype.toJSON = function (): string {
  return this.date.toJSON();
};

DateBuilder.prototype.toUnix = function (): number {
  return this.date.unix();
};

DateBuilder.prototype.toMilliseconds = function (): number {
  return this.date.valueOf();
};

DateBuilder.prototype.toObject = function (): {
  years: number;
  months: number;
  date: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
} {
  return {
    years: this.date.year(),
    months: this.date.month(),
    date: this.date.date(),
    hours: this.date.hour(),
    minutes: this.date.minute(),
    seconds: this.date.second(),
    milliseconds: this.date.millisecond(),
  };
};

DateBuilder.prototype.toArray = function (): [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
] {
  return [
    this.date.year(),
    this.date.month(),
    this.date.date(),
    this.date.hour(),
    this.date.minute(),
    this.date.second(),
    this.date.millisecond(),
  ];
};

DateBuilder.prototype.toString = function (): string {
  return this.date.toString();
};

DateBuilder.prototype.toUTCString = function (): string {
  return this.date.toDate().toUTCString();
};

DateBuilder.prototype.toLocaleString = function (locale?: string): string {
  return this.date.toDate().toLocaleString(locale);
};

DateBuilder.prototype.toLocaleDateString = function (locale?: string): string {
  return this.date.toDate().toLocaleDateString(locale);
};

DateBuilder.prototype.toLocaleTimeString = function (locale?: string): string {
  return this.date.toDate().toLocaleTimeString(locale);
};

DateBuilder.prototype.valueOf = function (): number {
  return this.date.valueOf();
};

DateBuilder.prototype.unix = function (): number {
  return this.date.unix();
};
