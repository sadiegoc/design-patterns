import { MyDatabaseClassic } from './db/my-database-classic';

const myDatabaseClassic = MyDatabaseClassic.getInstance();
myDatabaseClassic.add({ name: 'Roberto', age: 26 });
myDatabaseClassic.add({ name: 'Maria', age: 24 });
myDatabaseClassic.add({ name: 'Felipe', age: 28 });
