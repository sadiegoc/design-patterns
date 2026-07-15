import { DateBuilder } from './base';
import type { ManipulateType, OpUnitType } from 'dayjs';

declare module './base' {
  interface DateBuilder {
    add(value: number, unit: ManipulateType): DateBuilder;
    subtract(value: number, unit: ManipulateType): DateBuilder;

    addDay(): DateBuilder;
    addDays(value: number): DateBuilder;
    addWeek(): DateBuilder;
    addWeeks(value: number): DateBuilder;
    addMonth(): DateBuilder;
    addMonths(value: number): DateBuilder;
    addYear(): DateBuilder;
    addYears(value: number): DateBuilder;

    subDay(): DateBuilder;
    subDays(value: number): DateBuilder;
    subWeek(): DateBuilder;
    subWeeks(value: number): DateBuilder;
    subMonth(): DateBuilder;
    subMonths(value: number): DateBuilder;
    subYear(): DateBuilder;
    subYears(value: number): DateBuilder;

    startOf(unit: OpUnitType): DateBuilder;
    endOf(unit: OpUnitType): DateBuilder;

    startOfDay(): DateBuilder;
    startOfWeek(): DateBuilder;
    startOfMonth(): DateBuilder;
    startOfYear(): DateBuilder;

    endOfDay(): DateBuilder;
    endOfWeek(): DateBuilder;
    endOfMonth(): DateBuilder;
    endOfYear(): DateBuilder;
  }
}

DateBuilder.prototype.add = function (
  value: number,
  unit: ManipulateType,
): DateBuilder {
  return new DateBuilder(this.date.add(value, unit));
};

DateBuilder.prototype.subtract = function (
  value: number,
  unit: ManipulateType,
): DateBuilder {
  return new DateBuilder(this.date.subtract(value, unit));
};

DateBuilder.prototype.addDay = function (): DateBuilder {
  return new DateBuilder(this.date.add(1, 'day'));
};

DateBuilder.prototype.addDays = function (value: number): DateBuilder {
  return new DateBuilder(this.date.add(value, 'day'));
};

DateBuilder.prototype.addWeek = function (): DateBuilder {
  return new DateBuilder(this.date.add(1, 'week'));
};

DateBuilder.prototype.addWeeks = function (value: number): DateBuilder {
  return new DateBuilder(this.date.add(value, 'week'));
};

DateBuilder.prototype.addMonth = function (): DateBuilder {
  return new DateBuilder(this.date.add(1, 'month'));
};

DateBuilder.prototype.addMonths = function (value: number): DateBuilder {
  return new DateBuilder(this.date.add(value, 'month'));
};

DateBuilder.prototype.addYear = function (): DateBuilder {
  return new DateBuilder(this.date.add(1, 'year'));
};

DateBuilder.prototype.addYears = function (value: number): DateBuilder {
  return new DateBuilder(this.date.add(value, 'year'));
};

DateBuilder.prototype.subDay = function (): DateBuilder {
  return new DateBuilder(this.date.subtract(1, 'day'));
};

DateBuilder.prototype.subDays = function (value: number): DateBuilder {
  return new DateBuilder(this.date.subtract(value, 'day'));
};

DateBuilder.prototype.subWeek = function (): DateBuilder {
  return new DateBuilder(this.date.subtract(1, 'week'));
};

DateBuilder.prototype.subWeeks = function (value: number): DateBuilder {
  return new DateBuilder(this.date.subtract(value, 'week'));
};

DateBuilder.prototype.subMonth = function (): DateBuilder {
  return new DateBuilder(this.date.subtract(1, 'month'));
};

DateBuilder.prototype.subMonths = function (value: number): DateBuilder {
  return new DateBuilder(this.date.subtract(value, 'month'));
};

DateBuilder.prototype.subYear = function (): DateBuilder {
  return new DateBuilder(this.date.subtract(1, 'year'));
};

DateBuilder.prototype.subYears = function (value: number): DateBuilder {
  return new DateBuilder(this.date.subtract(value, 'year'));
};

DateBuilder.prototype.startOf = function (unit: OpUnitType): DateBuilder {
  return new DateBuilder(this.date.startOf(unit));
};

DateBuilder.prototype.endOf = function (unit: OpUnitType): DateBuilder {
  return new DateBuilder(this.date.endOf(unit));
};

DateBuilder.prototype.startOfDay = function (): DateBuilder {
  return new DateBuilder(this.date.startOf('day'));
};

DateBuilder.prototype.startOfWeek = function (): DateBuilder {
  return new DateBuilder(this.date.startOf('week'));
};

DateBuilder.prototype.startOfMonth = function (): DateBuilder {
  return new DateBuilder(this.date.startOf('month'));
};

DateBuilder.prototype.startOfYear = function (): DateBuilder {
  return new DateBuilder(this.date.startOf('year'));
};

DateBuilder.prototype.endOfDay = function (): DateBuilder {
  return new DateBuilder(this.date.endOf('day'));
};

DateBuilder.prototype.endOfWeek = function (): DateBuilder {
  return new DateBuilder(this.date.endOf('week'));
};

DateBuilder.prototype.endOfMonth = function (): DateBuilder {
  return new DateBuilder(this.date.endOf('month'));
};

DateBuilder.prototype.endOfYear = function (): DateBuilder {
  return new DateBuilder(this.date.endOf('year'));
};
