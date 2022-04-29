//TIC TAC TOE

class TicTacToe {
    constructor(size) {
        this.size = size;
        this.board = new Array(size).fill(new Array(size).fill(' '));
    }

    showBoard() {
        console.log(this.board);
    }

    clearBoard(char = ' ') {
        for (let row = 0; row < this.size; row++) {
            for (let col = 0; col < this.size; col++) {
                this.board[row][col] = char;
            }
        }
    }

}