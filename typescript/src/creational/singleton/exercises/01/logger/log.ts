export class Log {
  private static _instance: Log | null = null;

  private constructor() {}

  public static getInstance(): Log {
    if (Log._instance === null) {
      Log._instance = new Log();
    }

    return Log._instance;
  }

  log(message: string): void {
    console.log(`[LOG] ${new Date().toISOString()} - ${message}`);
  }

  warn(message: string): void {
    console.warn(`[WARN] ${new Date().toISOString()} - ${message}`);
  }

  error(message: string): void {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`);
  }
}
