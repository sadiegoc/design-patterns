import { DeviceImplementation } from "./device-implementation";

export class Radio implements DeviceImplementation {
  private volume = 10;
  private power = false;
  private name = 'Radio';

  getName(): string {
    return this.name;
  }

  setPower(powerStatus: boolean): void {
    this.power = powerStatus;
  }

  getPower(): boolean {
    return this.power;
  }

  getVolume(): number {
    return this.volume;
  }

  setVolume(volume: number): void {
    if (volume < 0) return;
    if (volume > 100) return;

    this.volume = volume;
  }
}

