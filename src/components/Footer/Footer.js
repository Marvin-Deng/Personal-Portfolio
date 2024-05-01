import {
  FaPhone,
  FaMailBulk,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

import siteMetadata from "../../data/siteMetadata";

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
                <a href="tel:925-998-0791">{siteMetadata.phoneNumber}</a>
              </h4>
            </div>
          </div>
          <div className="footer-item">
            <h4>
              Email
              <FaMailBulk className="footer-icon" />
            </h4>
            <h4 className="contact">
              <a href="mailto:marvindeng@g.ucla.edu">{siteMetadata.email}</a>
            </h4>
          </div>
          <div className="footer-item">
            <h4>Social</h4>
            <div className="social">
              <a href={siteMetadata.linkedin}>
                <FaLinkedin className="social-icon" />
              </a>
              <a href={siteMetadata.github}>
                <FaGithub className="social-icon" />
              </a>
              <a href={siteMetadata.instagram}>
                <FaInstagram className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
