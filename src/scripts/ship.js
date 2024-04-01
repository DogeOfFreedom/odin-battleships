export default class Ship {
    constructor(length) {
        this.length = length;
        this.hit = 0;
        this.hp = length;
        this.sunk = false;
    }

    hit() {
        this.hit += 1;
        return this.isSunk();
    }

    isSunk() {
        return this.hp === this.hit
    }
}

