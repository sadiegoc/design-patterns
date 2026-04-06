# Definição:
  Garantir que uma classe tenha somente uma instância no programa
  e fornece um ponto de acesso global para a mesma.

# Example:
public class MySingleton {
  private static _instance: MySingleton | null = null;

  private constructor() {}

  public static getInstance(): MySingleton {
    if (this._instance === null) {
      MySingleton._instance = new MySingleton();
    }

    return MySingleton._instance;
  }
}
