import React from "react";
import icon from "../../assets/images/Martin-Logo-Light.webp";
import "./Footer.css";
import { Link } from "react-scroll";
import { Link as ReactLink } from "react-router-dom";
function Footer() {
  const routeToHome = () => {
    window.location.reload();
    window.scrollTo(0, 0);
  };
  return (
    <footer className="bg-dark text-white">
      <div className="container py-5">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-5 text-center text-md-left">
            <ul className="nav">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="projects"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                >
                  <ReactLink to="/">PROJECTS</ReactLink>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="resume"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                >
                  <ReactLink to="/">RESUME</ReactLink>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="about"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                >
                  <ReactLink to="/">ABOUT</ReactLink>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="contact"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                >
                  <ReactLink to="/">CONTACT</ReactLink>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 text-center">
            <img
              className="logo-md"
              src={icon}
              alt="Logo"
              style={{ cursor: "pointer" }}
              onClick={routeToHome}
            />
          </div>
          <div className="col-md-5 text-center text-md-right">
            <ul className="socials">
              <li>
                <a href="" className="icon-facebook fs-20"></a>
              </li>
              <li>
                <a href="" className="icon-instagram fs-20"></a>
              </li>
              <li>
                <a href="" className="icon-twitter fs-20"></a>
              </li>
              <li>
                <a href="" className="icon-linkedin fs-20"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
