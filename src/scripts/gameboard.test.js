import Gameboard from "./gameboard"

test("gameboard instantiated correctly", () => {
    const gameboard = new Gameboard();
    expect(gameboard.board.length).toBe(10);
    expect(gameboard.board[0].length).toBe(10);
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