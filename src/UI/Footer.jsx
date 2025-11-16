import { NavLink } from "react-router-dom";

export const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-container">

                <div className="footer-column">
                    <h4>🌿PlantCare</h4>
                    <p>
                        Your digital assistant for identifying and treating plant diseases.
                        We help your garden thrive.
                    </p>
                </div>

                <div className="footer-column">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="#">FAQs</NavLink></li>
                        <li><NavLink to="#">Blog</NavLink></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Key Features</h4>
                    <ul>
                        <li><NavLink to="/diagnose" className="f-diagnose-btn">Diagnose NavLink Plant</NavLink></li>
                        <li><NavLink to="/">Disease Library</NavLink></li>
                        <li><NavLink to="#">Treatment Guides</NavLink></li>
                        <li><NavLink to="#">Plant Care Tips</NavLink></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Contact Us</h4>
                    <p>
                        Jansla, Punjab, India<br />
                            Email: info@plantcare.com<br />
                                Phone: +91 (123) 456-7890
                    </p>
                </div>

                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 🌿PlantCare. All rights reserved.</p>
                </div>
        </footer>
    );
}