import "../style.css";
import boardRenderer from "./boardRenderer";
import game from "./game";

boardRenderer.renderBoards();

const compAttackSimBtn = document.querySelector(".comp-attack");
compAttackSimBtn.addEventListener("click", () => {
    for(let i = 0; i < 10; i += 1) {
        game.computerTurn();
    }
    boardRenderer.renderPlayerBoard();
})