const canvas: HTMLCanvasElement = document.getElementById('lienzo');
const cx: CanvasRenderingContext2D = canvas.getContext('2d');


class Board {

    initialDisposition: Piece[][] = [
        [
            new Piece('rook', 'black', new Position(0, 0)),
            new Piece('knight', 'black', new Position(0, 0)),
            new Piece('bishop', 'black', new Position(0, 0)),
            new Piece('queen', 'black', new Position(0, 0)),
            new Piece('king', 'black', new Position(0, 0)),
            new Piece('bishop', 'black', new Position(0, 0)),
            new Piece('knight', 'black', new Position(0, 0)),
            new Piece('rook', 'black', new Position(0, 0))
        ],
        [
            new Piece('pawn', 'black', new Position(0, 0)),
            new Piece('pawn', 'black', new Position(0, 0)),
            new Piece('pawn', 'black', new Position(0, 0)),
            new Piece('pawn', 'black', new Position(0, 0)),
            new Piece('pawn', 'black', new Position(0, 0)),
            new Piece('pawn', 'black', new Position(0, 0)),
            new Piece('pawn', 'black', new Position(0, 0)),
            new Piece('pawn', 'black', new Position(0, 0))
        ],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [
            new Piece('pawn', 'white', new Position(0, 0)),
            new Piece('pawn', 'white', new Position(0, 0)),
            new Piece('pawn', 'white', new Position(0, 0)),
            new Piece('pawn', 'white', new Position(0, 0)),
            new Piece('pawn', 'white', new Position(0, 0)),
            new Piece('pawn', 'white', new Position(0, 0)),
            new Piece('pawn', 'white', new Position(0, 0)),
            new Piece('pawn', 'white', new Position(0, 0))
        ],
        [
            new Piece('rook', 'white', new Position(0, 0)),
            new Piece('knight', 'white', new Position(0, 0)),
            new Piece('bishop', 'white', new Position(0, 0)),
            new Piece('queen', 'white', new Position(0, 0)),
            new Piece('king', 'white', new Position(0, 0)),
            new Piece('bishop', 'white', new Position(0, 0)),
            new Piece('knight', 'white', new Position(0, 0)),
            new Piece('rook', 'white', new Position(0, 0))
        ],
    ];




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


    initPieces() {
        const blockSize = canvas.width / 8;
        this.initialDisposition.map((row, rowIndex) => row.map(function (cell, cellIndex) {
            if (cell == null) {

            } else {
                cell.position = new Position(cellIndex * blockSize, rowIndex * blockSize);
                cell.draw();
            }
        }));
    }
}

class Piece {
    type;
    team;
    position: Position
    assets: string;
    constructor(type: 'bishop' | 'king' | 'queen' | 'knight' | 'pawn' | 'rook', team: 'white' | 'black', position: Position) {
        this.type = type;
        this.team = team;
        this.position = position;
        this.assets = `../assets/${this.type}${this.team == 'white' ? 'W' : 'B'}2.png`;

    }


    draw() {
        var image = new Image();

        image.onload = () => cx.drawImage(image, this.position.x, this.position.y);


        image.src = this.assets;
    }
}

class Position {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}


function init() {
    const board = new Board();
    board.drawBoard();
    board.initPieces();
}

init();