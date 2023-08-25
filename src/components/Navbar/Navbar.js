import "./NavbarStyles.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const[ color, setColor ] = useState(false);
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
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>

        <u1 className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to = "/">Home</Link>
          </li>
          <li>
            <Link to = "/projects">Projects</Link>
          </li>
          <li>
            <Link to = "/tech">Technologies</Link>
          </li>
          <li>
            <Link to = "/about">About</Link>
          </li>
        </u1>
        <div className="hamburger" onClick = {handleClick}>
          {click ? (
            <FaTimes size={40} style={{color: "white"}} />
          ) : (
            <FaBars size={40} style={{color: "white"}} />
          )}
        </div>
    </div>
    
  );
};

export default Navbar