// import { MyDatabaseModule } from './db/my_database_module';
import { MyDatabaseFunction } from './db/my_database_function';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Paulo', age: 19 });
myDatabaseClassic.add({ name: 'Richard', age: 23 });
myDatabaseClassic.add({ name: 'Rasmund', age: 27 });

export { myDatabaseClassic };
