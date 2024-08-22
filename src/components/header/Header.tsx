import "./header.css";

const Header = () => {
    const isDailySpinAvailable = false;
    const isBalanceUpdateAvailable = true;

    return (
        <div className="header">
            <div className="title">
                <h1>SafeBet</h1>
            </div>
            <div className="options">
                <div className="fortuneWheel">
                    <img src="./wheel.png" alt="" className="icon" />
                    <span>Wheel of Fortune</span>
                    {isDailySpinAvailable && (
                        <span className="notification-dot"></span>
                    )}
                </div>
                <div className="balance">
                    <img src="./chips.png" alt="" className="icon" />
                    <span>7.4K</span>
                    {isBalanceUpdateAvailable && (
                        <span className="notification-dot"></span>
                    )}
                </div>
                <i className="material-symbols-outlined account">
                    account_circle
                </i>
            </div>
        </div>
    );
};

export default Header;
