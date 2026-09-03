import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-glow hero-glow-one" />
            <div className="hero-glow hero-glow-two" />

            <div className="hero-grid" />

            <div className="hero-content">
                <motion.div
                    className="availability"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="status-dot" />
                    Available for opportunities
                </motion.div>

                <motion.p
                    className="hero-intro"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Hi, I'm Bala Subramanian
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    Building digital
                    <br />
                    <span>experiences that matter.</span>
                </motion.h1>

                <motion.p
                    className="hero-description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    MERN Stack Developer focused on building modern, scalable
                    and user-focused web applications with clean and reliable
                    code.
                </motion.p>

                <motion.div
                    className="hero-buttons"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <a href="#projects" className="primary-button">
                        View my work
                        <ArrowUpRight size={18} />
                    </a>

                    <a
                        href="/balavresume.pdf"
                        download="Bala_Subramanian_V_Resume.pdf"
                        className="secondary-button"
                    >
                        Resume
                        <Download size={17} />
                    </a>
                </motion.div>

                <motion.div
                    className="hero-scroll"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <span>Scroll to explore</span>
                    <ArrowDown size={16} />
                </motion.div>
            </div>

            <div className="hero-number">01</div>
        </section >
    );
};

export default Hero;