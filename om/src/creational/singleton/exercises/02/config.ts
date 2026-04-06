import { JSONObject, JSONValue } from './types';

export class Config {
  private static _instance: Config | null = null;

  private json: JSONObject = {};

  private constructor() {}

  public static getInstance(): Config {
    if (Config._instance === null) {
      Config._instance = new Config();
    }

    return Config._instance;
  }

  public get<T extends JSONValue = JSONValue>(key: string): T | null {
    return (this.json[key] as T) ?? null;
  }

  public set(key: string, value: JSONValue): void {
    this.json[key] = value;
  }
}
