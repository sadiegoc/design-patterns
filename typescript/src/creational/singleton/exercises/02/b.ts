import { Config } from './config';

const config = Config.getInstance();
// config.set('db', { host: 'localhost', port: 8080 });
console.log('db from b:', config.get('db'));