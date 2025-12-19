import React from "react";
import "./Training.css";

const Training = () => {
    const trainings = [
        {
            title: "Azure Cloud Computing — ExcelR",
            year: "April 2024 – June 2024 ",
            description:
                "Gained hands-on experience with Microsoft Azure services, including App Services, Virtual Machines, and Azure Storage. "
        },
        {
            title: "Web Development — InternPe",
            year: "May 2025 – Oct 2025 ",
            description:
                "Completed internship-based training on HTML, CSS, and JavaScript, gaining exposure to responsive web design concepts."
        },
        {
            title: "Artificial Intelligence & Data Science — Techmarrk",
            year: "Dec 2024 – March 2025 ",
            description:
                "Learned supervised learning, data preprocessing, and model evaluation techniques as part of an academic internship."
        }
    ];

    const certifications = [
        {
            title: "Python Programming",
            platform: "Codebasics",
            year: "2024"
        },
        {
            title: "SQL for Data Analysis",
            platform: "Codebasics",
            year: "2024"
        }
    ];

    return (
        <section className="training-section" id="training">
            <h2 className="training-title">🎓 Academic Trainings & Certifications</h2>

            <div className="training-container">
                {trainings.map((item, index) => (
                    <div className="training-card" key={index}>
                        <h3>{item.title}</h3>
                        <p className="training-year">{item.year}</p>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>

            <h2 className="training-title">🎓 Certifications</h2>
            <div className="cert-container">
                {certifications.map((cert, index) => (
                    <div className="cert-card" key={index}>
                        <h3>{cert.title}</h3>
                        <p>{cert.platform}</p>
                        <span>{cert.year}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Training;
