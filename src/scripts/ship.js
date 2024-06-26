export default class Ship {
    constructor(length) {
        this.length = length;
        this.hp = length;
        this.hits = 0;
        this.sunk = false;
    }

    hit() {
        this.hits += 1;
        return this.isSunk();
    }

    isSunk() {
        if(this.hits === this.hp) {
            this.sunk = true;
            return true;
        }
        return false;
    }
}



