import { MealCompositeProtocol } from './../interfaces/meal_Composite_Protocol';

export abstract class AbstractMeal implements MealCompositeProtocol {
    constructor(private name: string, private _price: number) {}

    getPrice(): number {
        return this._price;
    }
}
