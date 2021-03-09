import React, { useEffect } from "react";

import PromptuImage from "../../../assets/images/images/promptu.webp";
import SubwayMockup from "../../../assets/images/images/promptu/subway mockup.webp";
import BusStopMockup1 from "../../../assets/images/images/promptu/Bus Stop MockUp 1.webp";
import PromptuQR from "../../../assets/images/images/promptu/PromptuQR.webp";
import LaptopImage from "../../../assets/images/images/promptu/laptop-2243898_1280.webp";
import CarouselImage1 from "../../../assets/images/images/promptu/Web 1920 – 2.webp";
import CarouselImage2 from "../../../assets/images/images/promptu/Web 1920 – 5.webp";
import CarouselImage3 from "../../../assets/images/images/promptu/Web 1920 – 3.webp";
import CarouselImage4 from "../../../assets/images/images/promptu/Web 1920 – 4.webp";

function Promptu() {
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
  function openMobileClient() {
    window.open("https://speechtodrawhack.herokuapp.com", "_blank");
  }

  function openDesktopClient() {
    window.open("https://promptuhack.herokuapp.com", "_blank");
  }
  return (
    <React.Fragment>
      <section className="hero hero-with-header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="d-flex justify-content-between">
                <h1 className="text-decorated">
                  <b>Promptu</b>
                </h1>
              </div>
              <p className="fs-20">
                For TOHacks 2019, I had the opportunity to develop a social
                platform that raises awareness for various social issues. Speak
                into your phone and see your drawings appear on an eye catching
                digital billboard.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <img src={PromptuImage} alt="" width="100%" />
              <h4 className="mt-5">
                How might we create a more approachable and engaging method of
                learning about social issues?
              </h4>
              <p className="fs-20 text-black">
                One of the problems we identified was that it's fairly difficult
                to spark a conversation and keep that conversation going through
                social media. Often times, people walk past a
                billboard/advertisement where the only call to action is to
                visit a website. What if you were prompted to speak out and in
                turn receive information regarding a social issue while leaving
                your own personal mark?
              </p>

              <h4 className="mt-4">The User Experience</h4>
              <p className="fs-20 text-black">
                People who pass by a Promptu billboard (mural) will be invited
                to visit a website on their mobile device via short URL, NFC or
                QR code. On the mural, they will see a prompt such as "What's
                your favourite animal". Through their phone, the user will be
                able to answer that question and in turn receive 3 drawings
                sourced from Google's Quickdraw dataset. Once they pick one of
                the three drawings, they will see their drawing pop up on the
                big screen with a fact about the animal. On your mobile screen,
                you will be invited to take action. The action can come in the
                form of an email subscription, online donations, visiting a
                website, signing a petition + more. Once a mural becomes full of
                drawings, the screen will be captured and refreshed (to be
                stored on external website/social media).
              </p>
              <img src={SubwayMockup} alt="" width="100%" className="mt-2" />
              <h4 className="mt-4">Next Steps</h4>
              <p className="fs-20 text-black">
                We aim to enhance the user experience by integrating a social
                call to action. Ideally, the finished product would include an
                option to continue the conversation on social media by sharing
                the mural via Instagram, Facebook, Snapchat, etc. Utilizing the
                #ImpactfulPrompts hashtag will generate a beautiful feed of
                unique murals categorized by topics.
              </p>
              <h4 className="mt-4">Technologies used</h4>
              <ul class="mt-1">
                <li class="fs-20">Google DialogFlow</li>
                <li class="fs-20">Node.js + Socket.io</li>
                <li class="fs-20">Google Quickdraw Dataset</li>
                <li class="fs-20">P5.js</li>
                <li class="fs-20">Google Speech-to-Text API</li>
              </ul>
              <img src={BusStopMockup1} alt="" width="100%" className="mt-2" />
              <h4 className="mt-4">View a live demo</h4>
              <p class="fs-20 text-black">
                {" "}
                For the demo, please pick from one of the following animals:
                Lion, Rhino, Sea Turtle, Shark or Tiger
              </p>
              <div className="row justify-content-center">
                <div
                  className="boxed rising col-10 col-md-5 text-center"
                  onClick={openMobileClient}
                >
                  <h3>Mobile Client</h3>
                  <img
                    src={PromptuQR}
                    alt="Promptu QR"
                    className="image-link"
                  />
                </div>
                <div
                  className="boxed rising col-10 col-md-5 text-center"
                  onClick={openDesktopClient}
                >
                  <h3>Desktop Client</h3>
                  <img
                    src={LaptopImage}
                    alt="Promptu Desktop"
                    class="image-link"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="wireframes">
        <div className="component-example">
          <div className="container">
            <div className="row">
              <div className="col">
                <div
                  className="owl-carousel"
                  data-items="[3,2]"
                  data-margin="10"
                  data-dots="true"
                  data-nav="true"
                >
                  <figure className="photo">
                    <img src={CarouselImage1} alt="Image" />
                  </figure>
                  <figure className="photo">
                    <img src={CarouselImage2} alt="Image" />
                  </figure>
                  <figure className="photo">
                    <img src={CarouselImage3} alt="Image" />
                  </figure>
                  <figure className="photo">
                    <img src={CarouselImage4} alt="Image" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Promptu;
