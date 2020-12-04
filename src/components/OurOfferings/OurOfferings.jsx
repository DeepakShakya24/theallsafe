import React from "react";
import "./OurOffering.css";
import android from "./res/android.png";
import ai from "./res/ai-service.png";
import ios from "./res/ios.png";
import maintain from "./res/maintain.png";
import uiux from "./res/uiux.png";
import webdev from "./res/web-development.png";
function OurOfferings() {
  return (
    <section class="service-home jumbotron">
      <div class="container">
        <div class="container heading">
          <h1>Our Offerings</h1>
          <p>
            We believe in providing smart and innovative mobile and web
            solutions that will help businesses to solve the problems of their
            customers. We not only build the software, but we strategically
            analyse the project, to identify how each business can maximise the
            value it offers to their customers.
          </p>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <div class="service-home-box">
              <h4>
                Web <br />
                Development
              </h4>

              <img
                src={webdev}
                alt="web app development company Spain and Poland"
              />
            </div>
          </div>
          <div class="col-sm-4">
            <div class="service-home-box">
              <h4>
                Android App <br />
                Development
              </h4>

              <img
                src={android}
                alt="Nimble AppGenie - Mobile app development services Germany and Texas"
              />
            </div>
          </div>
          <div class="col-sm-4">
            <div class="service-home-box">
              <h4>
                iOS App <br />
                Development
              </h4>

              <img
                src={ios}
                alt="Top Graphic Designers in Houston and Germany"
              />
            </div>
          </div>
          <div class="col-sm-4">
            <div class="service-home-box">
              <h4>
                Artificial <br />
                Intelligence
              </h4>

              <img
                src={ai}
                alt="Nimble AppGenie - Mobile app development services Germany and Texas"
              />
            </div>
          </div>

          <div class="col-sm-4">
            <div class="service-home-box">
              <h4>
                Maintenance and <br />
                Support
              </h4>

              <img src={maintain} alt="Top Web Designers in Houston" />
            </div>
          </div>
          <div class="col-sm-4">
            <div class="service-home-box">
              <h4>
                UI/UX
                <br /> Design
              </h4>

              <img
                src={uiux}
                alt="Top Creative Agencies in London and Denmark"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurOfferings;
