import { Config } from './config';

const config = Config.getInstance();
config.set('db', { host: 'localhost', port: 80 });
console.log('db from a:', config.get('db'));