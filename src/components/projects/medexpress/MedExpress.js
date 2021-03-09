import React, { useEffect } from "react";
import MedExpressLogo from "../../../assets/images/images/MedExpressLogo.webp";
import TechStack from "../../../assets/images/images/medexpress/tech-stack.webp";
import DesktopLogin from "../../../assets/images/images/medexpress/desktoplogin.webp";
import Waitlist from "../../../assets/images/images/medexpress/waitlist.webp";
import Recording from "../../../assets/images/images/medexpress/recording.webp";
import CarouselImageOne from "../../../assets/images/images/medexpress/one.webp";
import CarouselImageTwo from "../../../assets/images/images/medexpress/two.webp";
import CarouselImageThree from "../../../assets/images/images/medexpress/three.webp";
import CarouselImageFour from "../../../assets/images/images/medexpress/four.webp";
import CarouselImageFive from "../../../assets/images/images/medexpress/five.webp";

function MedExpress() {
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
    <React.Fragment>
      <section className="hero hero-with-header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="d-flex justify-content-between">
                <h1 className="text-decorated">
                  <b>MedExpress</b>
                </h1>
              </div>
              <p className="fs-20">
                MedExpress is a platform which allows patients to check into
                medical clinics and receive insights regarding their visits.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <img src={MedExpressLogo} alt="" width="100%" />
              <h4 className="mt-5">Problem Insight</h4>
              <p className="fs-20 text-black">
                Visits to the clinic are incredibly inefficient. From checking
                in to receiving the prescription, there are many mundane tasks
                that can be automated. Moreover, the lack of transparency from
                the clinic causes frustration as patients are unsure of their
                position in the queue. After the visit, you are also expected to
                remember all of the information the doctor provided. This is a
                system that has existed for too long and we believe this can be
                improved.
              </p>

              <h4 className="mt-4">The User Experience</h4>
              <p className="fs-20 text-black">
                When a patient enters a clinic, they can check into the clinic
                via a QR code. The web app then asks the users questions just
                like any receptionist would such as reason for visiting the
                clinic, symptoms, medication etc. The web app then tells the
                patient their current position in a queue and determines an
                estimated wait time.
              </p>
              <p className="fs-20 text-black">
                On the doctor's web app, a list of checked-in patients along
                with their medical information can be viewed. When the doctor
                begins a session with a patient, he/she can initiate the
                built-in voice recording software that will record the whole
                dialogue during the session. This dialogue is then analyzed
                using Natural Language Processing to fill out any necessary
                medical documents for the doctor. Lastly, the prescription is
                extracted from the dialogue and sent to the patient via an SMS.
                The patient can then reply to the message to obtain more
                information about the recent visit.
              </p>
              <h4 className="mt-4">View the Tech Stack Below</h4>
              <img src={TechStack} alt="" width="100%" className="mt-2" />
              <h4 className="mt-4">Doctor-facing UI</h4>
              <img src={DesktopLogin} alt="" width="100%" className="mt-2" />
              <img src={Waitlist} alt="" width="100%" className="mt-2" />
              <img src={Recording} alt="" width="100%" className="mt-2" />
            </div>
          </div>
        </div>
      </section>

      <section className="wireframes">
        <div className="component-example">
          <div className="container">
            <div className="row justify-content-center p-0 mb-2">
              <div className="col-md-8">
                <h4>Patient-facing UI</h4>
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
                    <img src={CarouselImageOne} alt="Image" />
                  </figure>
                  <figure className="photo">
                    <img src={CarouselImageTwo} alt="Image" />
                  </figure>
                  <figure className="photo">
                    <img src={CarouselImageThree} alt="Image" />
                  </figure>
                  <figure className="photo">
                    <img src={CarouselImageFour} alt="Image" />
                  </figure>
                  <figure className="photo">
                    <img src={CarouselImageFive} alt="Image" />
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

export default MedExpress;
