"use strict";

/**
 * Объект отрисовщика
 * @type {{renderMap(*, *): void, cells: {}, render(*, *): void}}
 */
let renderer = {
    /**
     * Список всех ячеек карты
     */
    cells: {},

    /**
     * Отрисовка карты
     * @param rowsCount высота карты
     * @param colsCount ширина карты
     */
    renderMap(rowsCount, colsCount) {
        let table = document.getElementById('game');
        table.innerText = '';

        for (let row = 0; row < rowsCount; row++) {
            let tr = document.createElement('tr');
            tr.classList.add('row');
            table.appendChild(tr);

            for (let col = 0; col < colsCount; col++) {
                let td = document.createElement('td');
                td.classList.add('cell');
                tr.appendChild(td);
                this.cells[`x${col}_y${row}`] = td;
            }
        }
    },

    /**
     * Отрисовка тела змейки и еды (с предварительным очищением карты)
     * @param snakePointArray
     * @param foodPoint
     */
    render(snakePointArray, foodPoint) {
        for (let key of Object.getOwnPropertyNames(this.cells)) {
            this.cells[key].className = 'cell';
        }

        snakePointArray.forEach((point, idx) => {
            this.cells[`x${point.x}_y${point.y}`].classList.add(idx === 0 ? 'snakeHead' : 'snakeBody');
        });

        this.cells[`x${foodPoint.x}_y${foodPoint.y}`].classList.add('food');
    }
};