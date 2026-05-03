import { PartCompositeProtocol } from '../interfaces/part-composite-protocol';

export class PCBox implements PartCompositeProtocol {
  private readonly _children: PartCompositeProtocol[] = [];

  getPrice(): number {
    return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0);
  }

  add(...parts: PartCompositeProtocol[]): void {
    this._children.push(...parts);
  }
}
