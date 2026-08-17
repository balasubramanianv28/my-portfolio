import {
    Braces,
    Database,
    Globe,
    Layers3,
    Server,
    Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

const skillGroups = [
    {
        icon: Globe,
        title: "Frontend",
        description: "Building responsive and modern user interfaces.",
        skills: ["HTML", "CSS", "JavaScript", "React.js", "Material UI", "Bootstrap"],
    },
    {
        icon: Server,
        title: "Backend",
        description: "Creating APIs and server-side applications.",
        skills: ["Node.js", "Express.js", "REST APIs", "JWT"],
    },
    {
        icon: Database,
        title: "Database",
        description: "Working with modern NoSQL and SQL Solutions.",
        skills: ["MongoDB", "MongoDB Atlas", "SQL"],
    },
    {
        icon: Wrench,
        title: "Tools & Workflow",
        description: "Development tools I use to build and ship projects.",
        skills: ["Git", "GitHub", "Swagger", "VS Code", "Vite"],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="section-container">
                <motion.div
                    className="section-heading"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">05 — SKILLS</span>

                    <h2>
                        Tools I use to
                        <span> build.</span>
                    </h2>
                </motion.div>

                <div className="skills-grid">
                    {skillGroups.map((group, index) => {
                        const Icon = group.icon;

                        return (
                            <motion.div
                                className="skill-card"
                                key={group.title}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                }}
                            >
                                <div className="skill-card-top">
                                    <div className="skill-icon">
                                        <Icon size={20} />
                                    </div>

                                    <span>0{index + 1}</span>
                                </div>

                                <h3>{group.title}</h3>

                                <p>{group.description}</p>

                                <div className="skill-tags">
                                    {group.skills.map((skill) => (
                                        <span key={skill}>{skill}</span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    className="skill-bottom"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <Braces size={18} />
                    <span>
                        Always learning, experimenting and improving.
                    </span>
                    <Layers3 size={18} />
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;