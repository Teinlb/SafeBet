import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Home";
import Roulette from "./pages/roulette/Roulette";
import Blackjack from "./pages/blackjack/Blackjack";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/roulette" element={<Roulette />} />
                <Route path="/blackjack" element={<Blackjack />} />
            </Routes>
        </Router>
    );
};

export default App;
