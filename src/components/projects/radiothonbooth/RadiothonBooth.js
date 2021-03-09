import React, { useEffect } from "react";
import ChineseRadiothonImage from "../../../assets/images/images/chineseradiothon.webp";

function RadiothonBooth() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <section className="hero hero-with-header">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="d-flex justify-content-between">
              <h1 className="text-decorated">
                <b>Radiothon Booth</b>
              </h1>
            </div>
            <p className="fs-20">
              For World Vision Canada's Chinese Radiothon 2019, I was tasked
              with creating an engaging experience that would draw attention to
              their retail booth.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <img src={ChineseRadiothonImage} alt="" width="100%" />
            <h4 className="mt-4">Technologies used</h4>
            <ul className="mt-1">
              <li className="fs-20">Unity 3D </li>
              <li className="fs-20">Vuforia Plugin</li>
              <li className="fs-20">Assets from the asset store</li>
              <li className="fs-20">C# Programming</li>
            </ul>

            <h4 className="mt-4">View a demo</h4>
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
              <iframe
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
                src="https://player.vimeo.com/video/347959676"
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

export default RadiothonBooth;
