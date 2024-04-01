/* eslint-disable no-plusplus */
import Ship from "./ship";

/* eslint-disable prefer-spread */
export default class Gameboard {
    constructor() {
        this.board = Array.apply(null, Array(10)).map(() => Array(10).fill("e"));
        this.shipPlacements = {};
        this.ships = [];
    }

    placeShip(size, direction, x, y) {
        // Check if valid placement
        const occupiedTiles = [];
        switch (direction) {
            case "up":
                for(let i = 0; i <= size; i++) {
                    occupiedTiles.push([x, y - i]);
                }
                break;
            case "down":
                for(let i = 0; i <= size; i++) {
                    occupiedTiles.push([x, y + i]);
                }
                break;
            case "left":
                for(let i = 0; i <= size; i++) {
                    occupiedTiles.push([x - i, y]);
                }
                break;
            default: // right
                for(let i = 0; i <= size; i++) {
                    occupiedTiles.push([x + 1, y]);
                }
                break;
        }        

        // Check if tiles are inside board and unoccupied
        for(let i = 0; i <= size; i++) {
            if(occupiedTiles[i][0] < 0 || occupiedTiles[i][0] > 10 || occupiedTiles[i][1] < 0 || occupiedTiles[i][1] > 10) {
                return false;
            }

            if(Object.hasOwn(this.shipPlacements, occupiedTiles[i])) {
                return false;
            }
        }

        // Place ship on board
        const newShip = new Ship(size);
        occupiedTiles.forEach(tile => {
            this.shipPlacements[tile] = newShip;
            this.board[tile[1]][tile[0]] = "s";
        })
        this.ships.push(newShip);
        return true;
    }

    receiveAttack(x, y) {
        // check if attack is outside of board
        if(x < 0 || x > 10 || y < 0 || y > 10) {
            return false;
        }
        
        const coord = [x, y];
        // hit
        if(Object.hasOwn(this.shipPlacements, coord)) { 
            this.shipPlacements[coord].hit();
            this.board[y][x] = "x";
            return true;
        } 
        // miss
        this.board[y][x] = "o";
        return false;
    }

    allSunk() {
        for(let i = 0; i < this.ships.length; i++) {
            if(this.ships[i].sunk === false) {
                return false;
            }
        }
        return true;
    }
}