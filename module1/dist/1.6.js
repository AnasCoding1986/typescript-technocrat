"use strict";
// Learning function
// 1. Normal function
// 1. Array function
function add(num1, num2) {
    return num1 + num2;
}
add(1, 2);
const addArrow = (num1, num2) => num1 + num2;
// object --> function --> method
const poorUser = {
    name: "Anas",
    balance: 0,
    addBalance(balance) {
        return (`My new balance is: ${this.balance + balance}`);
    }
};
const arr = [2, 4, 10];
const newArr = arr.map((elm) => elm * elm);
