// src/interface.ts

interface Person {
  name: string;
  age: number;
}

function sayName(p: Person): void {
   console.log(p.name);
}
