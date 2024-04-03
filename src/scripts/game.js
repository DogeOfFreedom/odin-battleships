import ComputerPlayer from "./computerPlayer";
import Player from "./player";

class Game {
    constructor() {
        this.initialise();
        this.subscribers = [];
    }

    addSub(obj) {
        this.subscribers.push(obj);
    }

    updateSubs() {
        this.subscribers.forEach(sub => {
            sub.update();
        });
    }

    attackPlayer(x, y) {
        const hit = this.turn === 1 ? this.player2.receiveAttack(x, y) : this.player1.receiveAttack(x, y);
        if(hit) {
            const allSunk = this.turn === 1 ? this.player2.isAlive() : this.player1.isAlive();
            if(allSunk) {
                this.winner = this.turn === 1 ? this.player1.name : this.player2.name;
                this.over = true;
                this.updateSubs();
            } else if (this.vsComputer && this.turn === 2) {
                this.computerTurn();
            }
        } else if (this.vsComputer && this.turn === 1) {
            this.changeTurn();
            this.computerTurn();
        } else {
            this.changeTurn();
        }
    }

    // Use predetermined co-ordinates for now
    mockGameSetup() {
        this.player1.gameBoard.placeShip(2, "left", 4, 0);
        this.player1.gameBoard.placeShip(5, "up", 2, 7);
        this.player2.gameBoard.placeShip(1, "up", 3, 7);
        this.player2.gameBoard.placeShip(3, "down", 9, 0);
    }

    changeTurn() {
        this.turn = this.turn === 1 ? 2 : 1;
    }

    computerTurn() {
        const computerMove = this.player2.getMove()
        this.attackPlayer(computerMove[0], computerMove[1]);
    }

    get isGameOver() {
        return this.over;
    }

    initialise() {
        this.player1 = new Player("player1");
        this.player2 = new ComputerPlayer();
        this.winner = null;
        this.turn = 1;
        this.over = false;
        this.vsComputer = true;
        this.mockGameSetup();
    }
}

const game = new Game();

export default game;
