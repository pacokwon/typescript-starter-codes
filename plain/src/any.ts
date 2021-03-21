// src/any.ts
let something: any;

// no errors!
something.length;
something[0];
something();

// no errors!
const b: boolean = something;
something = 'sparcs';
