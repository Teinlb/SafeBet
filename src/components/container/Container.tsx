import "./container.css";

const Container = () => {
    return (
        <div className="container">
            <div className="left">
                <div className="avatar-section">
                    <img
                        src="./account_circle.png"
                        alt="Avatar"
                        className="avatar"
                    />
                    <button className="change-avatar">Change Avatar</button>
                </div>
                <input
                    type="text"
                    placeholder="Enter your username"
                    className="username-input"
                />
            </div>
            <div className="right">
                <h2>Multiplayer</h2>
                <button className="create">Create</button>
                <button className="join">Join</button>
            </div>
        </div>
    );
};

export default Container;
