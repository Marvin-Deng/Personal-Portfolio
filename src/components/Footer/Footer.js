import "./FooterStyles.css"
import { FaPhone, FaMailBulk, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
            <div className="email">
                    <h4>
                        <a href="mailto:marvindeng@g.ucla.edu">
                            <FaMailBulk 
                                size={20} 
                                style={{ color:"white", marginRight:"2rem" }} 
                            />
                            marvindeng@g.ucla.edu
                        </a>
                    </h4>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone 
                            size={20} 
                            style={{ color:"white", marginRight:"2rem" }} 
                        />
                        925-998-0791
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>
                    SOCIAL
                </h4>
                <div className="social">
                    <a href="https://www.linkedin.com/in/marvin-deng-210582225/">
                        <FaLinkedin
                            size={30} 
                            style={{ color:"white", marginRight:"1rem" }} 
                        />
                    </a>

                    <a href="https://github.com/mdeng376?tab=repositories">
                        <FaGithub
                            size={30} 
                            style={{ color:"white", marginRight:"1rem" }} 
                        />
                    </a>

                    <a href="https://www.instagram.com/dengit_marvin/">
                        <FaInstagram
                            size={30} 
                            style={{ color:"white", marginRight:"1rem" }} 
                        />
                    </a>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer