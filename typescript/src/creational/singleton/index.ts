import { MyDatabaseClassic } from './db/my-database-classic';
import './module-a';
import './module-b';

export class Singleton {
  private static _instance: Singleton | null = null;

  private constructor() {
    // new allowed outside the class
  }

  static get instance(): Singleton {
    if (Singleton._instance === null) {
      Singleton._instance = new Singleton();
    }

    return Singleton._instance;
  }
}

const myDatabaseClassic = MyDatabaseClassic.getInstance();
myDatabaseClassic.show();
