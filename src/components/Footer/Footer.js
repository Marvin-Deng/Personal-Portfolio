import "./FooterStyles.css"
import { FaPhone, FaMailBulk, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <hr className="horizontal-line" />
            <div className="footer-container">
                <div className="footer-item">
                    <h4>
                        Phone
                        <FaPhone size={20} style={{ color: "white", marginLeft: "1rem" }} />
                    </h4>
                    <div>
                        <h4 className="contact">
                            <a href="tel:925-998-0791" style={{ color: "white", textDecoration: "none" }}>
                                925-998-0791
                            </a>
                        </h4>
                    </div>
                </div>
                <div className="footer-item">
                    <h4>
                        Email
                        <FaMailBulk size={20} style={{ color: "white", marginLeft: "1rem" }} />
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
                            <FaLinkedin
                                size={32}
                                style={{ color: "white", marginRight: "1rem" }}
                            />
                        </a>

                        <a href="https://github.com/Marvin-Deng">
                            <FaGithub
                                size={32}
                                style={{ color: "white", marginRight: "1rem" }}
                            />
                        </a>

                        <a href="https://www.instagram.com/dengit_marvin/">
                            <FaInstagram
                                size={32}
                                style={{ color: "white", marginRight: "1rem" }}
                            />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer