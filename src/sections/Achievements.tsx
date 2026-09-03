import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

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
                    <span className="section-label">06 — EDUCATION</span>

                    <h2>
                        My <span>education.</span>
                    </h2>
                </motion.div>

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
                        <span className="education-label">
                            EDUCATION
                        </span>

                        <h3>
                            B.E. Computer Science & Engineering
                        </h3>

                        <p>
                            Francis Xavier Engineering College
                        </p>
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