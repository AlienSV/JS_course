let goods = [];

for (let i = 1; i <= 10; i++) {
    goods.push({
        name: 'product_' + i,
        price: Math.round(Math.random() * 1e3 + 1e3)
    });
}

let basket = {
    goodsList: [],
    countTotalPrice() {
        let total = 0;
        this.goodsList.forEach(function (item) {
            total += item.price * item.count;
        });
        return total;
    },
    countTotalNumber() {
        let total = 0;
        this.goodsList.forEach(function (item) {
            total += item.count;
        });
        return total;
    },
    putProduct(product, quantity) {
        let idx = this.goodsList.findIndex(function (elem) {
            return elem.name === product.name;
        });
        if (idx === -1) {
            this.goodsList.push(Object.assign({}, product));
            this.goodsList[this.goodsList.length - 1].count = quantity;
        } else {
            this.goodsList[idx].count += quantity;
        }
    }
};

let userChoice = confirm("Заполнить корзину товарами?");
if (userChoice) {
    for (let i = 0; i < goods.length; i++) basket.putProduct(goods[i], (i + 1) % 2 + 1);
}
basket.content = basket.countTotalNumber() === 0 ? "Корзина	пуста" : `В	корзине: ${basket.countTotalNumber()} товаров </br> на сумму ${basket.countTotalPrice()} руб.`;

let block = document.body.querySelector('.block');
let header = document.createElement('div');
header.className = 'header';
header.textContent = 'Корзина';
let content = document.createElement('div');
content.className = 'content';
content.innerHTML = `<p>${basket.content}</p>`
block.appendChild(header);
block.appendChild(content);
block.style.display = "block";
