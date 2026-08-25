import React from "react";
import "./About.css";

function About() {
    return (
        <section className="about" id="about">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
                <div className="about-text">
                    <p> Hi, I'm <span className="highlight">John Babu</span>, a{" "} <strong>Python Full Stack Developer and AI-focused Software Developer</strong>{" "} with hands-on experience building real-world backend and full-stack applications using Python, Django, FastAPI, React.js, and REST APIs. </p> <p> 💻 I have worked on production-oriented <strong>Student ERP applications</strong>, developing scalable business logic, REST APIs, PostgreSQL database integrations, JWT authentication, role-based access control, and tenant-aware architectures. I have also worked with Redis, Docker, CI/CD workflows, monitoring, audit logging, and Excel-based bulk data management. </p> <p> 🤖 I'm particularly interested in the intersection of <strong>Backend Engineering and Generative AI</strong>. I have built AI-powered applications by integrating LLM APIs and third-party services, including a conversational chatbot capable of working with tenant-specific ERP data. </p> <p> 🚀 My goal is to build <strong>scalable backend systems and intelligent AI-powered applications</strong> that solve practical business problems. I continuously strengthen my skills in Python, system design, APIs, databases, and Generative AI while focusing on writing clean, maintainable, production-oriented software. </p>
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
