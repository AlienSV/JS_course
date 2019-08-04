'use strict';
//задание 1
let a = [
 [{
        name: 'Mary',
        age: 23
    }, {
        name: 'Mike',
        age: 45
    }, {
        name: 'Nick',
        age: 11
    }],
 [{
        name: 'Adam',
        age: 56
    }, {
        name: 'Sara',
        age: 21
    }, {
        name: 'Don',
        age: 22
    }],
 [{
        name: 'Karl',
        age: 34
    }, {
        name: 'Marta',
        age: 76
    }, {
        name: 'John',
        age: 19
    }]
];

let copy = JSON.parse(JSON.stringify(a));
//copy[0][0].name = "Sergey"; проверка копирования по значению
//console.log(a);
console.log(copy);

//задание 2
let basket = [];
//заполняем случайными значениями
for (let i = 1; i <= 10; i++) {
    basket.push({
        art: Math.round(Math.random() * 1e6),
        name: 'product_' + i,
        price: Math.round(Math.random() * 1e3 + 1e3)
    });
}
//считаем общую стоимость
function countBasketPrice() {
    let total = 0;
    basket.forEach(function (item) {
        total += item.price;
    });
    return total;
}
console.log(`Стоимость товаров в корзине - ${countBasketPrice()} руб.`);

//задание 3
for (let i = 0; i < 9; i++, console.log(i)) {};

//задание 4
for (let i = 1; i <= 20; i++) {
    let a = '';
    for (let j = 1; j <= i; j++) a += '*';
    console.log(a);
}
