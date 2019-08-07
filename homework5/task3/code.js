renderer.renderBoard();

window.onkeydown = function (e) {
    //console.log(e);
    mover.makeStep(e);
};
