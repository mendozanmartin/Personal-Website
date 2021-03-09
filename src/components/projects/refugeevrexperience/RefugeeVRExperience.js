import React, { useEffect } from "react";
import WorldRegugeeDayImage from "../../../assets/images/images/worldrefugeeday.webp";

function RefugeeVRExperience() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <section class="hero hero-with-header">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="d-flex justify-content-between">
              <h1 class="text-decorated">
                <b>Refugee VR Experience</b>
              </h1>
            </div>
            <p class="fs-20">“Life can change in an instant”</p>
            <p class="fs-20">
              For World Refugee Day, my team and I created a virtual reality
              experience that communicated the horrors of being caught in a
              war-torn country (not specific to any country). In this virtual
              reality experience, your life changes in an instant. One moment
              you’re living your life, the next moment you’re running for it.
            </p>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-8">
            <img src={WorldRegugeeDayImage} alt="" width="100%" />

            <h4 class="mt-4">Technologies used</h4>
            <ul class="mt-1">
              <li class="fs-20">Unity 3D</li>
              <li class="fs-20">Oculus Utilities</li>
              <li class="fs-20">Assets from the Unity Asset Store</li>
            </ul>
            <h4 class="mt-4">View a demo</h4>
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
              <iframe
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
                src="https://player.vimeo.com/video/346980435"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RefugeeVRExperience;
