function createGame() {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver();
    var startButton = createButton("START");

    var canvas = document.getElementById('menuCanvas');
    var context = canvas.getContext('2d');

    // draw blue rectangle
    context.beginPath();
    context.rect(200, 20, 100, 100);
    context.fillStyle = 'blue';
    context.fill();

    stage.addChild(startButton);
    stage.update();
}

createGame();