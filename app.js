//TIC TAC TOE

class TicTacToe {
    constructor(size) {
        this.size = size;
        this.board = new Array(size);
        for (let i = 0; i < size; i++) {
            this.board[i] = new Array(size).fill(' ');
        }
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

    takeTurn(player) {
        let position = prompt(`Player ${player}: please enter where you want to put your ${player}. Please enter the row followed by the column, separated by a space.`)
        let row = +position[0] - 1;
        let col = +position[2] - 1;
        this.board[row][col] = player;
        this.showBoard();
    }

}