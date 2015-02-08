function createGame() {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver();
    var startButton = createButton("START");

    stage.addChild(startButton);
    stage.update();
}

createGame();