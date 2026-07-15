import { DateBuilder } from './base';
import type { ConfigType, OpUnitType } from 'dayjs';

declare module './base' {
  interface DateBuilder {
    diff(date: ConfigType, unit?: OpUnitType): number;

    diffInDays(date: ConfigType): number;
    diffInMonths(date: ConfigType): number;
    diffInYears(date: ConfigType): number;
    diffInHours(date: ConfigType): number;
    diffInMinutes(date: ConfigType): number;
    diffInSeconds(date: ConfigType): number;

    isBefore(date: ConfigType): boolean;
    isAfter(date: ConfigType): boolean;
    isSame(date: ConfigType): boolean;
    isBetween(start: ConfigType, end: ConfigType): boolean;

    isSameDay(date: ConfigType): boolean;
    isSameMonth(date: ConfigType): boolean;
    isSameYear(date: ConfigType): boolean;

    isPast(): boolean;
    isFuture(): boolean;
  }
}

DateBuilder.prototype.diff = function (
  date: ConfigType,
  unit?: OpUnitType,
): number {
  return this.date.diff(date, unit);
};

DateBuilder.prototype.diffInDays = function (date: ConfigType): number {
  return this.date.diff(date, 'day');
};

DateBuilder.prototype.diffInMonths = function (date: ConfigType): number {
  return this.date.diff(date, 'month');
};

DateBuilder.prototype.diffInYears = function (date: ConfigType): number {
  return this.date.diff(date, 'year');
};

DateBuilder.prototype.diffInHours = function (date: ConfigType): number {
  return this.date.diff(date, 'hour');
};

DateBuilder.prototype.diffInMinutes = function (date: ConfigType): number {
  return this.date.diff(date, 'minute');
};

DateBuilder.prototype.diffInSeconds = function (date: ConfigType): number {
  return this.date.diff(date, 'second');
};

DateBuilder.prototype.isBefore = function (date: ConfigType): boolean {
  return this.date.isBefore(date);
};

DateBuilder.prototype.isAfter = function (date: ConfigType): boolean {
  return this.date.isAfter(date);
};

DateBuilder.prototype.isSame = function (date: ConfigType): boolean {
  return this.date.isSame(date);
};

DateBuilder.prototype.isBetween = function (
  start: ConfigType,
  end: ConfigType,
): boolean {
  return this.date.isAfter(start) && this.date.isBefore(end);
};

DateBuilder.prototype.isSameDay = function (date: ConfigType): boolean {
  return this.date.isSame(date, 'day');
};

DateBuilder.prototype.isSameMonth = function (date: ConfigType): boolean {
  return this.date.isSame(date, 'month');
};

DateBuilder.prototype.isSameYear = function (date: ConfigType): boolean {
  return this.date.isSame(date, 'year');
};

DateBuilder.prototype.isPast = function (): boolean {
  return this.date.isBefore(new Date());
};

DateBuilder.prototype.isFuture = function (): boolean {
  return this.date.isAfter(new Date());
};
