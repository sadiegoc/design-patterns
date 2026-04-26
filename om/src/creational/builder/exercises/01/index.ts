import { PCBuilder } from './classes/pc-builder';

const pcBuilder = new PCBuilder();

pcBuilder
  .reset()
  .setMotherBoard('Gigabyte A520M K V2', 350)
  .setCPU('Ryzen 5 4600G', 450)
  .setRAM('Kingston 8GB', 160)
  .setRAM('Kingston 8GB', 160)
  .setSSD('Kingston 500GB', 350)
  .setGPU('AMD RX 7600', 1600)
  .setPowerSupply('Aerocool 500W 80 Plus Bronze', 400)
  .setCase('Ninja Black', 110)
  .build();

console.log(pcBuilder.getPrice());
