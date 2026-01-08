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
            id: 21,
            title: "YouTube UI Clone",
            description:
                "Static YouTube user interface built using pure HTML and CSS, focusing on layout structure, responsiveness, and modern UI styling.",
            tech: ["HTML", "CSS"],
            image: ["/assets/miniprojects/youtube1.jpg"],
            github: "https://github.com/johndonga72/youtube",
            demo: "https://youtube-0kz5.onrender.com",
        },
        {
            id: 22,
            title: "APJ Abdul Kalam Tribute Page",
            description:
                "A tribute web page dedicated to Dr. A. P. J. Abdul Kalam, designed using pure HTML and CSS to showcase his life, achievements, and inspirational journey.",
            tech: ["HTML", "CSS"],
            image: ["/assets/miniprojects/apj1.jpg"],
            github: "https://github.com/johndonga72/tribute",
            demo: "https://tribute-obom.onrender.com",
        },
        {
            id: 23,
            title: "Admin Panel User Interface",
            description:
                "Developed a modern admin dashboard UI using React (Vite) and Tailwind CSS, focusing on responsive layouts, reusable components, and utility-first styling.",
            tech: ["React", "Vite", "Tailwind CSS"],
            image: ["/assets/miniprojects/admin2.jpg"],
            github: "https://github.com/johndonga72/admin-panel",
            demo: "#",
        },
        {
            id: 24,
            title: "Personal Portfolio Website",
            description:
                "Designed and developed a personal portfolio website using React (Vite), Tailwind CSS, and custom CSS to showcase projects, skills, and contact information with a responsive layout.",
            tech: ["React", "Vite", "Tailwind CSS", "CSS"],
            image: ["/assets/miniprojects/portfolio1.jpg"],
            github: "https://github.com/johndonga72/portfolio",
            demo: "https://portfolio-um5n.onrender.com",
        },
        {
            id: 25,
            title: "React Counter App",
            description:
                "Built a simple counter application using React to understand state management, event handling, and component re-rendering.",
            tech: ["React", "JavaScript", "CSS"],
            image: ["/assets/miniprojects/counter.jpg"],
            github: "https://github.com/johndonga72/counter",
            demo: "https://counter-onbh.onrender.com",
        },
        {
            id: 26,
            title: "Walmart Sales Analysis",
            description:
                "Performed sales data analysis using MySQL to extract insights such as top-selling products, revenue trends, branch performance, and customer purchasing patterns.",
            tech: ["MySQL", "SQL", "Data Analysis"],
            image: ["/assets/miniprojects/walmart1.jpg"],
            github: "https://github.com/johndonga72/walmart",
            demo: "#",
        },
        {
            id: 27,
            title: "Employee Management Backend (GraphQL API)",
            description:
                "Built a backend system for managing employee data using Django and GraphQL, supporting CRUD operations with filtering, pagination, and secure authentication.",
            tech: ["Django", "GraphQL", "JWT"],
            image: ["/assets/miniprojects/graphql1.png"],
            github: "#",
            demo: "#",
        },
        {
            id: 28,
            title: "Inventory Management System (FastAPI)",
            description:
                "Developed a basic inventory management application with CRUD operations using FastAPI for backend and React for frontend.",
            tech: ["FastAPI", "React", "CSS", "REST API"],
            image: ["#"],
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
    const internshipProjects = [
        {
            id: 8,
            title: "Inventory Management System (FastAPI)",
            description:
                "Developed a basic inventory management application with CRUD operations using FastAPI for backend and React for frontend.",
            tech: ["FastAPI", "React", "CSS", "REST API"],
            image: "/images/fastapi-inventory.png",
            github: "#",
            demo: "#",
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

                <button
                    className={activeTab === "internship" ? "active" : ""}
                    onClick={() => setActiveTab("internship")}
                >
                    Test Internships
                </button>
            </div>

            <div className="tab-content">
                {activeTab === "primary" && renderProjects(primaryProjects)}
                {activeTab === "mini" && renderProjects(miniProjects)}
                {activeTab === "system" && renderProjects(systemDesign)}
                {activeTab === "concepts" && renderProjects(realConcepts)}
                {activeTab === "internship" && renderProjects(internshipProjects)}
            </div>
        </section>
    );
}
export default Projects;

