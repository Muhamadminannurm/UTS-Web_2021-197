import React, { useRef } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Header = () => {
  const headerRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="nav" ref={headerRef}>
      <div className="logo">
        <h2>Profile</h2>
      </div>
      <div className="link">
        <ul>
          <li>
            <Link to="/home" onClick={() => scrollToSection("home")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => scrollToSection("about")}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="/education" onClick={() => scrollToSection("education")}>
              Education
            </Link>
          </li>
          <li>
            <Link to="/hobbies" onClick={() => scrollToSection("hobbies")}>
              Hobi
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              onClick={() => scrollToSection("experience")}
            >
              Sosial Experience & Skills
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => scrollToSection("contact")}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
