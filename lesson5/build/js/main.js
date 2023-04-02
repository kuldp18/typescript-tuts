"use strict";
// convert to more or less specific
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
let d = 'world'; // not possible in react
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
let nextVal = addOrConcat(2, 2, 'concat');
// The DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.querySelector('#yo');
