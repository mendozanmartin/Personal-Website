import React, { useState } from "react";
import logo from "../../assets/images/Martin Mendoza Logo.webp";

import MedExpress from "../../assets/images/images/MedExpressLogo.webp";
import EcoSnap from "../../assets/images/images/ecoSNAPNew.webp";
import Promptu from "../../assets/images/images/promptu.webp";
import ChallengeForChange from "../../assets/images/images/ChallengeForChange.webp";
import Jackstones from "../../assets/images/images/jackstones.webp";
import WorldRefugeeDay from "../../assets/images/images/worldrefugeeday.webp";
import ChineseRadiothon from "../../assets/images/images/chineseradiothon.webp";
import BluetoothArduino from "../../assets/images/images/bluetootharduino.webp";
import OrdrUp from "../../assets/images/images/OrdrUp.webp";

import RBCIcon from "../../assets/images/RBC.webp";
import EnginehireIcon from "../../assets/images/enginehire-logo.webp";
import WorldVisionIcon from "../../assets/images/worldvision.webp";

import UofTIcon from "../../assets/images/UofTHacks.webp";
import CuHackingIcon from "../../assets/images/cuhacking.webp";
import ElevateIcon from "../../assets/images/Elevate.webp";
import TOHacks from "../../assets/images/TOHacks.webp";
import L3WescamIcon from "../../assets/images/L3Wescam.webp";

import MartinPortrait from "../../assets/images/images/Martin.webp";

import TextLoop from "react-text-loop";
import ResumePDF from "../../assets/Resume.pdf";

import "./Home.css";
import axios from "axios";
import ExperienceItem from "../experience-item/ExperienceItem";
import ProjectItem from "../project-item/ProjectItem";

const Home = (props) => {
  const [formName, setFormName] = useState("");
  const handleNameChange = (e) => setFormName(e.target.value);

  const [formEmail, setFormEmail] = useState("");
  const handleEmailChange = (e) => setFormEmail(e.target.value);

  const [formSubject, setFormSubject] = useState("");
  const handleSubjectChange = (e) => setFormSubject(e.target.value);

  const [formMessage, setFormMessage] = useState("");
  const handleMessageChange = (e) => setFormMessage(e.target.value);

  const projects = [
    {
      link: "/ecosnap",
      image: EcoSnap,
    },
    {
      link: "/promptu",
      image: Promptu,
    },
    {
      link: "/challengeforchange",
      image: ChallengeForChange,
    },
    {
      link: "/ordrup",
      image: OrdrUp,
    },
    {
      link: "/jackstones",
      image: Jackstones,
    },
    {
      link: "/arduinovacuum",
      image: BluetoothArduino,
    },
    {
      link: "/medexpress",
      image: MedExpress,
    },
    {
      link: "/refugeevrexperience",
      image: WorldRefugeeDay,
    },
    {
      link: "/radiothonbooth",
      image: ChineseRadiothon,
    },
  ];

  const workExperience = [
    {
      image: RBCIcon,
      text: [],
      position: "Site Reliability Engineer",
      company: "Royal Bank of Canada",
    },
    {
      image: RBCIcon,
      text: [
        "Architected, developed and deployed an AI insights system using Elasticsearch, OpenShift, Docker, MongoDB, Node.js, Angular, and Flask. Provisional patent has been filed for the AI algorithms and overall design of the system",
        "Presented bi-weekly demos to other RBC Amplify teams, VP Sponsors and Team Leads. Pitched at AmpExpo, an enterprise-wide event where RBC Amplify teams demonstrate their product to RBC stakeholders and executives",
        "Participated in a week long design-thinking program/hackathon to focus on developing high quality, innovative, and valuable products for consumers",
      ],
      position: "Amplify Software Developer Intern",
      company: "Royal Bank of Canada",
    },
    {
      image: EnginehireIcon,
      text: [
        "Built various customer and administrator features to improve operational efficiency of the client's business using Python Django, Vue.js and PostgreSQL",
        "Attended weekly client meetings to set expectations and manage deliverables according to feature requirements",
      ],
      position: "Full Stack Developer",
      company: "Enginehire",
    },
    {
      image: WorldVisionIcon,
      text: [
        "Lead end-to-end design and development of a real-time web gaming platform using Figma, Vue.js, Node.js and Socket.io",
        "Developed an augmented reality application which was used to acquire child sponsorships at World Vision's Chinese Radiothon (1000 Girls Campaign)",
        "Created a Virtual Reality Experience for World Refugee Day that was displayed at SoHo House and various internal events",
        "Lead end-to-end design and development of a social app that is currently being used for World Vision's Global 6K marathon",
      ],
      position: "Technology & Innovation Intern",
      company: "World Vision Canada",
    },
    {
      image: WorldVisionIcon,
      text: [
        "Gained experience designing UI/UX by building the team’s website using HTML, CSS and JavaScript",
        "Developed several engagement tools for Snapchat’s AR platform using Lens Studio's JavaScript API",
        "Familiarized with Unity's C# scripting API and created several augmented reality experiences through Google's ARCore and Vuforia",
        "Co-ordinated engagement methods and products with Channel Innovation team to optimize engagement delivery",
      ],
      position: "Technology R&D Intern",
      company: "World Vision Canada",
    },
  ];

  const hackathonExperience = [
    {
      company: "University of Toronto",
      position: "UofTHacks 2020",
      text: [
        "Developed a connected end-to-end solution for patient check-ins at a medical clinic",
      ],
      image: UofTIcon,
    },
    {
      company: "Carlton University",
      position: "cuHacking 2020 (Winner)",
      text: [
        "Developed an android application using Kotlin and Android Studio and Keras (Tensorflow) to detect recyclable items",
      ],
      image: CuHackingIcon,
    },
    {
      company: "Elevate",
      position: "Elevate Tech Jam 2019",
      image: ElevateIcon,
      text: [
        "Utilized NFC and IoT technologies to create a convenient and streamlined payment solution for restaurant businesses",
      ],
    },
    {
      company: "TOHacks",
      position: "TOHacks 2019",
      image: TOHacks,
      text: [
        "Collaborated with UX designers to create an interactive platform for raising awareness on various social issues",
      ],
    },
    {
      company: "L3 WESCAM",
      position: "HackWESCAM 2019",
      image: L3WescamIcon,
      text: [
        "Programmed a drone to maintain its position and control other drones using a custom C++ SDK and Open CV",
      ],
    },
  ];
  function openWebsite(website) {
    switch (website) {
      case "linkedIn":
        window.open(
          "https://www.linkedin.com/in/martin-mendoza/",
          "_blank" // <- This is what makes it open in a new window.
        );
        break;
      case "github":
        window.open("https://github.com/mendozanmartin", "_blank");
        break;
      case "email":
        window.open("mailto:mendozan@mcmaster.ca", "_blank");
        break;
      case "vimeo":
        window.open("https://vimeo.com/user100529261", "_blank");
        break;
      case "devpost":
        window.open("https://devpost.com/mendozanmartin", "_blank");
        break;
    }
  }

  function downloadResume() {
    window.open(ResumePDF, "_blank");
  }

  let submitForm = (e) => {
    e.preventDefault();
    const url =
      "https://us-central1-personal-website-ccd53.cloudfunctions.net/sendMail";

    const body = {
      name: formName,
      email: formEmail,
      subject: formSubject,
      message: formMessage,
    };

    axios
      .post(url, body)
      .then(() => {
        window.$("#modal").modal();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <section style={{ height: "80vh" }}>
        <div
          className="container"
          style={{ paddingTop: "20vh", paddingBottom: "25vh" }}
        >
          <img src={logo} className="m-0 p-0" width="600" alt="" />

          <h2 className="m-0 ml-2 p-0">
            Driving
            <TextLoop className="typing">
              <span>creativity </span>
              <span>innovation </span>
              <span>functionality </span>
            </TextLoop>
            into digital solutions.
          </h2>

          <ul className="socials">
            <li>
              <a
                className="icon-linkedin fs-40"
                style={{ color: "#6d9eeb", cursor: "pointer" }}
                onClick={() => openWebsite("linkedIn")}
              ></a>
            </li>
            <li>
              <a
                className="icon-github fs-40"
                style={{ color: "#6d9eeb", cursor: "pointer" }}
                onClick={() => openWebsite("github")}
              ></a>
            </li>
            <li>
              <a
                className="icon-vimeo fs-40"
                style={{ color: "#6d9eeb", cursor: "pointer" }}
                onClick={() => openWebsite("vimeo")}
              ></a>
            </li>
            <li>
              <a
                className="icon-devpost"
                style={{
                  color: "#6d9eeb",
                  cursor: "pointer",
                  height: "39px",
                  width: "39px",
                }}
                onClick={() => openWebsite("devpost")}
              ></a>
            </li>
            <li>
              <a
                className="icon-mail fs-40"
                style={{ color: "#6d9eeb", cursor: "pointer" }}
                onClick={() => openWebsite("meail")}
              ></a>
            </li>
          </ul>
        </div>
      </section>

      <section className="project-gallery">
        <div className="container-fluid pt-2" id="projects">
          <div className="row">
            <div className="col">
              <ul className="masonry row gutter-1">
                {projects.map((item, i) => (
                  <ProjectItem
                    key={i}
                    link={item.link}
                    image={item.image}
                  ></ProjectItem>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="parallax-mountains" id="resume">
        <div
          className="tab-pane show active container"
          id="demo-2-4"
          role="tabpanel"
          aria-labelledby="demo-2-4"
        >
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <h1 className="text-center text-white mb-4">Experience</h1>
              {workExperience.map((item, i) => (
                <ExperienceItem
                  key={i}
                  image={item.image}
                  text={item.text}
                  position={item.position}
                  company={item.company}
                ></ExperienceItem>
              ))}
              <h1 className="text-center text-white mb-4">Hackathons</h1>
              {hackathonExperience.map((item, i) => (
                <ExperienceItem
                  key={i}
                  image={item.image}
                  text={item.text}
                  position={item.position}
                  company={item.company}
                ></ExperienceItem>
              ))}
              <div className="text-center">
                <h2 className="text-center text-white">
                  Download a PDF of my Resume below!
                </h2>
                <button
                  onClick={downloadResume}
                  className="btn text-white mt-3"
                  style={{ backgroundColor: "#6d9eeb", outline: "0" }}
                >
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero" id="about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h1 className="text-decorated">
                Here's a little bit <b>about me</b>
              </h1>
              <div className="text-center mt-4">
                <img
                  src={MartinPortrait}
                  alt="Martin"
                  className="MartinPhoto image-cropper mb-5"
                  data-aos="zoom-in"
                />
              </div>

              <p className="text-black fs-20">
                Hi, I'm Martin, a Toronto-based developer with a deep passion
                for developing high quality, customer-centric, and innovative
                products. I'm a recent graduate from the Bachelor of Technology
                program at McMaster University and I'm currently working as a
                Site Reliability Engineer for RBC. Apart from my developer
                career, I enjoy my leisure time playing instruments, singing,
                watching Netflix, and also playing lots of video games. If
                you're interested in connecting with me (work related or not),
                feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="parallax-desk" id="contact">
        {/* <!-- <div className="image image-overlay image-scrolling" style="background-image:url(../assets/images/coffee.webp)"
                    data--100-bottom-top="transform: translateY(0px);" data-top-bottom="transform: translateY(300px);">
                </div> --> */}

        {/* <!-- tab settings --> */}
        <div
          className="tab-pane show active container"
          id="demo-2-4"
          role="tabpanel"
          aria-labelledby="demo-2-4"
        >
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <h1 className="text-center text-white">Hit me up!</h1>
              <div className="row">
                <div className="col">
                  <h5 className="mb-3 fs-20 font-weight-normal text-center text-white">
                    Reach out if you'd like to learn more about me, I'd love to
                    hear from you!
                  </h5>
                  <form onSubmit={submitForm}>
                    <div className="form-row">
                      <div className="col">
                        <div className="form-group">
                          <label htmlFor="name" className="text-white">
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            aria-describedby="name"
                            placeholder="John Doe"
                            name="name"
                            value={formName}
                            onChange={handleNameChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-group">
                          <label htmlFor="email" className="text-white">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            aria-describedby="email"
                            placeholder="johndoe@gmail.com"
                            name="email"
                            value={formEmail}
                            onChange={handleEmailChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col">
                        <div className="form-group">
                          <label htmlFor="subject" className="text-white">
                            Subject Line
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="subject"
                            aria-describedby="subject"
                            placeholder="I've got a job for you!"
                            name="subject"
                            value={formSubject}
                            onChange={handleSubjectChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col">
                        <div className="form-group">
                          <label
                            htmlFor="exampleFormControlTextarea1"
                            className="text-white"
                          >
                            Message
                          </label>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            placeholder="I have a potential opening for you as a tech lead for Google! Let me know if you're interested. (This is just a joke)"
                            rows="3"
                            name="message"
                            value={formMessage}
                            onChange={handleMessageChange}
                            required
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="form-row mt-1 align-items-center">
                      <div className="col-3">
                        <button
                          // onClick={submitForm}
                          type="submit"
                          className="btn text-white"
                          style={{ backgroundColor: "#6d9eeb", outline: "0" }}
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                  {/* <!-- Launch Modal --> */}
                  <div
                    className="modal fade"
                    id="modal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="modalLabel"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="modal-header justify-content-end">
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true" className="icon-x"></span>
                          </button>
                        </div>
                        <div className="modal-body text-center">
                          <h3>Message sent!</h3>
                          <p>
                            Thank you for reaching out! I will get back to you
                            as soon as possible
                          </p>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-primary btn-block"
                            data-dismiss="modal"
                            style={{
                              backgroundColor: "#6d9eeb",
                              outline: "none",
                            }}
                          >
                            Awesome!
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Modal End --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
