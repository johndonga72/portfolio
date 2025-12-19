import React, { useState } from "react";
import "./Projects.css";
function Projects() {
    const [activeTab, setActiveTab] = useState("primary");

    const primaryProjects = [
        {
            id: 1,
            title: "Unified Healthcare Platform",
            description:
                "AI-powered healthcare platform using GPT + Knowledge Graphs to provide symptom analysis, disease insights, and hospital lookup.",
            tech: ["Flask", "Bootstrap", "GPT", "Knowledge Graph", "HTML", "CSS", "JavaScript"],
            image: "/images/healthcare.png",
            github: "#",
            demo: "#",
        },
        {
            id: 2,
            title: "Smart Online Course Registration Portal (SOCRP)",
            description:
                "Full-stack web application to manage user registration, profile verification, and course payments with secure authentication and shareable profiles.",
            tech: ["Django", "React", "PostgreSQL", "Normal CSS", "Postman"],
            image: "/images/socrp.png",
            github: "#",
            demo: "#",
        },
        {
            id: 3,
            title: "Movie Explorer App",
            description:
                "Frontend-only React app that allows users to search and explore movies using the OMDb API, featuring responsive design and movie details view.",
            tech: ["React.js", "Vite", "Axios", "React Router DOM", "CSS (Pure)"],
            image: "/images/movieexplorer.png",
            github: "#",
            demo: "#",
        },
    ];

    const miniProjects = [
        {
            id: 1,
            title: "Weather Dashboard",
            description:
                "5-day weather forecast using OpenWeather API with dynamic city search and card layout.",
            tech: ["React", "API", "CSS"],
            image: "/images/weather.png",
            github: "#",
            demo: "#",
        },
        {
            id: 2,
            title: "To-Do App",
            description:
                "Simple CRUD app using React Hooks and LocalStorage for persistent tasks.",
            tech: ["React", "Hooks"],
            image: "/images/todo.png",
            github: "#",
            demo: "#",
        },
    ];

    const systemDesign = [
        {
            id: 51,
            title: "Profile Share Link System Design",
            description: "Designed a profile sharing feature where users can generate a temporary share link to show their profile to recruiters. The link allows read-only access, works without login, and expires automatically after a set time. The system securely stores tokens, tracks profile views, and ensures safe data access using backend validation.",
            image: ["/assets/SystemDesign/soseq2.png"]
        },
        {
            id: 52,
            title: "User Registration & Email Verification",
            description: "Built a secure user registration system with email verification. Users remain inactive until they verify their email via a unique link. Backend handles token validation, status update, and secure storage of user credentials.",
            image: ["/assets/SystemDesign/soseq.png"]
        },
        {
            id: 53,
            title: "Profile Management System – Class Diagram",
            description: "Implemented a structured class design for managing user profiles, education, experience, skills, languages, and share links, with full admin oversight and secure methods.",
            image: ["/assets/SystemDesign/soclass.png"]
        },
        {
            id: 54,
            title: "Profile Management System – ER Diagram",
            description: "Designed the relational database schema for user profiles, including education, experience, skills, languages, share links, and view logs. Ensures data integrity and scalability.",
            image: ["/assets/SystemDesign/soer.png"]
        }
        , {
            id: 55,
            title: "AI Healthcare Assistant – Activity Diagram",
            description:
                "Represents the activity flow of an AI-based healthcare assistant system, showing how users interact with features like symptom checking, chatbot, medicine finder, knowledge graph visualization, and educational video search.",
            image: ["/assets/SystemDesign/healthcareact.png"]
        },
        {
            id: 56,
            title: "AI Healthcare Assistant – Data Flow Diagram",
            description:
                "Illustrates the data flow between users, administrators, external APIs, and internal components such as knowledge graph, medicine finder, and AI services within the healthcare assistant system.",
            image: ["/assets/SystemDesign/healthcaredata.png"]
        },
        {
            id: 57,
            title: "AI Healthcare Assistant – Sequence Diagram",
            description:
                "Depicts the step-by-step interaction between the user, healthcare system, AI services, and external APIs for processing symptoms, generating responses, fetching videos, and retrieving pharmacy data.",
            image: ["/assets/SystemDesign/healthseq1.png"]
        }
    ];
    const realConcepts = [
        {
            id: 101,
            title: "JWT Authentication & Refresh Tokens",
            description:
                "Implemented secure user authentication using access + refresh tokens with auto token renewal.",
            image: "/assets/RealConcepts/jwt1.png",
        },
        {
            id: 102,
            title: "Payment Integration",
            description:
                "Integrated Razorpay/Stripe for secure order creation, verification, and payment status tracking.",
            image: "/assets/RealConcepts/pay3.png",
        },
        {
            id: 103,
            title: "Email & OTP Verification",
            description:
                "Implemented email-based account verification and OTP login using Django + SMTP.",
            image: "/assets/RealConcepts/ema4.png",
        },
        {
            id: 104,
            title: "Redis Caching",
            description:
                "Optimized API performance using Redis in-memory caching for heavy database queries.",
            image: "/assets/RealConcepts/catche2.png",
        },
        {
            id: 105,
            title: "Role-Based Access Control (RBAC)",
            description:
                "Created role permissions like User, Admin, and Super Admin with restricted route access.",
            image: "/assets/RealConcepts/admin3.png",
        },
        {
            id: 106,
            title: "Pagination & Filtering",
            description:
                "Implemented efficient server-side pagination and dynamic filtering for large datasets.",
            image: "/assets/RealConcepts/pag4.png",
        },
        {
            id: 107,
            title: "API Security & Throttling",
            description:
                "Protected APIs using throttling, rate limits, validation, and error handling.",
            image: "/assets/RealConcepts/rate2.png",
        },
        {
            id: 108,
            title: "Logging & Monitoring",
            description:
                "Added system activity logs, error tracking, and monitoring using Django Logging.",
            image: "/assets/RealConcepts/log1.png",
        },
        {
            id: 109,
            title: "Deployment Concepts",
            description:
                "Deployed applications on AWS/Render/Vercel with environment variables & production configs.",
            image: "/assets/RealConcepts/deploy2.png",
        },
        {
            id: 110,
            title: "Search Optimization (Debounced Search)",
            description:
                "Improved frontend search performance using debounce + API optimization.",
            image: "/assets/RealConcepts/react1.png",
        },
        {
            id: 111,
            title: "React State Management",
            description:
                "Managed complex UI states using Context API, Redux Toolkit, and custom hooks.",
            image: "/assets/RealConcepts/state1.png",
        },
    ];

    const renderProjects = (data) => (
        <div className="project-grid">
            {data.map((project) => (
                <div key={project.id} className="project-card">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="project-content">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        {project.tech && (
                            <div className="tech-tags">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="tag">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        )}
                        <div className="buttons">
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn demo"
                                >
                                    Live Demo
                                </a>
                            )}

                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn github"
                                >
                                    GitHub
                                </a>
                            )}

                            <a href={`/projectdetails/${project.id}`} target="_blank" rel="noopener noreferrer" className="btn details">
                                View Details
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <section className="projects" id="projects">
            <h2 className="section-title">Projects</h2>
            <div className="tabs">
                <button
                    className={activeTab === "primary" ? "active" : ""}
                    onClick={() => setActiveTab("primary")}
                >
                    Primary Projects
                </button>
                <button
                    className={activeTab === "mini" ? "active" : ""}
                    onClick={() => setActiveTab("mini")}
                >
                    Mini Projects
                </button>

                <button
                    className={activeTab === "system" ? "active" : ""}
                    onClick={() => setActiveTab("system")}
                >
                    System Design
                </button>
                <button
                    className={activeTab === "concepts" ? "active" : ""}
                    onClick={() => setActiveTab("concepts")}
                >
                    Real Concepts
                </button>
            </div>

            <div className="tab-content">
                {activeTab === "primary" && renderProjects(primaryProjects)}
                {activeTab === "mini" && renderProjects(miniProjects)}
                {activeTab === "system" && renderProjects(systemDesign)}
                {activeTab === "concepts" && renderProjects(realConcepts)}
            </div>
        </section>
    );
}
export default Projects;

