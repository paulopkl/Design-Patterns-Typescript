import { Customer } from '../interfaces/customer';

export class EnterPriseCustomer implements Customer {
    constructor(public name: string) {}
}
