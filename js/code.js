'use strict';

//задание 1
let Tf = null;
let Tc = +prompt("Введите температуру в градусах Цельсия");
if ((Tc !== Tc) || (Tc == "")) {
    alert("Введено неверное значение");
} else {
    Tf = (9 / 5) * Tc + 32;
    alert("Температура по Фаренгейту: " + Tf + " градусов");
}
//задание 2
let name = "Василий";
let admin = name;
console.log(admin);

//задание 3
console.log(10 + 10 + "10", //выводит "2010", так как результат первой операции 20, после второй идет преобразование в строку
    10 + "10" + 10, // выводит "101010" так как уже на первой операции происходит конкатенация
    10 + 10 + +"10", // выводит 30, так как все операнды числовые, унарный + имеет более высокий приоритет перед сложением
    10 / -"", // -"" дает -0, так что результат -Infinity
    10 / +"2,5"); // результат NaN, поскольку "2,5" не может быть преобразовано в число

//задание 4
let mode = "normal"; // - правильно
let my_valu3 = 102; // - правильно
//let 3my_value3 = "102"; - неправильно, имя переменной не может начинаться с цифры
let __hello__ = "world"; // - можно
let $$$ = "money"; // - сойдет
//let !0 _world = true; - не пойдет, начинается с "!"
