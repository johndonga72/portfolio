import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for reaching out! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section className="contact" id="contact">
            <h2 className="contact-title">📬 Get in Touch</h2>
            <p className="contact-subtitle">
                Feel free to reach out for collaborations, project discussions, or job opportunities.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Message</label>
                    <textarea
                        name="message"
                        placeholder="Write your message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="btn-submit">Send Message</button>
            </form>

            <div className="social-links">
                <a href="mailto:johndonga.it@gmail.com">📧 Email</a>
                <a href="http://www.linkedin.com/in/johndonga72/" target="_blank" rel="noreferrer">💼 LinkedIn</a>
                <a href="https://github.com/johndonga72" target="_blank" rel="noreferrer">💻 GitHub</a>
            </div>
        </section>
    );
};

export default Contact;
