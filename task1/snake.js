"use strict";

function snakeModule() {
/**
 * Объект змейки
 * @type {{init(*, *): void, makeStep(): void, isBodyPoint(*): *, incrementBody(): void, lastStepDirection: null, getNextStepHeadPoint(): *, body: null, setDirection(*): void, direction: null}}
 */
 let snake = {
    /**
     * Тело (массив клеток тела: голова + хвост)
     */
     body: null,
    /**
     * Направление движения
     */
     direction: null,
    /**
     * Предыдущее направление движения
     */
     lastStepDirection: null,

    /**
     * Рождение змейки (инициализация значений)
     * @param startPoint
     * @param direction
     */
     init(startPoint, direction) {
        this.body = [startPoint];
        this.direction = direction;
        this.lastStepDirection = direction;
    },

    /**
     * Получение координат следующей точки головы змеи (той точки, если змейка сделает 1 шаг по тому направлению,
     * которое у нее сейчас)
     * @returns {*}
     */
     getNextStepHeadPoint() {
        let firstPoint = this.body[0];

        switch (this.direction) {
            case 'up':
            if (this.body[0].y === 0) {
                return {x: firstPoint.x, y: game.settings.rowsCount - 1};
            }
            else {
                return {x: firstPoint.x, y: firstPoint.y - 1};
            }
            case 'down':
            if (this.body[0].y === game.settings.rowsCount - 1) {
                return {x: firstPoint.x, y: 0};
            }
            else {
                return {x: firstPoint.x, y: firstPoint.y + 1};
            }
            case 'right':
            if (this.body[0].x === game.settings.colsCount - 1) {
                return {x: 0, y: firstPoint.y};
            }
            else {
                return {x: firstPoint.x + 1, y: firstPoint.y};
            }
            case 'left' :
            if (this.body[0].x === 0) {
                return {x: game.settings.colsCount - 1, y: firstPoint.y};
            }
            else {
                return {x: firstPoint.x - 1, y: firstPoint.y};
            }
        }
    },

    /**
     * Метод перемещения змейки на 1 клетку в заданном направлении
     */
     makeStep() {
        //[{x: 5, y: 5}, {x: 6, y: 5}, {x: 7, y: 5}]

        //[{x: 4, y: 5}, {x: 5, y: 5}, {x: 6, y: 5}, {x: 7, y: 5}]

        //[{x: 4, y: 5}, {x: 5, y: 5}, {x: 6, y: 5}]
        this.lastStepDirection = this.direction;
        this.body.unshift(this.getNextStepHeadPoint());
        this.body.pop();
    },

    /**
     * Метод увеличения тела после поедания клетки с едой
     */
     incrementBody() {
        let lastBodyIdx = this.body.length - 1;
        let lastBodyPoint = this.body[lastBodyIdx];
        let lastBodyPointClone = Object.assign({}, lastBodyPoint);
        this.body.push(lastBodyPointClone);
    },

    /**
     * Установка направления
     * @param direction
     */
     setDirection(direction) {
        this.direction = direction;
    },

    /**
     * Проверка, является ли переданная точка одной из точек массива тела змейки
     * @param point
     * @returns {boolean}
     */
     isBodyPoint(point) {
        return this.body.some(snakePoint => snakePoint.x === point.x && snakePoint.y === point.y);
    },
}
return {
    init: snake.init, 
    getNextStepHeadPoint : snake.getNextStepHeadPoint,
    makeStep : snake.makeStep, 
    incrementBody : snake.incrementBody,
    setDirection : snake.setDirection,
    isBodyPoint : snake.isBodyPoint
}
};