import { DateBuilder } from './date-builder';

console.log('==============================');
console.log('CRIAÇÃO');
console.log('==============================');

const now = DateBuilder.now();

console.log(now.formatDateTime());
console.log(DateBuilder.parse('2026-07-15').formatDate());

console.log('\n==============================');
console.log('MANIPULAÇÃO');
console.log('==============================');

console.log(
  DateBuilder.now().addDays(5).subYears(1).addMonths(2).formatDateTime(),
);

console.log(DateBuilder.parse('2026-01-01').endOfMonth().formatDateTime());

console.log(DateBuilder.parse('2026-01-01').startOfMonth().formatDateTime());

console.log('\n==============================');
console.log('GETTERS');
console.log('==============================');

const birthday = DateBuilder.parse('1999-07-09 05:20:30');

console.log('Ano:', birthday.year());
console.log('Mês:', birthday.month());
console.log('Dia:', birthday.dateOfMonth());
console.log('Hora:', birthday.hour());
console.log('Minuto:', birthday.minute());
console.log('Segundo:', birthday.second());

console.log('\n==============================');
console.log('SETTERS');
console.log('==============================');

const edited = birthday
  .setYear(2030)
  .setMonth(11)
  .setDate(25)
  .setHour(23)
  .setMinute(59)
  .setSecond(59);

console.log(edited.formatDateTime());

console.log('\n==============================');
console.log('COMPARAÇÕES');
console.log('==============================');

const yesterday = DateBuilder.now().subDay();
const tomorrow = DateBuilder.now().addDay();

console.log('isBefore:', yesterday.isBefore(tomorrow.toDate()));
console.log('isAfter:', tomorrow.isAfter(yesterday.toDate()));
console.log('isSame:', yesterday.isSame(yesterday.toDate()));
console.log(
  'isBetween:',
  DateBuilder.now().isBetween(yesterday.toDate(), tomorrow.toDate()),
);

console.log('\n==============================');
console.log('VALIDAÇÕES');
console.log('==============================');

console.log('Hoje:', DateBuilder.now().isToday());
console.log('Amanhã:', DateBuilder.now().addDay().isTomorrow());
console.log('Ontem:', DateBuilder.now().subDay().isYesterday());
console.log('Fim de semana:', DateBuilder.now().isWeekend());
console.log('Dia útil:', DateBuilder.now().isWeekday());
console.log('Ano bissexto 2024:', DateBuilder.parse('2024-01-01').isLeapYear());
console.log('Ano bissexto 2025:', DateBuilder.parse('2025-01-01').isLeapYear());

console.log('\n==============================');
console.log('DIFFERENCE');
console.log('==============================');

const initial = DateBuilder.parse('2026-01-01');
const final = DateBuilder.parse('2026-12-31');

console.log('Dias:', final.diffInDays(initial.toDate()));
console.log('Meses:', final.diffInMonths(initial.toDate()));
console.log('Anos:', final.diffInYears(initial.toDate()));

console.log('\n==============================');
console.log('FORMATAÇÃO');
console.log('==============================');

console.log(now.formatDate());
console.log(now.formatTime());
console.log(now.formatDateTime());
console.log(now.formatISO());
console.log(now.formatRFC());
console.log(now.formatBrazilian());
console.log(now.formatDatabase());

console.log('\n==============================');
console.log('CONVERSÕES');
console.log('==============================');

console.log(now.toDate());
console.log(now.toISOString());
console.log(now.toJSON());
console.log(now.toUnix());
console.log(now.toMilliseconds());
console.log(now.toObject());
console.log(now.toArray());
console.log(now.toString());
console.log(now.toUTCString());
console.log(now.toLocaleString('pt-BR'));

console.log('\n==============================');
console.log('IMUTABILIDADE');
console.log('==============================');

const original = DateBuilder.parse('2026-01-01');

const changed = original.addDays(10);

console.log('Original:', original.formatDate());
console.log('Novo:', changed.formatDate());

console.log('\n==============================');
console.log('CHAIN');
console.log('==============================');

const chain = DateBuilder.now()
  .addYears(1)
  .subMonths(2)
  .addDays(15)
  .startOfMonth()
  .setHour(8)
  .setMinute(30)
  .setSecond(0);

console.log(chain.formatDateTime());

console.log('\n==============================');
console.log('CLONE');
console.log('==============================');

const clone = original.clone().addYears(5);

console.log(original.formatDate());
console.log(clone.formatDate());

console.log('\n==============================');
console.log('INVALID');
console.log('==============================');

const invalid = DateBuilder.parse('abc');

console.log(invalid.isValid());
console.log(invalid.format());
