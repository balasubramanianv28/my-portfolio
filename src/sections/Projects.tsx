import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
    {
        number: "01",
        title: "Dev Flow",
        category: "FULL STACK",
        description:
            "A modern e-commerce platform built with the MERN stack, focusing on product management, user experience and scalable APIs.",
        tech: ["React", "Node.js", "MongoDB", "Swagger API"],
        featured: false,
    },
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="section-container">

                <motion.div
                    className="section-heading"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">04 — PROJECTS</span>

                    <h2>
                        Things I've
                        <span> built.</span>
                    </h2>
                </motion.div>

                <div className="projects-list">

                    {projects.map((project, index) => (
                        <motion.article
                            key={project.number}
                            className={`project-card ${project.featured ? "project-featured" : ""
                                }`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                            }}
                        >
                            <div className="project-top">
                                <span className="project-number">
                                    {project.number}
                                </span>

                                <span className="project-category">
                                    {project.category}
                                </span>
                            </div>

                            <div className="project-content">
                                <div>
                                    <h3>{project.title}</h3>

                                    <p>{project.description}</p>

                                    <div className="project-tech">
                                        {project.tech.map((item) => (
                                            <span key={item}>{item}</span>
                                        ))}
                                    </div>
                                </div>

                                <button className="project-arrow" aria-label="View project">
                                    <ArrowUpRight size={21} />
                                </button>
                            </div>

                            {project.featured && (
                                <div className="project-preview">
                                    <div className="preview-window">
                                        <div className="preview-header">
                                            <span />
                                            <span />
                                            <span />
                                        </div>

                                        <div className="preview-content">
                                            <div className="preview-sidebar" />

                                            <div className="preview-main">
                                                <div className="preview-line large" />
                                                <div className="preview-line" />
                                                <div className="preview-line short" />

                                                <div className="preview-boxes">
                                                    <div />
                                                    <div />
                                                    <div />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <a href="#contact" className="project-link">
                                <ExternalLink size={15} />
                                Discuss this project
                            </a>
                        </motion.article>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Projects;