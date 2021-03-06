import React, { useEffect } from "react";

import ScreenShotOne from "../../../assets/images/images/ecoSNAP/Screenshot_20200112-111619.webp";
import ScreenShotTwo from "../../../assets/images/images/ecoSNAP/Screenshot_20200112-111831.webp";
import ScreenShotThree from "../../../assets/images/images/ecoSNAP/Screenshot_20200112-111836.webp";
import ScreenShotFour from "../../../assets/images/images/ecoSNAP/Screenshot_20200112-111842.webp";
import ScreenShotFive from "../../../assets/images/images/ecoSNAP/Screenshot_20200112-111852.webp";
import EcoSnapPic from "../../../assets/images/images/ecoSNAPNew.webp";

function EcoSnap() {
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
                  <b>ecoSNAP</b>
                </h1>
              </div>
              <p className="fs-20">
                EcoSNAP is an educational app that leverages AI to determine
                whether or not an item is recyclable. In order to appeal to the
                younger generation, we have integrated a point system that can
                be exchanged for something of real value.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <img src={EcoSnapPic} alt="" width="100%" />
              <h4 className="mt-5">Background</h4>
              <p className="fs-20 text-black">
                Every year, the production of waste increases exponentially.
                Moreover, it is estimated that humankind currently produces two
                billion tonnes of waste per year between 7.6 billion people. The
                people that are affected most about this trend will be the
                generations that come after us.
              </p>
              <h4 className="mt-5">Our Solution</h4>
              <p className="fs-20 text-black">
                As of right now, recycling is still the best method for managing
                waste and so we have developed an educational app that will
                encourage the younger generation to recycle. Our goal is to
                promote environmental awareness to the generations that come
                after us. Using AI image classification, you are able to take a
                photo with your mobile device and it can determine whether
                something is recyclable or not. To target the younger
                generation, our aim is to partner with big organizations to
                sponsor the act of recycling. Similar to how the LCBO reimburses
                for alcohol cans, we can partner with government organizations
                or other companies who want to carry out environmental
                initiatives. So people who take pictures of recyclable items
                will be rewarded currency (maybe even companies like Cineplex
                for scene points?)
              </p>
              <h4 className="mt-5">Accomplishments</h4>
              <p className="fs-20 text-black">
                The major accomplishments of this project include the process of
                data scrapping over 6000 images off Google's search engine to
                feed into the Convolutional Neural Network. Our team is also
                proud of training this neural network to an accuracy of 92.5%
                via using a method called transfer learning. By the end, we were
                able to train up to 17 classifiers including glass bottles, soda
                cans, paper, cardboard, mattresses, batteries and more.
              </p>

              <h4 className="mt-4">Next Steps</h4>
              <p className="fs-20 text-black">
                The next steps for ecoSNAP are to configure the HTTP requests
                with a live server and to load a compressed AI directly onto the
                application to reduce latency. Also, we aim to feed more data
                into our algorithm to distinguish more objects and how to
                appropriately dispose of them. Lastly, we hope to create small
                little mini games and quizzes for our users to learn and gain
                additional points.
              </p>
              <h4 className="mt-4">Technologies used</h4>
              <ul className="mt-1">
                <li className="fs-20">Kotlin</li>
                <li className="fs-20">Android Studio</li>
                <li className="fs-20">Python</li>
                <li className="fs-20">Keras (Tensorflow)</li>
                <li className="fs-20">Microsoft Azure VM</li>
                <li className="fs-20">Firebase</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="wireframes">
        <div className="component-example">
          <div className="container">
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
                    <img src={ScreenShotOne} alt="Image" />
                  </figure>
                  <figure className="photo">
                    <img src={ScreenShotTwo} alt="Image" />
                  </figure>
                  <figure className="photo">
                    <img src={ScreenShotThree} alt="Image" />
                  </figure>
                  <figure className="photo">
                    <img src={ScreenShotFour} alt="Image" />
                  </figure>
                  <figure className="photo">
                    <img src={ScreenShotFive} alt="Image" />
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

export default EcoSnap;
