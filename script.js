"use strict";
const operation = prompt('What calculation operation do you want to do: add, sub, mult, div?');
const firstNumber = +prompt('Enter the first number');
const secondNumber = +prompt('Enter the second number');

switch (operation) {
    case "add":
        alert (`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
        break;
    case "sub":
        alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
        break;
    case "mult":
        alert(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
        break;

    case "div":
        if (secondNumber === 0) {
            alert('На ноль делить нельзя!')
        }
        else alert(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
        break;
}