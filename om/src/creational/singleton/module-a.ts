import { MyDatabaseClassic } from './db/my-database-classic';

const myDatabaseClassic = MyDatabaseClassic.getInstance();
myDatabaseClassic.add({ name: 'Diego', age: 26 });
myDatabaseClassic.add({ name: 'Núbia', age: 24 });
myDatabaseClassic.add({ name: 'Luís', age: 28 });
myDatabaseClassic.remove(1);
