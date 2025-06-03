import { Menu } from 'lucide-react'; // npm install lucide-react

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <Menu className="menu-icon" />
                <span className="logo-text">MyTodo</span>
            </div>
            <button className="get-started-btn">Get Started</button>
        </header>
    );
};

export default Header;
