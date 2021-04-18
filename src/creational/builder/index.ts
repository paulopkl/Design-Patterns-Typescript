import { MainDishBuilder } from './class/Main_Dish_Builder';
import { VeganDishBuilder } from './class/Vegan_Dish_Builder';

// const mainDishBuilder = new MainDishBuilder();
// mainDishBuilder.makeMeal().makeBeverage();

// console.log(mainDishBuilder.getMeal());
// console.log(mainDishBuilder.getPrice());

// mainDishBuilder.reset();
// console.log(mainDishBuilder.getMeal());

// const meal2 = mainDishBuilder.makeBeverage().getMeal();
// console.log(meal2);

const veganDishBuilder = new VeganDishBuilder();
const veganMeal = veganDishBuilder.makeMeal().getMeal();
console.log(veganMeal);
console.log(veganMeal.getPrice());
