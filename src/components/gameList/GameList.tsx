import "./gameList.css";

const GameList = () => {
    const games = [
        { name: "Blackjack", image: "./blackjack.jpg" },
        { name: "Roulette", image: "./roulette.jpg" },
        { name: "Slots", image: "./slots.jpg" },
        { name: "Plinko", image: "./plinko.jpg" },
        { name: "Horse Race", image: "./horserace.jpg" },
    ];

    return (
        <div className="gamelist-container">
            <h2 className="gamelist-title">Games</h2>
            <ul className="gamelist">
                {games.map((game, index) => (
                    <li key={index} className="game-item">
                        <img
                            src={game.image}
                            alt={game.name}
                            className="game-image"
                        />
                        <span>{game.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GameList;
