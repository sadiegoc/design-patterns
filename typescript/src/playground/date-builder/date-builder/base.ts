import dayjs, { type ConfigType } from 'dayjs';

export class DateBuilder {
  protected readonly date;

  constructor(value?: ConfigType) {
    this.date = dayjs(value);
  }

  static now(): DateBuilder {
    return new DateBuilder();
  }

  static parse(value: ConfigType): DateBuilder {
    return new DateBuilder(value);
  }

  clone(): DateBuilder {
    return new DateBuilder(this.date);
  }
}
