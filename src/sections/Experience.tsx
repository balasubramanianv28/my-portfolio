import { ArrowUpRight, Bug, Code2, Layers3, Workflow } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
    {
        icon: Bug,
        number: "10+",
        title: "Production Bugs",
        description: "Identified and resolved issues in a production-level web application.",
    },
    {
        icon: Layers3,
        number: "5+",
        title: "Reusable Components",
        description: "Built responsive and reusable UI components using React.js.",
    },
    {
        icon: Workflow,
        number: "REST",
        title: "API Integration",
        description: "Integrated REST APIs using Swagger documentation.",
    },
    {
        icon: Code2,
        number: "Full Stack",
        title: "Development",
        description: "Contributed across frontend and backend development tasks.",
    },
];

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="section-container">
                {/* Heading */}
                <motion.div
                    className="section-heading experience-heading"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">03 — EXPERIENCE</span>

                    <h2>
                        Where ideas met
                        <span> real-world code.</span>
                    </h2>
                </motion.div>

                {/* Main Experience */}
                <motion.div
                    className="experience-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="experience-top">
                        <div>
                            <p className="experience-type">INTERNSHIP</p>

                            <h3>Full Stack Developer Intern</h3>

                            <p className="company-name">
                                Briclay Technologies
                                <span> · Bengaluru</span>
                            </p>
                        </div>

                        <div className="experience-date">
                            Feb 2026
                            <span>—</span>
                            May 2026
                        </div>
                    </div>

                    <div className="experience-divider" />

                    <div className="experience-body">
                        <p>
                            Worked on a production-level web application, contributing to
                            frontend and backend development while improving application
                            stability and user experience.
                        </p>

                        <div className="experience-tech">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                            <span>React.js</span>
                            <span>Node js</span>
                            <span>Express js</span>
                            <span>Swagger API</span>
                            <span>Mongo DB</span>
                            <span>Postgre SQL</span>
                        </div>

                        <a href="#projects" className="experience-link">
                            View related work
                            <ArrowUpRight size={16} />
                        </a>
                    </div>
                </motion.div>

                {/* Highlights */}
                <div className="experience-highlights">
                    {highlights.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                className="highlight-card"
                                key={item.title}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                }}
                            >
                                <div className="highlight-icon">
                                    <Icon size={19} />
                                </div>

                                <div className="highlight-number">
                                    {item.number}
                                </div>

                                <h4>{item.title}</h4>

                                <p>{item.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;