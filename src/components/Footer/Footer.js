import "./FooterStyles.css"
import { FaPhone, FaMailBulk, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <hr className="horizontal-line" />
            <div className="footer">
                <div className="footer-container">
                    <div className="footer-item">
                        <h4>
                            Phone
                            <FaPhone className="footer-icon" />
                        </h4>
                        <div>
                            <h4 className="contact">
                                <a href="tel:925-998-0791">
                                    925-998-0791
                                </a>
                            </h4>
                        </div>
                    </div>
                    <div className="footer-item">
                        <h4>
                            Email
                            <FaMailBulk className="footer-icon" />
                        </h4>
                        <h4 className="contact">
                            <a href="mailto:marvindeng@g.ucla.edu">
                                marvindeng@g.ucla.edu
                            </a>
                        </h4>
                    </div>
                    <div className="footer-item">
                        <h4>
                            Social
                        </h4>
                        <div className="social">
                            <a href="https://www.linkedin.com/in/marvin-deng/">
                                <FaLinkedin className="social-icon" />
                            </a>
                            <a href="https://github.com/Marvin-Deng">
                                <FaGithub className="social-icon" />
                            </a>
                            <a href="https://www.instagram.com/dengit_marvin/">
                                <FaInstagram className="social-icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Footer