import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';

export class MealDirector {
  constructor (private builder: MealBuilderProtocol) {}

  prepareSimpleMeal(): MealBox {
    return this.builder.reset().makeMeal().getMeal();
  }

  prepareMealWithDessert(): MealBox {
    return this.builder.reset().makeMeal().makeDessert().getMeal();
  }

  prepareFullMeal(): MealBox {
    return this.builder.reset().makeMeal().makeBeverage().makeDessert().getMeal();
  }
}
