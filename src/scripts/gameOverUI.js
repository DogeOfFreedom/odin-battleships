import boardRenderer from "./boardRenderer";
import game from "./game";

const showGameOver = () => {
    const gameOverModal = document.querySelector("dialog");
    const title = document.querySelector("dialog div h1");
    title.innerHTML = `${game.winner} wins`;
    gameOverModal.showModal();
}

const setupResetBtn = () => {
    const resetBtn = document.querySelector("dialog div button");
    resetBtn.addEventListener("click", () => {
        const modal = document.querySelector("dialog");
        modal.close();
        game.initialise(); // reset game
        boardRenderer.renderBoards();
    })
}

const update = () => {
    showGameOver();
}

export default { showGameOver, setupResetBtn, update };