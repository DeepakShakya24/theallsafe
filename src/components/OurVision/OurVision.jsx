import React from "react";
import s1 from "./icon/s1.PNG";
import s2 from "./icon/s2.PNG";
import s3 from "./icon/s3.PNG";
import s4 from "./icon/s4.PNG";
import s5 from "./icon/s5.PNG";
import s6 from "./icon/s6.PNG";
import "./OurVision.css";

export default function OurVision() {
  return (
    <section class="services-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="service_heading">
              <h2>Why Enterprises Choose theAllsafe</h2>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service_box">
              <img src={s1} class="img-fluid" alt="" />
              <p>Content-Aware & Personalized</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service_box">
              <img src={s2} class="img-fluid" alt="" />
              <p>Simple, Yet Powerful</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service_box">
              <img src={s3} class="img-fluid" alt="" />
              <p>On-Demand Support</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service_box">
              <img src={s4} class="img-fluid" alt="" />
              <p>Secure and Reliable</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service_box">
              <img src={s5} class="img-fluid" alt="" />
              <p>Quickest Time-to-Valve</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service_box">
              <img src={s6} class="img-fluid" alt="" />
              <p>Omnichannel Presence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
