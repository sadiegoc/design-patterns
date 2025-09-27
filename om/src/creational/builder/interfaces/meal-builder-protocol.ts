/**
 *  Builder (interface/protocolo):
 *    define os passor que podem ser executados na construção;
 */

import { MealBox } from "../classes/meal-box";

export interface MealBuilderProtocol {
  reset(): this;
  makeMeal(): this;
  makeBeverage(): this;
  makeDessert(): this;
  getMeal(): MealBox;
}
