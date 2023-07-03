import "./FooterStyles.css"
import { FaPhone, FaMailBulk, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
            <div className="email">
                    <h4>
                        <FaMailBulk 
                            size={20} 
                            style={{ color:"white", marginRight:"2rem" }} 
                        />
                        marvindeng@g.ucla.edu
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
                    <FaLinkedin
                        size={30} 
                        style={{ color:"white", marginRight:"1rem" }} 
                    />
                    <FaGithub
                        size={30} 
                        style={{ color:"white", marginRight:"1rem" }} 
                    />
                    <FaInstagram
                        size={30} 
                        style={{ color:"white", marginRight:"1rem" }} 
                    />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer