import { Log } from '../logger/log';

const log = Log.getInstance();

export class UserService {
  public name: string | null = null;
  public username: string | null = null;

  createUser(name?: string | null, username?: string | null): void {
    log.log('Creating user...');

    if (this.validateName(name)) return;

    if (this.validateUsername(username)) return;

    this.name = name;
    this.username = username;

    log.log(`User created: ${this.username}`);
  }

  updateUser(name?: string | null, username?: string | null): void {
    log.log(`Updating user...`);

    if (this.validateName(name)) return;

    if (this.validateUsername(username)) return;

    this.name = name;
    this.username = username;

    log.log('User updated successfully');
  }

  deleteUser(): void {
    if (!this.name && !this.username) {
      log.warn('Trying to delete a user that does not exist');
      return;
    }

    log.log(`Deleting user: ${this.username}`);

    this.name = null;
    this.username = null;

    log.log('User deleted successfully');
  }

  getUser(): { name: string | null; username: string | null } {
    log.log('Fetching user data');

    return {
      name: this.name,
      username: this.username,
    };
  }

  validateName(name?: string | null): name is undefined | null {
    if (this.isUndefined(name)) {
      log.error('Name is undefined');
      return true;
    }

    if (this.isNull(name)) {
      log.warn('Name is null');
      return true;
    }

    if (this.isEmpty(name)) {
      log.warn('Name is empty');
      return true;
    }

    return false;
  }

  validateUsername(username?: string | null): username is undefined | null {
    if (this.isUndefined(username)) {
      log.error('Username is undefined');
      return true;
    }

    if (this.isNull(username)) {
      log.warn('Username is null');
      return true;
    }

    if (this.isEmpty(username)) {
      log.warn('Username is empty');
      return true;
    }

    return false;
  }

  isUndefined(value: unknown): value is undefined {
    return value === undefined;
  }

  isNull(value: unknown): value is null {
    return value === null;
  }

  isEmpty(value: string): boolean {
    return value.trim() === '';
  }
}