import "./NavbarStyles.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header-bg" : "header"}>
      <div className="header-left">
        <Link to="/">
          <h1>Portfolio</h1>
        </Link>
        <div className="social-icons">
          <a href="https://github.com/Marvin-Deng">
            <FaGithub
              size={35}
              style={{ color: "white", marginRight: "1rem" }}
            />
          </a>
          <a href="https://www.linkedin.com/in/marvin-deng/">
            <FaLinkedin
              size={35}
              style={{ color: "white", marginRight: "1rem" }}
            />
          </a>
        </div>
      </div>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/projects" onClick={closeMenu}>Projects</Link>
        </li>
        <li>
          <Link to="/tech" onClick={closeMenu}>Technologies</Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>About</Link>
        </li>
      </ul>
      <div className="bars" onClick={handleClick}>
        {click ? (
          <FaTimes size={45} style={{ color: "white" }} />
        ) : (
          <FaBars size={45} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar