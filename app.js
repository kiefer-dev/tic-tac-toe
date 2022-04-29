//TIC TAC TOE

class TicTacToe {
    constructor(size) {
        this.size = size;
        this.board = new Array(size).fill(new Array(size).fill(" "));
    }

    showBoard() {
        console.log(this.board);
    }

    

}