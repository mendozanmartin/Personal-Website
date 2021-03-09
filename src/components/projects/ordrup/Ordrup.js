import React, { useEffect } from "react";
import OrdrUpImage from "../../../assets/images/images/OrdrUp.webp";
import MainPage from "../../../assets/images/images/OrdrUp/tablet-screen/Main Page.webp";
import EditOrder from "../../../assets/images/images/OrdrUp/tablet-screen/Edit Order.webp";
import TapBeacon1 from "../../../assets/images/images/OrdrUp/Tap Beacon-1.webp";
import TapBeacon from "../../../assets/images/images/OrdrUp/Tap Beacon.webp";
import WaiterTakingOrder from "../../../assets/images/images/OrdrUp/Order Summary - Waiter taking order.webp";
import WaiterTakingOrder1 from "../../../assets/images/images/OrdrUp/Order Summary - Waiter taking order-1.webp";
import WaiterTakingOrder2 from "../../../assets/images/images/OrdrUp/Order Summary - Waiter taking order-2.webp";
import OrderVerified from "../../../assets/images/images/OrdrUp/Order Summary - Verified.webp";
import Payment from "../../../assets/images/images/OrdrUp/Payment.webp";

function OrdrUp() {
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
      {" "}
      <section className="hero hero-with-header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="d-flex justify-content-between">
                <h1 className="text-decorated">
                  <b>OrdrUp</b>
                </h1>
              </div>
              <p className="fs-20">
                For Elevate Tech Jam 2019 Hackathon, my team and I created a
                scalable IoT point-of-sale for local businesses that simplifies
                the payment and dining experiences for customers. In short, our
                mission was to alleviate stress on small business who cannot
                afford to pay for sophisticated payment solutions.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <img src={OrdrUpImage} alt="" width="100%" />
              <h4 className="mt-5">Problem Insight</h4>
              <p className="fs-20 text-black">
                Dividing a bill for a large group of diners is a painstakingly
                difficult task for servers. As a customer, the time spent
                waiting for a server to bring you the cash machine is a
                frustrating experience. Businesses lose out on revenue if they
                can’t provide convenient service.
              </p>

              <h4 className="mt-4">The User Experience</h4>
              <p className="fs-20 text-black">
                We created an application that keeps track of individual guest's
                orders and allows servers to update and manage their tables. It
                also allows customers to choose their preferred method of
                payment and any point between verifying their order and leaving.
                All this without the bottle-neck of a debit machine or a busy
                server. Customers use NFC to tap their phones on a beacon at the
                restaurant table. Their server can then update their order
                through the app for the customer to view and verify. At any
                point after verification, the user can pay through either mobile
                payment and leave, or prompt the server that a card machine or
                cash payment is required.
              </p>

              <h4 className="mt-4">Next Steps</h4>
              <p className="fs-20 text-black">
                The next step for Ordrup would be potentially integrating Rogers
                IoT services to create a mesh IoT network. Also, we could add
                extra features to the app such as 'paying for someone else'.
              </p>
              <h4 className="mt-4">Technologies used</h4>
              <ul className="mt-1">
                <li className="fs-20">Node.js</li>
                <li className="fs-20">NativeScript Angular</li>
                <li className="fs-20">Mongo DB</li>
                <li className="fs-20">Arduino</li>
                <li className="fs-20">React</li>
                <li className="fs-20">Figma</li>
                <li className="fs-20">NFC</li>
                <li className="fs-20">3D Printing</li>
              </ul>
              <h4 className="mt-4">Waiter-facing UI</h4>
              <img src={MainPage} alt="" width="100%" className="mt-2" />
              <img src={EditOrder} alt="" width="100%" className="mt-2" />
            </div>
          </div>
        </div>
      </section>
      <section className="wireframes">
        <div className="component-example">
          <div className="container">
            <div className="row justify-content-center p-0 mb-2">
              <div className="col-md-8">
                <h4>Customer-facing UI</h4>
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
                    <img src={TapBeacon1} alt="Image" />
                  </figure>
                  <figure className="photo">
                    <img src={TapBeacon} alt="Image" />
                  </figure>
                  <figure className="photo">
                    <img src={WaiterTakingOrder} alt="Image" />
                  </figure>
                  <figure className="photo">
                    <img src={WaiterTakingOrder1} alt="Image" />
                  </figure>
                  <figure className="photo">
                    <img src={WaiterTakingOrder2} alt="Image" />
                  </figure>
                  <figure className="photo">
                    <img src={OrderVerified} alt="Image" />
                  </figure>
                  <figure className="photo">
                    <img src={Payment} alt="Image" />
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

export default OrdrUp;
