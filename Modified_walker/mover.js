let mover = {
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
};
