import { MealBox } from './Meal_Box';
import { MealBuilderProtocol } from './../interfaces/meal_Builder_Protocol';
import { Rice, Beans, Meat, Beverage, Dessert } from './Meals';

export class MainDishBuilder implements MealBuilderProtocol {
    private _meal: MealBox = new MealBox();

    reset(): this {
        this._meal = new MealBox();

        return this;
    }

    makeMeal(): this {
        const rice = new Rice('Rice', 5);
        const beans = new Beans('Beans', 25);
        const meat = new Meat('Meat', 50);

        this._meal.add(rice, beans, meat);

        return this;
    }
    makeBeverage(): this {
        const beer = new Beverage('Beverage', 5);

        this._meal.add(beer);

        return this;
    }

    makeDessert(): this {
        const dessert = new Dessert('Dessert', 64);

        this._meal.add(dessert);

        return this;
    }

    getMeal(): MealBox {
        return this._meal;
    }

    getPrice(): number {
        return this._meal.getPrice();
    }
}
