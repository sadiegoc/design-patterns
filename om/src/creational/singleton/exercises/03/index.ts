import { DatabaseConnection } from './database-connection';

const db = DatabaseConnection.getInstance();

db.connect();
db.connect();

db.query('SELECT * FROM users');

db.disconnect();
db.disconnect();