// import { MyDatabaseClassic } from './db/my_database_classic';
// import { MyDatabaseModule } from './db/my_database_module';
import { MyDatabaseFunction } from './db/my_database_function';
import { myDatabaseClassic as myDatabaseFromModuleA } from './module_a';

// const myDatabaseClassic = MyDatabaseClassic.getInstance();
// const myDatabaseClassic = MyDatabaseClassic.instance;

// const myDatabaseClassic = MyDatabaseClassic.instance;
// const myDatabaseClassic = MyDatabaseModule;
const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Raphael', age: 19 });
myDatabaseClassic.add({ name: 'Jully', age: 23 });
myDatabaseClassic.add({ name: 'Vand', age: 27 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA);
