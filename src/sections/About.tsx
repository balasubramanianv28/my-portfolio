import { ArrowUpRight, Code2, Layers3, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="section-container">
                <motion.div
                    className="section-heading"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">02 — ABOUT</span>

                    <h2>
                        Turning ideas into
                        <span> real products.</span>
                    </h2>
                </motion.div>

                <div className="about-grid">
                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="about-lead">
                            I'm a <strong>MERN Stack Developer</strong> focused on building
                            modern, scalable and user-focused web applications.
                        </p>

                        <p>
                            I have hands-on experience working on production-level web
                            applications, where I contributed to UI development, debugging,
                            reusable React components and REST API integration.
                        </p>

                        <p>
                            I enjoy solving real-world problems through clean code,
                            thoughtful interfaces and reliable full-stack solutions.
                        </p>

                        <a href="#experience" className="text-link">
                            Explore my experience
                            <ArrowUpRight size={17} />
                        </a>
                    </motion.div>

                    <motion.div
                        className="about-cards"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <div className="about-card">
                            <div className="about-icon">
                                <Code2 size={20} />
                            </div>

                            <div>
                                <h3>Full Stack</h3>
                                <p>Frontend & backend development</p>
                            </div>
                        </div>

                        <div className="about-card">
                            <div className="about-icon">
                                <Layers3 size={20} />
                            </div>

                            <div>
                                <h3>Production Experience</h3>
                                <p>Real-world application development</p>
                            </div>
                        </div>

                        <div className="about-card">
                            <div className="about-icon">
                                <Rocket size={20} />
                            </div>

                            <div>
                                <h3>Problem Solver</h3>
                                <p>Debugging, optimization & clean solutions</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;