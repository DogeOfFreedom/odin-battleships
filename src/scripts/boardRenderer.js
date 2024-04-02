const initialiseBoard = (element, board) => {
    board.forEach(arr => {
        const newRow = document.createElement("div");
        newRow.className = "grid-row";
        arr.forEach(tile => {            
            const newTile = document.createElement("div");
            newTile.classList.add("tile");
            if(tile === "s") { 
                newTile.classList.add("ship-tile");
            } 
            newRow.appendChild(newTile);
        })
        element.appendChild(newRow);
    })
}

const renderBoards = (game) => {
    const player1BoardElement = document.querySelector(".player1-board");
    const player1Board = game.player1.gameBoard.board;
    initialiseBoard(player1BoardElement, player1Board);

    const player2BoardElement = document.querySelector(".player2-board");
    const player2Board = game.player2.gameBoard.board;
    initialiseBoard(player2BoardElement, player2Board);
}

export { renderBoards }