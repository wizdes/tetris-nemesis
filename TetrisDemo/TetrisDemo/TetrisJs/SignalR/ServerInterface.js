var tetrisBackend;
$(function () {
    tetrisBackend = $.connection.tetrisBackendHub;

    // new game request
    // game over
    // send game piece

    $.connection.hub.start().done(function () { });

    tetrisBackend.client.receiveMessage = function (message) {
        var boardInformation = JSON.parse(message);
        otherPieceSet = true;
        otherBoard = boardInformation.board;
        otherCurrent = boardInformation.current;
        otherCurrentX = boardInformation.currentX;
        otherCurrentY = boardInformation.currentY;
    };

    tetrisBackend.client.startGame = function () {
        newGame();
    };
});

function sendBoardInformation(board, current, currentX, currentY) {
    var boardInformation = JSON.stringify({ board: board, current: current, currentX: currentX, currentY: currentY });
    tetrisBackend.server.send("", boardInformation);
}

function GameEnded() {
    tetrisBackend.server.gameEnd();
}
