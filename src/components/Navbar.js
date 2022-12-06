// Import icons
import { ThreeDots, Instagram, Linkedin, Github } from "react-bootstrap-icons";
// Import dependencies
import { useState } from "react";
import { Link } from "react-router-dom";
// Import Mobile menu
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [MenuIsOpen, openMenu] = useState(false);

  const toggleMobileMenu = () => {
    openMenu(!MenuIsOpen);
  };

  return (
    <>
      <div className="navbar">
        <span id="logo">
          <Link to="/">HR</Link>
        </span>
        <div id="nav-menu">
          <ThreeDots onClick={toggleMobileMenu} />
        </div>
        <div id="right-nav">
          <ul id="desktop-ul">
            <li id="home-link">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/aboutme">About Me</Link>
            </li>
            {/* <li>
              <Link>Contact</Link>
            </li> */}
          </ul>
          <span id="vertical-line"></span>
          <div className="lower-nav">
            <a
              className="github"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/hollyjohanna"
            >
              <Github />
            </a>
            <a
              className="linkedin"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/holliday-robbins-980b77166"
            >
              <Linkedin />
            </a>
            <a
              className="instagram"
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/_heyjohanna_/"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>
      {MenuIsOpen && <MobileMenu closeMethod={toggleMobileMenu} />}
    </>
  );
};

export default Navbar;
