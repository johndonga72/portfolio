
import React from "react";
import { ReactTyped } from "react-typed";

function Hero() {
    return (
        <section
            className="hero relative flex flex-col justify-between items-center h-screen text-white overflow-hidden"
            style={{
                background: "linear-gradient(-45deg, #1a237e, #283593, #512da8, #1976d2)",
                backgroundSize: "400% 400%",
                animation: "gradientBG 10s ease infinite"
            }}
        >
            {/* Hero Content */}
            <div className="hero-content flex flex-col lg:flex-row justify-around items-center flex-wrap px-5 lg:px-20 py-24 opacity-0 animate-fadeIn">

                {/* Text Section */}
                <div className="text-section max-w-lg text-left lg:text-left text-center lg:mr-10">
                    <h1 className="name text-[3rem] font-bold mb-2">
                        Hi, I'm <span className="text-[#00e5ff]">John Babu</span>
                    </h1>

                    <h2 className="title text-[1.5rem] text-[#c5cae9] mb-5">
                        <ReactTyped
                            strings={[
                                "Python Full Stack Developer",
                                "React.js Enthusiast",
                                "AI & REST API Builder",
                            ]}
                            typeSpeed={60}
                            backSpeed={50}
                            loop
                        />
                    </h2>

                    <p className="objective text-[1rem] text-[#e8eaf6] leading-relaxed mb-8">
                        Passionate Python Full Stack Developer skilled in Django, React.js, REST APIs, and AWS —
                        focused on building scalable web applications and integrating AI-driven solutions.
                    </p>

                    <div className="buttons flex flex-col sm:flex-row gap-5">
                        <a
                            href="http://www.linkedin.com/in/johndonga72/"
                            target="_blank"
                            rel="noreferrer"
                            className="btn hire px-6 py-3 rounded-full border-2 border-[#00e5ff] bg-[#00e5ff] text-white transition duration-300 hover:bg-[#00bcd4]"
                        >
                            Linkedin
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1hzaMWNgJMXFGXl3shcOokUSm8hzotosx/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn resume px-6 py-3 rounded-full border-2 border-[#00e5ff] text-white transition duration-300 hover:bg-[#00bcd4]"
                        >
                            View Resume
                        </a>
                    </div>
                </div>

                {/* Image Section */}
                <div className="image-section mt-8 lg:mt-0 flex justify-center items-center">
                    <img
                        src="/assets/profile/john.jpg"
                        alt="John Babu"
                        className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-[3px] border-white/20 shadow-[0_0_25px_rgba(0,229,255,0.4)] transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator text-2xl mb-5 animate-bounce cursor-pointer">↓</div>

            {/* Custom Animations */}
            <style>
                {`
                @keyframes gradientBG {
                    0% {background-position: 0% 50%;}
                    50% {background-position: 100% 50%;}
                    100% {background-position: 0% 50%;}
                }
                @keyframes fadeIn {
                    to {opacity:1;}
                }
                .animate-fadeIn {animation: fadeIn 1.2s ease forwards;}
                `}
            </style>
        </section>
    );
}

export default Hero;


