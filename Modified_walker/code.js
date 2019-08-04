let game = {

    run() {
        while (true) {
            let direction = prompt('Введите направление (2, 8, 4 или 6). Для движения по диагонали используйте 1, 3, 7 или 9');

            if (direction === null) {
                console.log('Игра окончена');
                return;
            }

            let nextPoint = mover.getNextPoint(direction);
            renderer.clear();
            player.move(nextPoint);
            renderer.render();
        }
    },

    init() {
        console.log('Для начала игры введите команду game.run()');
        renderer.render();
    },

};




game.init();
