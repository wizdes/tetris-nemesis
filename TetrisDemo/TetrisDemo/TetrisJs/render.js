var canvas = document.getElementById( 'canvas' );
var ctx = canvas.getContext('2d');
var otherPieceSet = false;
var otherCanvas = document.getElementById('cloudCanvas');
var otherCtx = otherCanvas.getContext('2d');
var stage;
var W = 300, H = 600;
var i = 0;

// draw a single square at (x, y)
function drawBlock(canvasRef, x, y, width, height) {
    canvasRef.fillRect(width / COLS * x, height / ROWS * y, width / COLS - 1, height / ROWS - 1);
    canvasRef.strokeRect(width / COLS * x, height / ROWS * y, width / COLS - 1, height / ROWS - 1);
}

function renderAll() {
    render(ctx, board, current, currentX, currentY, 300, 600);
    if (otherPieceSet) {
        render(otherCtx, otherBoard, otherCurrent, otherCurrentX, otherCurrentY, 200, 400);
        otherPieceSet = false;
    }
}

// draws the board and the moving shape
function render(canvasRef, board, current, currentX, currentY, width, height) {
    canvasRef.clearRect(0, 0, W, H);
    // send board, current, currentX, currentY
    if (i > 5) {
        sendBoardInformation(board, current, currentX, currentY);
        i = 0;
    } else {
        i++;
    }
    canvasRef.strokeStyle = 'black';
    for ( var x = 0; x < COLS; ++x ) {
        for ( var y = 0; y < ROWS; ++y ) {
            if ( board[ y ][ x ] ) {
                canvasRef.fillStyle = colors[board[y][x] - 1];
                drawBlock(canvasRef, x, y, width, height);
            }
        }
    }

    canvasRef.fillStyle = 'red';
    canvasRef.strokeStyle = 'black';
    for ( var y = 0; y < 4; ++y ) {
        for ( var x = 0; x < 4; ++x ) {
            if ( current[ y ][ x ] ) {
                canvasRef.fillStyle = colors[current[y][x] - 1];
                drawBlock(canvasRef, currentX + x, currentY + y, width, height);
            }
        }
    }
}
