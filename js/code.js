'use strict';
//задание 1
let num = parseInt(prompt("Введите число от 0 до 999"));
let object = parseDigits(num);
console.log(object);

function parseDigits(number) {
    let object = {};
    if (isNaN(number) || number < 0 || number > 999) {
        console.log("Введено неверное число");
        return object;
    }

    let tempArray = [];
    while (number) {
        tempArray.push(number % 10);
        number = Math.trunc(number / 10);
    }
    return {
        units: tempArray[0] === undefined ? 0 : tempArray[0],
        tens: tempArray[1] === undefined ? 0 : tempArray[1],
        hundreds: tempArray[2] === undefined ? 0 : tempArray[2]
    };
}

//задание 2
let goods = [];

for (let i = 1; i <= 10; i++) {
    goods.push({
        name: 'product_' + i,
        price: Math.round(Math.random() * 1e3 + 1e3)
    });
}

let basket = {
    goodsList: [],
    countTotalPrice: function () {
        let total = 0;
        this.goodsList.forEach(function (item) {
            total += item.price * item.count;
        });
        return total;
    },
    countTotalNumber: function () {
        let total = 0;
        this.goodsList.forEach(function (item) {
            total += item.count;
        });
        return total;
    },
    putProduct: function (good, quantity) {
        this.goodsList.push(Object.assign({
            count: quantity
        }, good));
    }
};


for (let i = 0; i < goods.length; i++) basket.putProduct(goods[i], (i + 1) % 2 + 1);

console.log(basket.countTotalPrice());
console.log(basket.countTotalNumber());


//задание 3
//все основные изменения внесены в mover.js. В code.js изменен только текст запроса направления, добавлены диагонали
//модифицированный целиком проект лежит в папке Mofified_walker
//содержимое mover.js после модификации:
/*let mover = {
    getNextPoint(direction) {
        let nextPoint = {
            x: player.x,
            y: player.y
        };

        // 2, 6, 8, 4
        switch (direction) {
            case '2':
                nextPoint.y++;
                break;
            case '6':
                nextPoint.x++;
                break;
            case '8':
                nextPoint.y--;
                break;
            case '4':
                nextPoint.x--;
                break;
            case '1':
                nextPoint.x--;
                nextPoint.y++;
                break;
            case '3':
                nextPoint.x++;
                nextPoint.y++;
                break;
            case '7':
                nextPoint.x--;
                nextPoint.y--;
                break;
            case '9':
                nextPoint.x++;
                nextPoint.y--;
                break;
        }
        let message = [];
        if (nextPoint.x < 0) {
            message.push("левый");
            nextPoint.x = 0;
        }
        if (nextPoint.x > config.nColumns - 1) {
            message.push("правый");
            nextPoint.x = config.nColumns - 1;
        }
        if (nextPoint.y < 0) {
            message.push("верхний");
            nextPoint.y = 0;
        }
        if (nextPoint.y > config.nRows - 1) {
            message.push("нижний");
            nextPoint.y = config.nRows - 1;
        }
        if (!message.length) {} else if (message.length === 1) {
            alert("Вы больно ударились лбом об " + message[0] + " край стены")
        } else {
            alert("Вы впечатались лбом точно в " + message[0] + " " + message[1] + " угол игрового поля")
        }
        return nextPoint;
    }
};*/
