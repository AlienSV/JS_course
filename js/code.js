'use strict';

//задание 1
//пример 1. Выводит 2 потому что сначала выполняется префиксный инкремент, а потом присваивание
//пример 2. Выводит 1 потому что постфиксный инкремент выполняется после присваивания
//пример 3. После первого примера в c лежит 2, увеличивается на единицу и складывается с 2, ответ 5
//пример 4. b = 2 после примера 2, постфиксная форма инкремента не повлияет на результат текущего выражения, ответ 4
//a = 1 в начале, дважды увеличивалось на 1, после примеров 1 и 3, результат 3
//b = 1 в начале, дважды увеличивалось на 1, после примеров 2 и 4, результат 3

//задание 2
//a будет равно 5

//задание 3
let a = 4,
    b = -2;
if (a >= 0 && b >= 0) console.log(a - b);
if (a < 0 && b < 0) console.log(a * b);
if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) console.log(a + b);

//задание 4
var add = (a, b) => {
    return a + b; // пришлось так делать, потому что по заданию использование return обязательно
}
var sub = (a, b) => {
    return a - b;
}
var mult = (a, b) => {
    return a * b;
}
var div = (a, b) => {
    return a / b;
}

//задание 5
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return add(arg1, arg2);
        case "-":
            return sub(arg1, arg2);
        case "*":
            return mult(arg1, arg2);
        case "/":
            return div(arg1, arg2);
        default:
            alert("Неверная операция");
    }
}

//задание 6
function power(val, pow) {
    if (pow != 1) {
        return val * power(val, pow - 1);
    } else {
        return val;
    }
}

//задание 7
function parsePassValidity(path) {
    let spSymParse = (path.indexOf("$") != -1) || (path.indexOf("%") != -1) || (path.indexOf("*") != -1) || (path.indexOf("&") != -1);
    let lenParse = (path.length >= 3) && (path.length <= 12);
    let qzParse = (path[0] == "q") || (path.lastIndexOf("z") == path.length - 1);
    if (spSymParse && lenParse && qzParse) return "Корректный пароль";
    return "Некорректный пароль";
}
