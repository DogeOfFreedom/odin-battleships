/* eslint-disable no-underscore-dangle */
import Gameboard from "./gameboard";

export default class Player {
    constructor(name) {
        this.name = name;
        this._gameBoard = new Gameboard();
    }
    
    get gameBoard() {
        return this._gameBoard;
    }
}