let goods = [
{name: "Очень маленькое черное платье", price: 1000},
{name: "Маленькое черное платье", price: 2000},
{name: "Среднее черное платье", price: 3000},
{name: "Большое черное платье", price: 4000},
{name: "Очень большое черное платье", price: 5000}
];

function addProductListToContainer() {
    let container = document.querySelector('.container');
    let productBlockHtml = '<div class="product-item"><img><div class="product-list"><h3></h3><span class="price"></span><a href="#" class="button" data-index = "">В корзину</a></div></div>';
    for (let i = 0; i < goods.length; i++) {
        container.insertAdjacentHTML('afterbegin', productBlockHtml);
    }
    let h3 = document.querySelectorAll(".product-item h3");
    let image = document.querySelectorAll(".product-item img");
    let price = document.querySelectorAll(".price");
    let button = document.querySelectorAll(".product-item .button");
    for (let i = 0; i < goods.length; i++) {
        h3[i].textContent = goods[i].name;
        price[i].textContent = `₽ ${goods[i].price}`;
        image[i].src = 'https://html5book.ru/wp-content/uploads/2015/10/black-dress.jpg';
        button[i].dataset.index = i;
    }
}


addProductListToContainer(); //выводим карточки из массива на страницу
basket.render();

let button = document.querySelectorAll(".product-item .button");
for (let i = 0; i < goods.length; i++) {
    button[i].onclick = function(event) {
        let targetProdIndex = event.target.dataset.index;
        basket.putProduct(goods[targetProdIndex], 1);
        basket.render();
        return false; //отмена стандартного перехода по ссылке
    }
}