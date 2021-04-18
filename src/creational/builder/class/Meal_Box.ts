import { MealCompositeProtocol } from './../interfaces/meal_Composite_Protocol';

export class MealBox implements MealCompositeProtocol {
    private readonly _children: MealCompositeProtocol[] = [];

    getPrice(): number {
        return this._children.reduce(
            (sum, acc): number => sum + acc.getPrice(),
            0,
        );
    }

    add(...meal: MealCompositeProtocol[]): void {
        meal.forEach((m: MealCompositeProtocol): void => {
            this._children.push(m);
        });
    }
}
