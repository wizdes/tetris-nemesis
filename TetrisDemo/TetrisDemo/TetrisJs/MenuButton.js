﻿var buttonHeight = 40;
var buttonWidth = 100;
var btnOffsetX = 300/2 - buttonWidth/2;
var btnOffsetY = 600 / 2 - buttonHeight / 2;
var renderInterval;

function pressHandler(e) {
    newGame();
    renderInterval = setInterval(render, 30);
}

function createButton(text) {
    var btn = new createjs.Shape();
    btn.graphics.beginFill("#ffffff").beginStroke("#000000");
    btn.x = 0;
    btn.y = 0;
    btn.graphics.drawRect(0, 0, buttonWidth, buttonHeight);
    btn.name = "shape: " + 1;
    btn.id = 1;

    var label = new createjs.Text(text, "bold 18px Arial", "#444444");
    label.name = "label";
    label.textAlign = "center";
    label.textBaseline = "middle";
    label.x = buttonWidth / 2;
    label.y = buttonHeight / 2;

    var button = new createjs.Container();
    button.name = "button";
    button.x = btnOffsetX;
    button.y = btnOffsetY;
    button.addChild(btn, label);
    button.addEventListener("mousedown", pressHandler);

    return button;
}