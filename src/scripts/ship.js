export default class Ship {
    constructor(length) {
        this.length = length;
        this.hp = length;
        this.sunk = false;
    }

    hit() {
        this.hp -= 1;
        return this.isSunk();
    }

    isSunk() {
        return this.hp <= 0;
    }
}



