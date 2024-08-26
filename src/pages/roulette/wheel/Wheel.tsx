import { useState } from "react";
import "./wheel.css";

let spinnedNumbers:number[] =[]


const Wheel = () => {
    const [spinning, setSpinning] = useState(false);
    const [wheelRotation, setWheelRotation] = useState(0);
    const [ballRotation, setBallRotation] = useState(0);

    const startSpin = (number: number) => {
        if (!spinning) {
            setSpinning(true);
            console.log(number);

            const rouletteNumbers:number[] = [
                0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8,
                23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12,
                35, 3, 26,
            ];

            const numberPos = rouletteNumbers.indexOf(number);
            const lastNumber = spinnedNumbers[spinnedNumbers.length-1]

            let relativePos;
            if (lastNumber) {
                const lastNumberPos = rouletteNumbers.indexOf(lastNumber);
                relativePos = numberPos - lastNumberPos;
            } else {
                relativePos = numberPos;
            }

            const anglePerNumber = 360 / 37;
            const numberAngle = relativePos * anglePerNumber;

            const randomRotations = Math.floor(Math.random() * 4) + 4;
            const newWheelRotation = randomRotations * 360 - numberAngle;
            const newBallRotation = -randomRotations * 360;

            setWheelRotation(prevRotation => prevRotation + newWheelRotation);
            setBallRotation(prevRotation => prevRotation + newBallRotation);            

            spinnedNumbers.push(number);

            setTimeout(() => {
                setSpinning(false);
            }, 7000);
        }
    };

    return (
        <div className="roulette-wheel" onClick={() => startSpin(Math.floor(Math.random() * 37))}>
            <div
                className="layer-2"
                style={{ transform: `rotate(${wheelRotation}deg)` }}
            ></div>
            <div className="layer-3"></div>
            <div className="layer-4"></div>
            <div className="layer-5"></div>
            <div
                className="ball-container"
                style={{ transform: `rotate(${ballRotation}deg)` }}
            >
                <div
                    className={`ball ${spinning ? "spinning-ball" : ""}`}
                ></div>
            </div>
        </div>
    );
};

export default Wheel;
