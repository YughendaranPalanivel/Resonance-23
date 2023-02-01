import "./Appbar.css";
import {Link} from "react-router-dom";

const Appbar = () => {
    return(
    <div className="app-bar">
        <nav className="app-bar-navigator">
            <ul className="app-bar-navigator-list">
                <Link className="app-bar-navigator-list-content" to = "/">Home</Link>
                <Link className="app-bar-navigator-list-content" to = "/events">Events</Link>
                <Link className="app-bar-navigator-list-content" to = "/workshops">Workshops</Link>
                <Link className="app-bar-navigator-list-content" to = "/team/Office Bearers">Team</Link>
                <Link className="app-bar-navigator-list-content" to = "/contact">Contact</Link>
            </ul>
        </nav>
    </div>
    );
}

export default Appbar;