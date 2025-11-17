import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import "../css/signup.css";

export const SignUp = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [strengthMessage, setStrengthMessage] = useState('');
    const [strengthClass, setStrengthClass] = useState('');

    // Function to check password strength
    const checkPasswordStrength = (pwd) => {
        const hasUpper = /[A-Z]/.test(pwd);
        const hasLower = /[a-z]/.test(pwd);
        const hasNumber = /[0-9]/.test(pwd);
        const hasSpecial = /[^A-Za-z0-9]/.test(pwd);
        const isLongEnough = pwd.length >= 8;

        if (!isLongEnough) {
            setStrengthClass("strength-weak");
            return "Password must be at least 8 characters";
        }

        if (hasUpper && hasLower && hasNumber && hasSpecial) {
            setStrengthClass("strength-strong");
            return "Strong password ✔";
        }

        if ((hasLower || hasUpper) && hasNumber) {
            setStrengthClass("strength-medium");
            return "Medium password";
        }

        setStrengthClass("strength-weak");
        return "Weak password";
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setStrengthMessage(checkPasswordStrength(newPassword));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setPasswordError('');

        if (password !== confirmPassword) {
            setPasswordError('Passwords do not match.');
            return;
        }

        if (strengthMessage !== "Strong password ✔") {
            setPasswordError('Please choose a strong password before signing up.');
            return;
        }

        alert('Account created successfully!');
    };

    return (
        <div id="signup-page">
            <div className="signup">
                <h2 className="signup-title">Sign Up</h2>
                <p className="notice">Create your account to access the system</p>

                <form className="form-signup" id="signup-form" onSubmit={handleSubmit}>

                    <label htmlFor="fullname">Full Name</label>
                    <div className="input-name">
                        <i className="fas fa-user icon"></i>
                        <input type="text" name="fullname" placeholder="Enter your full name" required />
                    </div>

                    <label htmlFor="email">E-mail</label>
                    <div className="input-email">
                        <i className="fas fa-envelope icon"></i>
                        <input type="email" name="email" placeholder="Enter your e-mail" required />
                    </div>

                    <label htmlFor="password">Password</label>
                    <div className="input-password">
                        <i className="fas fa-lock icon"></i>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>

                    {/* Password strength message with color */}
                    <p className={`strength-message ${strengthClass}`}>
                        {strengthMessage}
                    </p>

                    <label htmlFor="confirm-password">Confirm Password</label>
                    <div className="input-confirm-password">
                        <i className="fas fa-lock icon"></i>
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    <p id="password-error" className="error-text">
                        {passwordError}
                    </p>

                    <div className="checkbox">
                        <label htmlFor="remember">
                            <input type="checkbox" name="remember" /> Remember me
                        </label>
                    </div>

                    <button type="submit"><i className="fas fa-user-plus"></i> Sign Up</button>
                </form>

                <NavLink to="/login">Already have an account? Login here</NavLink>

                <div className="home">
                    <NavLink to="/">← Back to Home</NavLink>
                </div>
            </div>

            <div className="background">
                <h1>"The best time to plant a tree was 20 years ago. The second best time is now." — Chinese Proverb 🌳</h1>
            </div>
        </div>
    );
};
