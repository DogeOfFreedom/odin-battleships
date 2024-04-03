import "../style.css";
import game from "./game";
import boardRenderer from "./boardRenderer";
import gameOverUI from "./gameOverUI";

boardRenderer.renderBoards();
gameOverUI.setupResetBtn();
game.addSub(gameOverUI);

