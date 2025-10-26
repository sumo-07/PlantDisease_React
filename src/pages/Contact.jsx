import React, { useState } from 'react';
import "../css/contact.css";

export const Contact = () => {
    // 1. Set up state to manage the form's status message
    const [formStatus, setFormStatus] = useState({ message: '', color: '' });

    // 2. Create the form submission handler
    const handleSubmit = (event) => {
        // Prevent the page from reloading
        event.preventDefault();

        const form = event.currentTarget;

        // Check if the form is valid (using built-in HTML5 validation)
        if (!form.checkValidity()) {
            setFormStatus({
                message: 'Please fill all required fields correctly.',
                color: '#d33' // Red color for error
            });
            // You can also use this to show the default browser popups
            // form.reportValidity(); 
            return;
        }

        // If the form is valid
        setFormStatus({
            message: 'Thanks! Your message has been queued.',
            color: 'var(--green-main)' // Green color for success
        });

        // Reset the form fields
        form.reset();
    };

    return (
        <>
            <header className="hero">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Have a question about the 🌿PlantCare Reach out — we’d love to help.</p>
                </div>
            </header>

            <main className="container" id="contact">
                <section className="grid">
                    <aside className="card info" aria-labelledby="contact-info-title">
                        <h2 id="contact-info-title">Get in touch</h2>
                        <p>Prefer email or phone? Use the details below or send a message from the form.</p>
                        <div className="info-list">
                            <div className="info-item">
                                <div className="icon">@</div>
                                <div className="txt"><div><strong>Email</strong></div><div className="tiny">plantcare@gmail.com</div></div>
                            </div>
                            <div className="info-item">
                                <div className="icon">☎</div>
                                <div className="txt"><div><strong>Phone</strong></div><div className="tiny">+91 90000 00000</div></div>
                            </div>
                            <div className="info-item">
                                <div className="icon">📍</div>
                                <div className="txt"><div><strong>Address</strong></div><div className="tiny">Chitkara University, Rajpura, India</div></div>
                            </div>
                            <div className="info-item">
                                <div className="icon">⏰</div>
                                <div className="txt"><div><strong>Hours</strong></div><div className="tiny">Mon–Fri, 9:00 AM – 5:00 PM IST</div></div>
                            </div>
                        </div>
                        <p className="tiny">Tip: Update the email/phone with your actual project contact details before submission.</p>
                    </aside>

                    <section className="card form" aria-labelledby="contact-form-title">
                        <h2 id="contact-form-title">Send a message</h2>
                        <p>Fill this out and the team will get back to you shortly.</p>
                        {/* 3. Attach the onSubmit handler to the form */}
                        <form id="contactForm" noValidate onSubmit={handleSubmit}>
                            <div className="row">
                                {/* Use htmlFor instead of for */}
                                <div><label htmlFor="name">Your Name</label><input id="name" name="name" type="text" placeholder="Enter your name" required /></div>
                                <div><label htmlFor="email">Email</label><input id="email" name="email" type="email" placeholder="name@example.com" required /></div>
                            </div>
                            <label htmlFor="subject">Subject</label>
                            <input id="subject" name="subject" type="text" placeholder="How can we help?" required />
                            <label htmlFor="topic">Topic</label>
                            {/* Use defaultValue for uncontrolled selects in React */}
                            <select id="topic" name="topic" required defaultValue="">
                                <option value="" disabled>Select a topic</option>
                                <option>General Query</option>
                                <option>Bug Report</option>
                                <option>Feature Request</option>
                                <option>Collaboration</option>
                            </select>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" placeholder="Write your message here…" required></textarea>
                            <div className="actions">
                                {/* Removed onclick="send()", as onSubmit on the form handles it */}
                                <button type="submit" className="btn">Send Message</button>
                                <button type="reset" className="btn secondary">Clear</button>
                            </div>
                            {/* 4. Bind the style and content to the state variables */}
                            <p
                                id="formStatus"
                                className="tiny"
                                role="status"
                                aria-live="polite"
                                style={{ marginTop: '8px', color: formStatus.color }}
                            >
                                {formStatus.message}
                            </p>
                        </form>
                    </section>
                </section>

                <section className="team-wrap">
                    <div className="card team" aria-labelledby="team-title">
                        <h3 id="team-title">Project Team</h3>
                        <div className="members">
                            <div className="member"><div className="avatar">US</div><div className="meta"><div className="name">Ujjawal Singh Bisht</div><div className="role">Team Lead</div></div></div>
                            <div className="member"><div className="avatar">NS</div><div className="meta"><div className="name">Nischay Sharma</div><div className="role">Team Member</div></div></div>
                            <div className="member"><div className="avatar">VN</div><div className="meta"><div className="name">Vansh Nagpal</div><div className="role">Team Member</div></div></div>
                            <div className="member"><div className="avatar">VM</div><div className="meta"><div className="name">Vansh Mittal</div><div className="role">Team Member</div></div></div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}