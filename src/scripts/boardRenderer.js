/* eslint-disable no-plusplus */
import game from "./game";

const renderPlayerBoard = () => {
    const { turn } = game; 
    const element = turn === 1 
        ? document.querySelector(".player1-board") 
        : document.querySelector(".player2-board");
    const { board } = turn === 1 
        ? game.player1.gameBoard 
        : game.player2.gameBoard;

    board.forEach(arr => {
        const newRow = document.createElement("div");
        newRow.className = "grid-row";
        arr.forEach(tile => {            
            const newTile = document.createElement("div");
            newTile.classList.add("player-tile");
            if(tile === "s") { 
                newTile.classList.add("ship-tile");
            } 
            newRow.appendChild(newTile);
        })
        element.appendChild(newRow);
    })
}

const renderEnemyBoard = () => {
    const { turn } = game;
    const element = turn === 1 
        ? document.querySelector(".player2-board") 
        : document.querySelector(".player1-board");
        const { board } = turn === 1 
        ? game.player2.gameBoard 
        : game.player1.gameBoard;
    
    let i = 0;
    board.forEach(arr => {
        const newRow = document.createElement("div");
        newRow.className = "grid-row";
        let j = 0;
        arr.forEach(tile => {            
            const newTile = document.createElement("div");
            newTile.classList.add("enemy-tile", "hoverable-tile");
            const value = `${j}-${i}`;
            newTile.setAttribute("value", value);
            if(tile === "x") {
                newTile.classList.add("enemy-hit-tile");
            } else if (tile === "o") {
                newTile.classList.add("enemy-miss-tile");
            }
            newRow.appendChild(newTile);
            j += 1;
        })
        i += 1;
        element.appendChild(newRow);
    })
}

const addEnemyBoardLogic = () => {
    const { turn } = game;
    const enemyBoard = turn === 1 
        ? document.querySelector(".player2-board") 
        : document.querySelector(".player1-board");
    const rows = Array.from(enemyBoard.children);
    rows.forEach(row => {
        const children = Array.from(row.children);
        children.forEach(child => {
            const [x, y] = child.getAttribute("value").split("-");
            child.addEventListener("click", () => {
                game.attackPlayer(x, y);
                const tile = turn === 1 
                    ? game.player2.gameBoard.board[y][x]
                    : game.player1.gameBoard.board[y][x]
                if(tile === "x") {
                    child.classList.add("enemy-hit-tile");
                } else if (tile === "o") {
                    child.classList.add("enemy-miss-tile");
                }
                child.classList.remove("hoverable-tile");
            }, {once: true})
        })
    })
}

const renderBoards = () => {
    renderPlayerBoard();
    renderEnemyBoard();
    addEnemyBoardLogic();
}

export default { renderBoards }