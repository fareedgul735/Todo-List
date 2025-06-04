import { Link, useLocation } from "react-router-dom"
import "./global.css"

const Navbar = () => {
    const location = useLocation();
    const current = location.search;
    return (
        <nav className="navbar">
            <Link to={"/"} className={current === "" ? "nav-link active" : "nav-link"}>All</Link>
            <Link to={"/?todos=action"} className={current === "?todos=action" ? "nav-link active" : "nav-link"}>InComplete</Link>
            <Link to={"/?todos=completed"} className={current === "?todos=completed" ? "nav-link active" : "nav-link"}>Completed</Link>
        </nav>
    )
}

export default Navbar
