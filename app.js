//TIC TAC TOE

class TicTacToe {
    constructor() {
        this.board = new Array(3);
        for (let i = 0; i < 3; i++) {
            this.board[i] = new Array(3).fill(' ');
        }
    }

    showBoard() {
        console.log(this.board);
    }

    clearBoard(char = ' ') {
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                this.board[row][col] = char;
            }
        }
    }

    takeTurn(player) {
        let position = prompt(`Player ${player}: please enter where you want to put your ${player}. Please enter the row followed by the column, separated by a space.`)
        let row = +position[0] - 1;
        let col = +position[2] - 1;

        if (this.board[row][col] === " ") {
            this.board[row][col] = player;
            this.checkForWin(player);
        } else {
            console.log("This space is already taken!")
        }
        
        this.showBoard();
    }

    checkForWin(player) {
        let win = false;
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (this.board[row].every(colPos => colPos === player) || this.board.every(rowPos => rowPos[col] === player)) {
                   win = true; 
                }
            }
        }

        if (win) console.log(`${player} wins!!!`);
    }

}