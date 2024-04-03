/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */
import Player from "./player";

export default class ComputerPlayer extends Player {
    constructor() {
        super("Computer");
        this.moves = [];
    }

    getMove() {
        let coord = this.chooseRandomCoord();
        while (this.alreadyMadeMove(coord)) {
            coord = this.chooseRandomCoord();
        };
        this.moves.push(coord);
        return coord;
    }

    alreadyMadeMove(move) {
        for(let i = 0; i < this.moves.length; i++) {
            if(JSON.stringify(this.moves[i]) === JSON.stringify(move)) {
                return true;
            }
        }
        return false;
    }

    chooseRandomCoord() {
        const x = this.getRandomInt();
        const y = this.getRandomInt();
        return [x, y];
    }

    getRandomInt() {
        const boardSize = 10;
        return Math.floor(Math.random() * boardSize);
    }
}