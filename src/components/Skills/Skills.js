import React from "react";
import "./Skills.css";

function Skills() {
    const skills = {
        "Programming Languages": ["Python", "JavaScript", "SQL"],
        "Frontend Technologies": [
            "HTML5",
            "CSS3",
            "React.js",
            "Tailwind CSS",
        ],
        "Backend & AI Integration": [
            "Django",
            "Django REST Framework",
            "FastAPI",
            "Flask",
            "Scikit-learn",
            "LangChain",
        ],
        Database: ["PostgreSQL", "MySQL", "MongoDB"],
        "Tools & Platforms": [
            "Git",
            "GitHub",
            "Docker",
            "Postman",
            "VS Code",
            "Render",
            "CI/CD",
            "AWS (EC2, S3)",
        ],
        "Core Competencies": [
            "Problem Solving",
            "Communication",
            "Teamwork",
            "Adaptability",
        ],
    };

    return (
        <section className="skills" id="skills">
            <h2 className="section-title">Skills & Technologies</h2>

            <div className="skills-grid">
                {Object.entries(skills).map(([category, items], idx) => (
                    <div key={idx} className="skill-card">
                        <h3 className="skill-category">{category}</h3>
                        <div className="skill-list">
                            {items.map((item, i) => (
                                <span key={i} className="skill-item">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
