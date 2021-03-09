import React from "react";
import icon from "../../assets/images/Martin-Logo-Dark.webp";
import "./Header.css";
import { Link } from "react-scroll";
import { Link as ReactLink } from "react-router-dom";
function Header() {
  return (
    <header className="header-sticky header-light">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light sticky-top">
          <a className="navbar-brand" style={{ cursor: "pointer" }} href="/">
            <img
              className="navbar-logo navbar-logo-dark"
              src={icon}
              alt="Logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="burger">
              <span></span>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav align-items-center mr-auto">
              <li className="nav-item">
                <Link
                  to="projects"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  className="nav-link text-black"
                >
                  <ReactLink
                    to="/"
                    style={{ color: "black", cursor: "pointer" }}
                  >
                    PROJECTS
                  </ReactLink>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="resume"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  className="nav-link text-black"
                >
                  <ReactLink
                    to="/"
                    style={{ color: "black", cursor: "pointer" }}
                  >
                    RESUME
                  </ReactLink>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="about"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  className="nav-link text-black"
                >
                  <ReactLink
                    to="/"
                    style={{ color: "black", cursor: "pointer" }}
                  >
                    ABOUT
                  </ReactLink>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  className="nav-link text-black"
                >
                  <ReactLink
                    to="/"
                    style={{ color: "black", cursor: "pointer" }}
                  >
                    CONTACT
                  </ReactLink>
                </Link>{" "}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
