import React, { useEffect, useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");
    const sections = [
        ["hero", "Home"],
        ["about", "About"],
        ["skills", "Skills"],
        ["projects", "Projects"],
        ["training", "Internships"],
        ["problem-solving", "Problem Solving"],
        ["contact", "Contact"],
    ];
    useEffect(() => {
        const handleScroll = () => {
            // Header background effect
            setScrolled(window.scrollY > 50);
            // Active section detection
            const scrollPosition = window.scrollY + 150;
            sections.forEach(([id]) => {
                const section = document.getElementById(id);
                if (
                    section &&
                    scrollPosition >= section.offsetTop &&
                    scrollPosition < section.offsetTop + section.offsetHeight
                ) {
                    setActiveSection(id);
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        // Run once on page load
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const handleScrollTo = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
            });
            setActiveSection(id);
            setMobileOpen(false);
        }
    };
    return (
        <header
            className={`
                fixed top-0 left-0 w-full z-50
                transition-all duration-300
                flex justify-between items-center
                px-[80px] py-[18px]
                ${scrolled
                    ? "bg-black/90 shadow-[0px_2px_8px_rgba(0,0,0,0.3)]"
                    : "bg-black"
                }
            `}
        >
            {/* LOGO */}
            <div className="text-white font-bold text-[1.5rem] flex items-center">
                John<span className="text-[#00bcd4]">Babu</span>
            </div>
            {/* DESKTOP NAVIGATION */}
            <nav className="hidden md:flex gap-[30px]">
                {sections.map(([id, label]) => (
                    <button
                        key={id}
                        onClick={() => handleScrollTo(id)}
                        className={`
                            relative text-[1rem] font-medium
                            transition-all duration-300
                            ${activeSection === id
                                ? "text-[#00bcd4]"
                                : "text-white hover:text-[#00bcd4]"
                            }
                            after:content-['']
                            after:absolute
                            after:left-0
                            after:-bottom-2
                            after:h-[2px]
                            after:bg-[#00bcd4]
                            after:transition-all
                            after:duration-300
                            ${activeSection === id
                                ? "after:w-full"
                                : "after:w-0 hover:after:w-full"
                            }
                        `}
                    >
                        {label}
                    </button>
                ))}
            </nav>
            {/* MOBILE MENU BUTTON */}
            <button
                className="text-white text-3xl md:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
            >
                {mobileOpen ? <HiXMark /> : <HiBars3 />}
            </button>
            {/* MOBILE MENU */}
            {mobileOpen && (
                <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-start px-6 py-4 space-y-3 md:hidden shadow-lg">
                    {sections.map(([id, label]) => (
                        <button
                            key={id}
                            onClick={() => handleScrollTo(id)}
                            className={`
                                text-left w-full py-2 text-[1rem]
                                font-medium transition-all duration-300
                                ${activeSection === id
                                    ? "text-[#00bcd4]"
                                    : "text-white hover:text-[#00bcd4]"
                                }
                            `}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;



