import "../style.css";
import { renderBoards } from "./boardRenderer";
import Game from "./game";

const game = new Game();
renderBoards(game);