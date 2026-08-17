import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-glow" />

            <div className="section-container">
                <motion.div
                    className="contact-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="section-label">07 — CONTACT</span>

                    <h2>
                        Let's build something
                        <span> meaningful.</span>
                    </h2>

                    <p>
                        I'm open to full-time opportunities, interesting projects and
                        conversations around building great digital products.
                    </p>

                    <a
                        href="mailto:balav282004@gmail.com"
                        className="contact-email"
                    >
                        <Mail size={18} />
                        balav282004@gmail.com
                        <ArrowUpRight size={17} />
                    </a>
                </motion.div>

                <motion.div
                    className="contact-links"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <a
                        href="https://github.com/balasubramanianv28"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub size={17} />
                        <span>GitHub</span>
                        <ArrowUpRight size={15} />
                    </a>

                    <a
                        href="https://linkedin.com/in/balasubramanianv28/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedinIn size={17} />
                        <span>LinkedIn</span>
                        <ArrowUpRight size={15} />
                    </a>
                </motion.div>
            </div>

            <footer className="site-footer">
                <div className="footer-inner">
                    <span>© {new Date().getFullYear()} Bala Subramanian V</span>

                    <span>Designed & built with React</span>

                    <a href="#home">Back to top ↑</a>
                </div>
            </footer>
        </section >
    );
};

export default Contact;