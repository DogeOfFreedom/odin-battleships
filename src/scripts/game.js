import ComputerPlayer from "./computerPlayer";
import Player from "./player";

class Game {
    constructor() {
        this.player1 = new Player("player1");
        this.player2 = new ComputerPlayer();
        this.mockGameSetup();
    }

    attackPlayer(player, x, y) {
        if(player === 1) {
            this.player1.receiveAttack(x, y);
        } else {
            this.player2.receiveAttack(x, y);
        }
    }

    // Use predetermined co-ordinates for now
    mockGameSetup() {
        this.player1.gameBoard.placeShip(2, "left", 4, 0);
        this.player1.gameBoard.placeShip(5, "up", 2, 7);
        this.player2.gameBoard.placeShip(1, "up", 3, 7);
        this.player2.gameBoard.placeShip(3, "down", 9, 0);
    }
}

const game = new Game();

export default game;
