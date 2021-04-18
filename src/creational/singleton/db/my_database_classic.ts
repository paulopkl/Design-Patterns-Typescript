import { User } from '../interfaces/user';

export class MyDatabaseClassic {
    private static _instance: MyDatabaseClassic | null = null;
    private users: User[] = [];

    private constructor() {}

    // static getInstance(): MyDatabaseClassic {
    static get instance(): MyDatabaseClassic {
        if (MyDatabaseClassic._instance === null)
            MyDatabaseClassic._instance = new MyDatabaseClassic();

        return MyDatabaseClassic.instance;
    }

    add(user: User): void {
        this.users.push(user);
    }

    remove(index: number): void {
        this.users.splice(index, 1);
    }

    show(): void {
        for (const user of this.users) {
            console.log(user);
        }
    }
}
