import { PartCompositeProtocol } from '../interfaces/part-composite-protocol';

export class AbstractPart implements PartCompositeProtocol {
  constructor(
    private name: string,
    private price: number,
  ) {}

  getPrice(): number {
    return this.price;
  }
}
