import { NavLink } from "react-router-dom";
import "../css/login.css";

export const Login = () => {
    return (
        <div id="login-page">
            <div className="login">
                <h2 className="login-title">Login</h2>
                <p className="notice">Please login to access the system</p>
                <form className="form-login" action="index.html">
                    <label htmlFor="email">E-mail</label>
                    <div className="input-email">
                        <i className="fas fa-envelope icon"></i>
                        <input autoComplete="off" type="email" name="email" placeholder="Enter your e-mail" required />
                    </div>
                    <label htmlFor="password">Password</label>
                    <div className="input-password">
                        <i className="fas fa-lock icon"></i>
                        <input autoComplete="off" type="password" name="password" placeholder="Enter your password" required />
                    </div>
                    <div className="checkbox">
                        <label htmlFor="remember">
                            <input autoComplete="off" type="checkbox" name="remember" />
                                Remember me
                        </label>
                    </div>
                    <button type="submit"><i className="fas fa-door-open"></i> Login</button>
                </form>
                <NavLink to="#">Forgot your password?</NavLink>
                <NavLink to="/signup">Don't have an account? Sign Up here</NavLink>

                <div className="home">
                    <NavLink to="/">← Back to Home</NavLink>
                </div>
            </div>
            <div className="background">
                <h1>“To plant a garden is to believe in tomorrow.” — Audrey Hepburn 🌱</h1>
            </div>
        </div>
    );
}