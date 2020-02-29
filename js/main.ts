const canvas: HTMLCanvasElement = document.getElementById('lienzo');
const cx: CanvasRenderingContext2D = canvas.getContext('2d');


class Board {

    drawBoard() {
        const blockSize = canvas.width / 8;
        for (var row = 0; row < 8; row++) {
            for (var column = 0; column < 8; column++) {
                cx.fillStyle = column % 2 == 0 ? row % 2 == 0 ? 'black' : 'white' : row % 2 == 0 ? 'white' : 'black';
                cx.fillRect(column * blockSize, row * blockSize, blockSize, blockSize);
                cx.fill();

            }
        }
    }
}


function init() {
    const board = new Board();
    board.drawBoard();
}

init();