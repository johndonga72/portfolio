import React from "react";
import "./Experience.css";

function Experience() {
    return (
        <section className="experience" id="experience">
            <h2 className="section-title">Experience</h2>

            <div className="experience-content">

                {/* ===== Warals Technology ===== */}
                <div className="experience-card">
                    <div className="experience-header">
                        <div>
                            <h3>Software Engineer Trainee</h3>
                            <h4>Warals Technology</h4>
                        </div>

                        <span className="experience-duration">
                            July 2026 – August 2026
                        </span>
                    </div>

                    <p className="experience-summary">
                        Worked on backend development for a Student ERP System,
                        focusing on scalable business logic, tenant-aware architecture,
                        AI integration, and production-oriented backend features.
                    </p>

                    <ul className="experience-points">
                        <li>
                            Developed backend services for a Student ERP System using
                            <strong> Django and FastAPI</strong>, implementing scalable
                            business logic across multiple modules.
                        </li>

                        <li>
                            Designed and implemented a
                            <strong> tenant-aware database architecture</strong> to
                            securely manage and isolate data across different tenants.
                        </li>

                        <li>
                            Implemented <strong>Redis, monitoring, and audit logging</strong>,
                            and contributed to Docker-based CI/CD workflows for application
                            reliability and deployment.
                        </li>

                        <li>
                            Developed <strong>Excel import/export</strong> features for
                            efficient bulk data management within the ERP system.
                        </li>

                        <li>
                            Built an <strong>AI-powered chatbot</strong> that retrieves
                            tenant-specific ERP data and provides contextual information
                            through a conversational interface.
                        </li>
                    </ul>

                    <div className="experience-tags">
                        <span>Django</span>
                        <span>FastAPI</span>
                        <span>PostgreSQL</span>
                        <span>Redis</span>
                        <span>Docker</span>
                        <span>AI / LLM</span>
                    </div>
                </div>

                {/* ===== SOFTVAN LABS ===== */}
                <div className="experience-card">
                    <div className="experience-header">
                        <div>
                            <h3>Software Trainee</h3>
                            <h4>SOFTVAN LABS PRIVATE LIMITED</h4>
                        </div>

                        <span className="experience-duration">
                            October 2025 – May 2026
                        </span>
                    </div>

                    <p className="experience-summary">
                        Worked on an AI-based digital newspaper application,
                        contributing to application testing, responsive UI improvements,
                        bug validation, and collaborative development workflows.
                    </p>

                    <ul className="experience-points">
                        <li>
                            Tested and validated <strong>AI-based digital newspaper</strong>
                            features, identifying functional issues and ensuring application
                            quality before release.
                        </li>

                        <li>
                            Redesigned responsive layouts using
                            <strong> CSS and React.js</strong>, improving cross-device
                            consistency across key user-facing pages.
                        </li>

                        <li>
                            Executed manual testing scenarios, documented bugs, and
                            collaborated with the development team to verify fixes and
                            improve product stability.
                        </li>

                        <li>
                            Managed feature branches and pull requests on
                            <strong> GitHub</strong>, maintaining clean version history
                            in a collaborative team environment.
                        </li>
                    </ul>

                    <div className="experience-tags">
                        <span>React.js</span>
                        <span>CSS</span>
                        <span>AI</span>
                        <span>Testing</span>
                        <span>GitHub</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
export default Experience;

