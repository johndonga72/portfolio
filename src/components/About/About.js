import React from "react";
import "./About.css";

function About() {
    return (
        <section className="about" id="about">
            <h2 className="section-title">About Me</h2>

            <div className="about-content">
                <div className="about-text">
                    <p>
                        Hi, I'm <span className="highlight">John Babu</span>, a passionate{" "}
                        <strong>Python Full Stack Developer</strong> focused on building scalable web applications
                        using Django and React.js. I enjoy designing systems that blend data, backend logic, and
                        modern UI seamlessly.
                    </p>
                    <p>
                        🎓 I completed <strong>B.Tech in Artificial Intelligence & Data Science</strong>.
                    </p>
                    <p>
                        🚀 What drives me? The excitement of solving real-world problems through code — transforming
                        ideas into impactful, data-driven applications. I’m always eager to learn and experiment with
                        new technologies.
                    </p>
                </div>

                {/* ===== Right Side (Tech Stack) ===== */}
                <div className="tech-stack">
                    <h3>Tech Stack</h3>
                    <div className="tech-logos">
                        <img src="/assets/skills/python.svg" alt="Python" title="Python" />
                        <img src="/assets/skills/django.svg" alt="Django" title="Django" />
                        <img src="\assets\skills\javascript.svg" alt="JavaScript" title="JavaScript" />
                        <img src="\assets\skills\react.svg" alt="ReactJS" title="ReactJS" />
                        <img src="\assets\skills\aws.svg" alt="AWS" title="AWS" />
                        <img src="\assets\skills\postman.svg" alt="Postman" title="Postman" />
                        <img src="\assets\skills\fastapi.svg" alt="FastAPI" title="FastAPI" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
