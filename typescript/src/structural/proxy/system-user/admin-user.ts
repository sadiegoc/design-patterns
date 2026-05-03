import { SystemUserAddressProtocol, SystemUserProtocol } from "./system-user-protocol";

export class AdminUser implements SystemUserProtocol {
  public firstName: string;
  public userName: string;

  constructor (firstName: string, userName: string) {
    this.firstName = firstName;
    this.userName = userName;
  }

  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    return new Promise((resolve, reject) => {
      return setTimeout(() => {
        return resolve([
          { street: 'Av. Quinze de Novembro', number: 50 },
          { street: 'R. João Julião Martins', number: 40 },
        ]);
      }, 2000)
    });
  }
}
