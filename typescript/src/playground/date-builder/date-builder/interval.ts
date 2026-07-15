import { DateBuilder } from './base';
import type { ConfigType } from 'dayjs';

declare module './base' {
  interface DateBuilder {
    between(start: ConfigType, end: ConfigType): boolean;
    overlaps(start: ConfigType, end: ConfigType): boolean;
    contains(start: ConfigType, end: ConfigType): boolean;
    intersects(start: ConfigType, end: ConfigType): boolean;

    eachDay(end: ConfigType): DateBuilder[];
    eachWeek(end: ConfigType): DateBuilder[];
    eachMonth(end: ConfigType): DateBuilder[];
  }
}

DateBuilder.prototype.between = function (
  start: ConfigType,
  end: ConfigType,
): boolean {
  return (
    (this.date.isAfter(start) || this.date.isSame(start)) &&
    (this.date.isBefore(end) || this.date.isSame(end))
  );
};

DateBuilder.prototype.overlaps = function (
  start: ConfigType,
  end: ConfigType,
): boolean {
  return this.between(start, end);
};

DateBuilder.prototype.contains = function (
  start: ConfigType,
  end: ConfigType,
): boolean {
  return this.between(start, end);
};

DateBuilder.prototype.intersects = function (
  start: ConfigType,
  end: ConfigType,
): boolean {
  return this.between(start, end);
};

DateBuilder.prototype.eachDay = function (end: ConfigType): DateBuilder[] {
  const dates: DateBuilder[] = [];

  let current = this.date.startOf('day');
  const last = new DateBuilder(end).date.startOf('day');

  while (current.isBefore(last) || current.isSame(last)) {
    dates.push(new DateBuilder(current));
    current = current.add(1, 'day');
  }

  return dates;
};

DateBuilder.prototype.eachWeek = function (end: ConfigType): DateBuilder[] {
  const dates: DateBuilder[] = [];

  let current = this.date.startOf('week');
  const last = new DateBuilder(end).date.startOf('week');

  while (current.isBefore(last) || current.isSame(last)) {
    dates.push(new DateBuilder(current));
    current = current.add(1, 'week');
  }

  return dates;
};

DateBuilder.prototype.eachMonth = function (end: ConfigType): DateBuilder[] {
  const dates: DateBuilder[] = [];

  let current = this.date.startOf('month');
  const last = new DateBuilder(end).date.startOf('month');

  while (current.isBefore(last) || current.isSame(last)) {
    dates.push(new DateBuilder(current));
    current = current.add(1, 'month');
  }

  return dates;
};
