let stringArr = ['one', 'hey', 'yo'];
let guitars = ['Strat', 'Les Paul', 5150];

let mixedData = ['EVH', 1975, 'Flume', true];

stringArr[0] = 'John';
stringArr.push('yooyoy');

guitars[0] = 1984;
guitars.unshift('Jim');

let test = [];
let bands: string[] = [];
bands.push('The 1975');

// tuple
let myTuple: [string, number, boolean, number] = ['Dave', 42, false, 145];

let mixed = ['John', 1, false];

myTuple[3] = 90;

// objects

let obj: object;
obj = [];
console.log(typeof obj);
obj = bands;
obj = {};

const exampleObj = {
  prop1: 'Dave',
  prop2: true,
};

exampleObj.prop2 = false;

interface Guitarist {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: 'Eddy',
  active: false,
  albums: [1984, 5150, 'OU812'],
};
let jp: Guitarist = {
  name: 'Jimmy',
  active: true,
  albums: ['I', 'II', 'IV'],
};

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}!`;
  }
  return 'Hello!';
};
console.log(greetGuitarist(jp));

// Enums

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);

console.log(Grade.C);
console.log(Grade.A);
