import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";

const navItems = [
    "Home",
    "About",
    "Experience",
    "Projects",
    "Skills",
    "Achievements",
    "Contact",
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="navbar">
            <div className="nav-container">
                <a href="#home" className="logo">
                    BS<span>.</span>
                </a>

                <nav className="desktop-nav">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="nav-link"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="nav-actions">
                    <a
                        href="https://github.com/balasubramanianv28"
                        target="_blank"
                        rel="noreferrer"
                        className="social-link"
                        aria-label="GitHub"
                    >
                        <FaGithub size={17} />
                    </a>

                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="social-link"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedinIn size={17} />
                    </a>

                    <button
                        className="menu-button"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="mobile-menu">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Navbar;