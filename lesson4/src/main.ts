// type aliases
type stringOrNumber = string | number;

type stringorNumberArray = (string | number)[];
type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringorNumberArray;
};

type UserId = stringOrNumber;

// literal types
let myName: 'Kuldeep';

let userName: 'Kuldeep' | 'John' | 'Amy';
userName = 'Kuldeep';

// functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (msg: any): void => {
  console.log(msg);
};

logMsg('hello');
logMsg(add(2, 3));

let subtract = function (c: number, d: number) {
  return c - d;
};

// function type
// => this type of function Types and Interfaces don't work with default values
type mathFunction = (a: number, b: number) => number;
// function interface
// interface mathFunction {
//   (a: number, b: number): number;
// }

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(8, 4));

// optional parameters => optional params should come at end

const addAll = (a: number, b: number, c?: number): number => {
  if (c) {
    return a + b + c;
  }
  return a + b;
};

// default parameters
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(1, 2));
logMsg(addAll(1, 2, 3));
logMsg(sumAll(1, 2));
logMsg(sumAll(undefined, 2, undefined));

// Rest Paramaters

const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(1, 2, 3, 4, 15));

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

// custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === 'number' ? true : false;
};

// use of the never type
const numberOrString = (value: number | string): string => {
  if (typeof value === 'string') {
    return 'Value is a string';
  }
  if (isNumber(value)) {
    return 'Value is a number';
  }
  return createError('BOOOOOOOO!');
};
