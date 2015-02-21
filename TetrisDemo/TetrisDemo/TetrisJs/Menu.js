var startButton;

function createGame() {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver();
    stage.update();

    var canvas = document.getElementById('menuCanvas');
    startButton = createButton("START");
    stage = new createjs.Stage(document.getElementById("menuCanvas"));

    stage.addChild(startButton);
    stage.update();
}

createGame();