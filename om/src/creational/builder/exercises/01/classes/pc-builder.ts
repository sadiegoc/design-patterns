import { PCBuilderProtocol } from '../interfaces/pc-builder-protocol';
import {
  Case,
  CPU,
  GPU,
  HD,
  MotherBoard,
  PowerSupply,
  RAM,
  SSD,
} from './parts';
import { PCBox } from './pc-box';

export class PCBuilder implements PCBuilderProtocol {
  private _pc: PCBox = new PCBox();

  reset(): this {
    this._pc = new PCBox();
    return this;
  }

  build(): PCBox {
    return this._pc;
  }

  setCPU(name: string, price: number): this {
    const cpu = new CPU(name, price);
    this._pc.add(cpu);
    return this;
  }

  setGPU(name: string, price: number): this {
    const gpu = new GPU(name, price);
    this._pc.add(gpu);
    return this;
  }

  setRAM(name: string, price: number): this {
    const ram = new RAM(name, price);
    this._pc.add(ram);
    return this;
  }

  setSSD(name: string, price: number): this {
    const ssd = new SSD(name, price);
    this._pc.add(ssd);
    return this;
  }

  setHD(name: string, price: number): this {
    const hd = new HD(name, price);
    this._pc.add(hd);
    return this;
  }

  setMotherBoard(name: string, price: number): this {
    const motherBoard = new MotherBoard(name, price);
    this._pc.add(motherBoard);
    return this;
  }

  setPowerSupply(name: string, price: number): this {
    const powerSupply = new PowerSupply(name, price);
    this._pc.add(powerSupply);
    return this;
  }

  setCase(name: string, price: number): this {
    const pcCase = new Case(name, price);
    this._pc.add(pcCase);
    return this;
  }

  getPrice(): number {
    return this._pc.getPrice();
  }
}
