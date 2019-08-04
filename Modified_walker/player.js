/**
 * Объект игрока
 * @type {{move(*): void, x: number, y: number}}
 */
let player = {
    x: 0,
    y: 0,
    /**
     * Передвигает игрока
     * @param nextPoint объект новых координат игрока
     */
    move(nextPoint) {
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    }
};
