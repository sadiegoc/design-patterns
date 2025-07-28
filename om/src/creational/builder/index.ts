import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

const dishBuilder = new MainDishBuilder();

const box1 = dishBuilder.makeMeal().makeDessert().getMeal();
dishBuilder.reset();
const box2 = dishBuilder.makeMeal().makeBeverage().getMeal();
dishBuilder.reset();
const box3 = dishBuilder.makeBeverage().makeDessert().getMeal();
dishBuilder.reset();
const box4 = dishBuilder.makeMeal().makeBeverage().makeDessert().getMeal();
dishBuilder.reset();

console.log(box1);
console.log(box2);
console.log(box3);
console.log(box4);

const veganBuilder = new VeganDishBuilder();
const veganMeal = veganBuilder.makeMeal().getMeal();
console.log(veganMeal);
