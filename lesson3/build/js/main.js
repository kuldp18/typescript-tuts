"use strict";
let stringArr = ['one', 'hey', 'yo'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1975, 'Flume', true];
stringArr[0] = 'John';
stringArr.push('yooyoy');
guitars[0] = 1984;
guitars.unshift('Jim');
let test = [];
let bands = [];
bands.push('The 1975');
// tuple
let myTuple = ['Dave', 42, false, 145];
let mixed = ['John', 1, false];
myTuple[3] = 90;
// objects
let obj;
obj = [];
console.log(typeof obj);
obj = bands;
obj = {};
const exampleObj = {
    prop1: 'Dave',
    prop2: true,
};
exampleObj.prop2 = false;
let evh = {
    name: 'Eddy',
    active: false,
    albums: [1984, 5150, 'OU812'],
};
let jp = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV'],
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(jp));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
console.log(Grade.C);
