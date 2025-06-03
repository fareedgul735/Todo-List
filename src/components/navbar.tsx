import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <Link to={"/"} className="">All</Link>
            <br />
            <Link to={"/?todos=action"} className="">Action</Link>
            <br />
            <Link to={"/?todos=completed"} className="">Completed</Link>
            <br />
        </nav>
    )
}

export default Navbar
