import Ship from "./ship"

test("Ship sinks when hp hits 0", () => {
    const length = 3;
    const newShip = new Ship(length);
    newShip.hit();
    newShip.hit();
    expect(newShip.hit()).toBe(true);
})