"use strict";
// literal types
let myName;
let userName;
userName = 'Kuldeep';
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (msg) => {
    console.log(msg);
};
logMsg('hello');
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
// function interface
// interface mathFunction {
//   (a: number, b: number): number;
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(8, 4));
// optional parameters => optional params should come at end
const addAll = (a, b, c) => {
    if (c) {
        return a + b + c;
    }
    return a + b;
};
// default parameters
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(1, 2));
logMsg(addAll(1, 2, 3));
logMsg(sumAll(1, 2));
logMsg(sumAll(undefined, 2, undefined));
// Rest Paramaters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4, 15));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
// use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string') {
        return 'Value is a string';
    }
    if (isNumber(value)) {
        return 'Value is a number';
    }
    return createError('BOOOOOOOO!');
};
