"use strict";
// index signatures
// interface TransactionObj {
//   readonly [index: string]: number;
// }
const today = {
    Pizza: -10,
    Books: -5,
    Job: 32,
    Dave: 42,
};
console.log(today.Pizza);
console.log(today['Pizza']);
let prop = 'Pizza';
console.log(today[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (let transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(today));
// today.Pizza = 40;
console.log(today['Dave']);
const student = {
    name: 'Anil',
    GPA: 4.5,
    classes: [100, 50],
};
const student2 = {
    name: 'Ajay',
    GPA: 6.5,
    classes: [120, 50],
};
// console.log(student.test); //ts can't predict this
// looping an object without index signature
for (const key in student) {
    // using `keyof` assertion
    // here we reference the `Student` interface
    console.log(`${key} : ${student[key]}`);
}
Object.keys(student).map((key) => {
    // here we reference the `student` object created from the interface
    console.log(`${key} : ${student[key]}`);
});
const logStudentKey = (student, key) => {
    console.log(`Student => ${key}:${student[key]}`);
};
logStudentKey(student, 'name');
logStudentKey(student2, 'GPA');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 50,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
