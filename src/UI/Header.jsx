import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <nav>
            <NavLink to="/" className="logo">🌿PlantCare</NavLink>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/login" className="login-btn">Login/Signup</NavLink></li>
            </ul>
        </nav>
    );
}