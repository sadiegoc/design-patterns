export class DatabaseConnection {
  private static _instance: DatabaseConnection | null = null;

  private status: boolean = false;

  public static getInstance(): DatabaseConnection {
    if (DatabaseConnection._instance === null) {
      DatabaseConnection._instance = new DatabaseConnection();
    }

    return DatabaseConnection._instance;
  }

  public connect(): boolean {
    if (this.status) {
      console.log('O banco está em uso');
      return false;
    };

    this.status = !this.status;

    console.log('Conexão realizada com sucesso.');
    return this.status;
  }

  public disconnect(): boolean {
    if (!this.status) {
      console.log('O banco já está conectado.');
      return false;
    }

    this.status = !this.status;

    console.log('Desconectado.');
    return this.status;
  }

  public query(query: string): boolean {
    if (!this.status) {
      console.log('Você está desconectado. Faça uma conexão primeiro.');
      return false;
    }

    console.log('Executando...');
    console.log(query);
    return true;
  }
}
