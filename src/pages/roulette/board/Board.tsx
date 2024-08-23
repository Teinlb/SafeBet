import "./board.css";
import Chips from "./chips/Chips";

const Board = () => {
    return (
        <div className="roulette-board">
            <img
                src="src\pages\roulette\assets\Board.png"
                alt=""
                className="board-image"
            />
            <Chips />
        </div>
    );
};

export default Board;
