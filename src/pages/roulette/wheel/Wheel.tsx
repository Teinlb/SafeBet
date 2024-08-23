import "./wheel.css";

const Wheel = () => {
    return (
        <div className="roulette-wheel">
            <div
                className="layer-2 wheel"
                style={{ transform: "rotate(0deg)" }}
            ></div>
            <div className="layer-3"></div>
            <div
                className="layer-4 wheel"
                style={{ transform: "rotate(0deg)" }}
            ></div>
            <div className="layer-5"></div>
            <div
                className="ball-container"
                style={{ transform: "rotate(0deg)" }}
            >
                <div
                    className="ball"
                    style={{ transform: "translate(0, -163.221px)" }}
                ></div>
            </div>
        </div>
    );
};

export default Wheel;
