import Container from "./components/container/Container";
import Footer from "./components/footer/Footer";
import GameList from "./components/gameList/GameList";
import Header from "./components/header/Header";

const App = () => {
    return (
        <div>
            <Header />
            <Container />
            <GameList />
            <Footer />
        </div>
    );
};

export default App;
