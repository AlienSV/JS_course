'use strict';

function generateBoard() {
    let chessboard = '';
    let rows = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    for (let i = 0; i < 9; i++) {
        chessboard += '<tr>';

        for (let j = 0; j < 9; j++) {
            if (i === 0) {
                chessboard += `<th>${rows[j]}</th>`;
                continue;
            }
            if (j === 0) {
                chessboard += `<th>${i}</th>`;
                continue;
            }
            chessboard += `<td class=${i%2 == j%2 ? 'white' : 'black'} data-x="${rows[j]}" data-y="${i}"></td>`;
        }
        chessboard += '</tr>';
    }
    return `<table><tbody>${chessboard}</tbody></table>`;
}
document.body.insertAdjacentHTML('afterbegin', generateBoard());
