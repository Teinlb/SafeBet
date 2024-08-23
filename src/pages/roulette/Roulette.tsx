import Board from "./board/Board";
import "./roulette.css";
import Wheel from "./wheel/Wheel";

const Roulette = () => {
    return (
        <div className="roulette gameContainer">
            <div className="rouletteTable">
                <Wheel />
                <Board />
            </div>
        </div>
    );
};

export default Roulette;
