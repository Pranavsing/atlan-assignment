// NavBar.js
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" onClick={() => scrollToSection("top")}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => scrollToSection("featured")}>
            Featured
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => scrollToSection("browse")}>
            Browse
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
