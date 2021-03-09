import React, { useEffect } from "react";

import "./ChallengeForChange.css";

import HomePage from "../../../assets/images/images/challengeforchange/Home Page.webp";
import SendChallenges from "../../../assets/images/images/challengeforchange/Send Challenges.webp";
import ChallengeDetailComment from "../../../assets/images/images/challengeforchange/Challenge Detail Comment.webp";
import ChallengeDetail from "../../../assets/images/images/challengeforchange/Challenge Detail.webp";
import CurrentChallenges from "../../../assets/images/images/challengeforchange/Current Challenges.webp";
import Leaderboard from "../../../assets/images/images/challengeforchange/Leaderboard.webp";
import TeamsPage from "../../../assets/images/images/challengeforchange/Teams Page.webp";
import Members from "../../../assets/images/images/challengeforchange/Members.webp";
import ProfilePage from "../../../assets/images/images/challengeforchange/Profile Page.webp";
import SignUp from "../../../assets/images/images/challengeforchange/Sign Up.webp";
import Login from "../../../assets/images/images/challengeforchange/Login.webp";
import ChallengeForChangePic from "../../../assets/images/images/ChallengeForChange.webp";

function ChallengeForChange() {
  useEffect(() => {
    // this is required to load the UI theme script (add this wherever you have a carousel)
    window.scrollTo(0, 0);
    const vendorScript = document.createElement("script");
    const appScript = document.createElement("script");

    vendorScript.src = "../../js/vendor.js";
    vendorScript.async = true;
    document.body.appendChild(vendorScript);

    vendorScript.onload = () => {
      appScript.src = "../../js/app.js";
      appScript.async = true;
      document.body.appendChild(appScript);
    };
  });
  return (
    <div>
      <section className="hero hero-with-header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="d-flex justify-content-between">
                <h1 className="text-decorated">
                  <b>Challenge For Change</b>
                </h1>
              </div>
              <p className="fs-20">
                Challenge For Change is an instagram-like social app with an
                added component. You can challenge your peers and journey
                together to achieve a common goal. For Team World Vision's
                Chicago Marathon, my team and I created a fitness iteration of
                this app to help team members achieve their fitness goals. The
                many features of this app include a feed of completed challenges
                that include likes and comments, push notifications, user
                profiles, a leaderboard and an ecosystem of coins. The app is
                fully adaptable for use in social campaigns and for raising
                donations.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <img src={ChallengeForChangePic} alt="" width="100%" />
              <h4 className="mt-5">Concept and Background</h4>
              <p className="fs-20 text-black">
                In today's world, challenging close friends/groups through
                social media is a growing viral trend. For instance, the ALS Ice
                Bucket Challenge took the world by surprise as they've acquired
                millions of participants and raised 115 million dollars. By
                studying trends such as the ALS Ice Bucket Challenge, we've
                learned that people enjoy participating in challenges that are
                social, entertaining and have a meaningful purpose. The
                Challenge for Change app was designed with that in mind.
              </p>

              <h4 className="mt-4">Progressive Web App vs. Native App</h4>
              <p className="fs-20 text-black">
                Along with a couple of interns, I researched the feasibility of
                implementing this application either through a progressive web
                app or a native mobile app. After extensive research we
                determined that a native application would be the best way to
                engage our targeted demographic for this app (millenials). A
                reason for this is that the app was initially designed to raise
                donations and we found that users easily trusted native apps
                with their payment information (due to people's perception of
                web security). Another reason is that mobile apps tend to have
                better performance and so we wanted to focus on giving the user
                a better and unique experience.
              </p>

              <h4 className="mt-4">My Role</h4>
              <p className="fs-20 text-black">
                My teammate and I lead the end-to-end design and development of
                the application. Our responsibilities/tasks include designing
                the wireframes, selecting the front-end and back-end
                technologies, designing and building the code, managing the
                database and liasing with stakeholders to meet project
                deliverables.
              </p>
              <h4 className="mt-4">Technologies used</h4>
              <ul className="mt-1">
                <li className="fs-20">NativeScript Angular</li>
                <li className="fs-20">Figma</li>
                <li className="fs-20">Firebase</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="wireframes">
        <div className="component-example">
          <div className="container">
            <div className="row justify-content-center p-0 mb-2">
              <div className="col-md-8">
                <h4>Wireframes</h4>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div
                  className="owl-carousel"
                  data-items="[3,4]"
                  data-margin="10"
                  data-dots="true"
                  data-nav="true"
                >
                  <figure className="photo">
                    <img src={Login} alt="Image" />
                  </figure>
                  <figure className="photo">
                    <img src={SignUp} alt="Image" />
                  </figure>
                  <figure className="photo">
                    <img src={ProfilePage} alt="Image" />
                  </figure>
                  <figure className="photo">
                    <img src={Members} alt="Image" />
                  </figure>
                  <figure className="photo">
                    <img src={TeamsPage} alt="Image" />
                  </figure>
                  <figure className="photo">
                    <img src={Leaderboard} alt="Image" />
                  </figure>
                  <figure className="photo">
                    <img src={CurrentChallenges} alt="Image" />
                  </figure>
                  <figure className="photo">
                    <img src={ChallengeDetail} alt="Image" />
                  </figure>
                  <figure className="photo">
                    <img src={ChallengeDetailComment} alt="Image" />
                  </figure>
                  <figure className="photo">
                    <img src={SendChallenges} alt="Image" />
                  </figure>
                  <figure className="photo">
                    <img src={HomePage} alt="Image" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ChallengeForChange;
