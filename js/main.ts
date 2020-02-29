const canvas: HTMLCanvasElement = document.getElementById('lienzo');
const cx: CanvasRenderingContext2D = canvas.getContext('2d');


class Board {
    drawBoard() {
        const blockSize = canvas.width / 8;
        for (var row = 0; row < 8; row++) {
            for (var column = 0; column < 8; column++) {
                cx.fillStyle = column % 2 == 0 ? row % 2 == 0 ? 'grey' : 'white' : row % 2 == 0 ? 'white' : 'grey';
                cx.fillRect(column * blockSize, row * blockSize, blockSize, blockSize);
                cx.fill();

            }
        }
    }
}

class Piece {
    type;
    team;
    assets;
    constructor(type: 'bishop' | 'king' | 'queen' | 'knight' | 'pawn' | 'rook', team: 'white' | 'black') {
        this.type = type;
        this.team = team;
        this.assets = {
            'bishop': `../assets/bishop${this.team == 'white' ? 'W' : 'B'}2.png`,
            'king': `../assets/king${this.team == 'white' ? 'W' : 'B'}2.png`,
            'queen': `../assets/queen${this.team == 'white' ? 'W' : 'B'}2.png`,
            'pawn': `../assets/pawn${this.team == 'white' ? 'W' : 'B'}2.png`,
            'rook': `../assets/rook${this.team == 'white' ? 'W' : 'B'}2.png`,
            'knight': `../assets/knight${this.team == 'white' ? 'W' : 'B'}2.png`
        };
    }


    draw() {
        var image = new Image();

        image.onload = function () {
            cx.drawImage(image, 40, 40);
        }

        image.src = this.assets[this.type];
    }
}

function init() {
    const board = new Board();
    const piece = new Piece('pawn', 'black');
    board.drawBoard();
    piece.draw();
}

init();