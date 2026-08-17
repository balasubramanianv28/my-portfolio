import { ArrowUpRight, Award, GraduationCap, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const achievements = [
    {
        icon: Trophy,
        title: "Third Prize",
        event: "Creators Spark",
        detail: "NEC Tech Fest 2025",
    },
    {
        icon: Award,
        title: "Fifth Prize",
        event: "Ideathon",
        detail: "NEC Tech Fest 2025",
    },
    {
        icon: ArrowUpRight,
        title: "Publication",
        event: "E-Commerce Website",
        detail: "Using MERN Stack & AI Face Swap",
        amount: "Published",
    },
];

const Achievements = () => {
    return (
        <section id="achievements" className="achievements-section">
            <div className="section-container">

                <motion.div
                    className="section-heading"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">06 — ACHIEVEMENTS</span>

                    <h2>
                        Beyond the
                        <span> code.</span>
                    </h2>
                </motion.div>

                <div className="achievements-grid">
                    {achievements.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.article
                                key={item.title}
                                className="achievement-card"
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                            >
                                <div className="achievement-top">
                                    <div className="achievement-icon">
                                        <Icon size={20} />
                                    </div>

                                    <span>0{index + 1}</span>
                                </div>

                                <h3>{item.title}</h3>

                                <p className="achievement-event">
                                    {item.event}
                                </p>

                                <p className="achievement-detail">
                                    {item.detail}
                                </p>

                                <div className="achievement-bottom">
                                    <span>{item.amount}</span>
                                    <ArrowUpRight size={16} />
                                </div>
                            </motion.article>
                        );
                    })}
                </div>

                <motion.div
                    className="education-card"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="education-icon">
                        <GraduationCap size={23} />
                    </div>

                    <div className="education-content">
                        <span className="education-label">EDUCATION</span>

                        <h3>B.E. Computer Science & Engineering</h3>

                        <p>Francis Xavier Engineering College</p>
                    </div>

                    <div className="education-score">
                        <span>CGPA</span>
                        <strong>7.1</strong>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Achievements;