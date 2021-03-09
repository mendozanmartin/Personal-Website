import React, { useEffect } from "react";
import JackStonesImage from "../../../assets/images/images/jackstones.webp";

function JackStones() {
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
                <b>Jackstones</b>
              </h1>
            </div>
            <p className="fs-20">
              Alongside two other developers, I designed and developed a Unity
              game to promote World Vision Canada's original documentary,
              Jackstones. The gameplay involves using the Leap Motion Controller
              to drop jackstones into the water with the goal of reaching the
              ocean floor. As more jackstones hit the floor, you will accumulate
              points and grow coral for fish to flourish. This game was
              showcased in the Courtney Park Cineplex theatre during the
              screening of Jackstones.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <img src={JackStonesImage} alt="" width="100%" />
            <h4 className="mt-4">Technologies used</h4>
            <ul className="mt-1">
              <li className="fs-20">Unity 3D</li>
              <li className="fs-20">C# Programming</li>
              <li className="fs-20">Leap Motion Controller</li>
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
                src="https://player.vimeo.com/video/347962005"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JackStones;
