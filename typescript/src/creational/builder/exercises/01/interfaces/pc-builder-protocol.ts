import { PCBox } from '../classes/pc-box';

export interface PCBuilderProtocol {
  reset(): this;
  build(): PCBox;

  setCPU(name: string, price: number): this;
  setRAM(name: string, price: number): this;
  setGPU(name: string, price: number): this;
  setSSD(name: string, price: number): this;
  setHD(name: string, price: number): this;
  setMotherBoard(name: string, price: number): this;
  setPowerSupply(name: string, price: number): this;
  setCase(name: string, price: number): this;
}
