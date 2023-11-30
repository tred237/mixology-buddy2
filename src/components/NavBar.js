import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <div id="nav-bar" >
            <div id="nav-links">
                <h1 id="app-header">Mixology Buddy</h1>
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/add-cocktail">Add Cocktail</NavLink>
            </div>
        </div>
    )
}