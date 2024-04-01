import ComputerPlayer from "./computerPlayer";

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