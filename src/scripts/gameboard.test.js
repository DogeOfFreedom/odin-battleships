import ComputerPlayer from "./computerPlayer";
import Gameboard from "./gameboard"
import Player from "./player";

test("gameboard instantiated correctly", () => {
    const gameboard = new Gameboard();
    expect(gameboard.board.length).toBe(10);
    expect(gameboard.board[0].length).toBe(10);
    expect(gameboard.board[0][0]).toBe("e");
})

test("Place ship at (0,0), size 3, directed DOWN", () => {
    const gameBoard = new Gameboard();
    expect(gameBoard.placeShip(3, "down", 0, 0)).toBe(true);
})

test("Place ship at (10,10), size 5, directed RIGHT", () => {
    const gameBoard = new Gameboard();
    expect(gameBoard.placeShip(5, "right", 10, 10)).toBe(false);
})

test("Place overlapping ships", () => {
    const gameBoard = new Gameboard();
    gameBoard.placeShip(2, "up", 5, 5);
    expect(gameBoard.placeShip(2, "left", 6, 4)).toBe(false);
})

test("Fire at co-ordinate (0,0), HIT", () => {
    const gameBoard = new Gameboard();
    gameBoard.placeShip(3, "down", 0, 0);
    expect(gameBoard.receiveAttack(0, 0)).toBe(true);
})

test("Fire at co-ordinate (5,6), MISS", () => {
    const gameBoard = new Gameboard();
    gameBoard.placeShip(3, "down", 0, 0);
    expect(gameBoard.receiveAttack(5, 6)).toBe(false);
})

test("Fire at co-ordinate (50,-10), MISS", () => {
    const gameBoard = new Gameboard();
    gameBoard.placeShip(3, "down", 0, 0);
    expect(gameBoard.receiveAttack(50, -10)).toBe(false);
})

test("Not all ships sunk", () => {
    const gameBoard = new Gameboard();
    gameBoard.placeShip(3, "down", 0, 0);
    expect(gameBoard.allSunk()).toBe(false);
})

test("Board reports all ship sunk", () => {
    const gameBoard = new Gameboard();
    gameBoard.placeShip(1, "down", 0, 0);
    gameBoard.receiveAttack(0, 0);
    expect(gameBoard.allSunk()).toBe(true);
})

test("Computer makes a move that's within the board", () => {
    const computer = new ComputerPlayer();
    const coord = computer.chooseRandomCoord();
    expect(coord[0] >= 0 && coord[0] <= 10).toBe(true);
    expect(coord[1] >= 0 && coord[1] <= 10).toBe(true);
})

test("Computer doesn't make same move twice", () => {
    const computer = new ComputerPlayer();
    computer.moves.push([1,2]);
    expect(computer.alreadyMadeMove([1,2])).toBe(true);
})

