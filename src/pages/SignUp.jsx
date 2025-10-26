import React, { useState } from 'react'; // 1. Import useState
import { NavLink } from "react-router-dom";
import "../css/signup.css";

export const SignUp = () => {
    // 2. Set up state for inputs and the error message
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    // 3. Create the form submission handler
    const handleSubmit = (event) => {
        // Always prevent the default form submission
        event.preventDefault();

        // Clear any previous error
        setPasswordError('');

        // Check if passwords match
        if (password !== confirmPassword) {
            setPasswordError('Passwords do not match. Please try again.');
            return; // Stop the submission
        }

        // If they match, proceed with signup
        alert('Account created successfully!');
        // In a real app, you would send the form data to your server here
        // e.g., submitSignup({ fullname, email, password });
    };

    return (
        <div id="signup-page">
            <div className="signup">
                <h2 className="signup-title">Sign Up</h2>
                <p className="notice">Create your account to access the system</p>
                
                {/* 4. Attach the onSubmit handler and remove the 'action' */}
                <form className="form-signup" id="signup-form" onSubmit={handleSubmit}>
                    {/* Use htmlFor instead of for */}
                    <label htmlFor="fullname">Full Name</label>
                    <div className="input-name">
                        <i className="fas fa-user icon"></i>
                        <input autoComplete="off" type="text" name="fullname" placeholder="Enter your full name" required />
                    </div>

                    <label htmlFor="email">E-mail</label>
                    <div className="input-email">
                        <i className="fas fa-envelope icon"></i>
                        <input autoComplete="off" type="email" name="email" placeholder="Enter your e-mail" required />
                    </div>

                    <label htmlFor="password">Password</label>
                    <div className="input-password">
                        <i className="fas fa-lock icon"></i>
                        {/* 5. Make this a controlled component */}
                        <input 
                            autoComplete="off" 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="Enter your password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </div>

                    <label htmlFor="confirm-password">Confirm Password</label>
                    <div className="input-confirm-password">
                        <i className="fas fa-lock icon"></i>
                        {/* 5. Make this a controlled component */}
                        <input 
                            autoComplete="off" 
                            type="password" 
                            id="confirm-password" 
                            name="confirm-password" 
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required 
                        />
                    </div>

                    {/* 6. Display the error message from state */}
                    <p
                        id="password-error"
                        style={{
                            color: 'red',
                            textAlign: 'center',
                            marginTop: '10px'
                        }}
                    >
                        {passwordError}
                    </p>
                    <div className="checkbox">
                        <label htmlFor="remember">
                            <input autoComplete="off" type="checkbox" name="remember" />
                            Remember me
                        </label>
                    </div>

                    <button type="submit"><i className="fas fa-user-plus" ></i> Sign Up</button>
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