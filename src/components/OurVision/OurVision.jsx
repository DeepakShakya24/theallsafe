import React from "react";
// import s1 from "./icon/s1.PNG";
// import s2 from "./icon/s2.PNG";
// import s3 from "./icon/s3.PNG";
// import s4 from "./icon/s4.PNG";
// import s5 from "./icon/s5.PNG";
// import s6 from "./icon/s6.PNG";
import vision from "./icon/vision.png";
import about from "./icon/about.gif";
import mission from "./icon/mission.png";
import goal from "./icon/goal.png";
import success from "./icon/success.png";
import "./OurVision.css";

export default function OurVision() {
  return (
    <section>
      <div class="headingmain">
        <h1>WHY theAllsafe ?</h1>
      </div>
      <div class="about-home">
        <div class="container">
          <div class="row">
            <div class="col-sm-12  col-md-12 col-xs-12">
              <div class="row">
                <div class="col-sm-6">
                  <div class="home-about-point">
                    <div class="about-point-box">
                      <img
                        src={vision}
                        alt="Mobile App Development Company in London"
                      />
                      <span>Vision</span>
                      <div class="content">
                        <p>
                          We vision a future with the digital economy that will
                          bring transparency to all financial transactions
                          worldwide.
                        </p>
                      </div>
                    </div>
                    <div class="about-point-box">
                      <img
                        src={mission}
                        alt="Web Application Development Company in London"
                      />
                      <span>Mission</span>
                      <div class="content">
                        <p>
                          Our mission is to disrupt the financial sector by
                          making mobile payments the safest, most accessible,
                          and reliable payment solution.
                        </p>
                      </div>
                    </div>
                    <div class="about-point-box">
                      <img
                        src={goal}
                        alt="On-Demand Application Development Company in London"
                      />
                      <span>Goal</span>
                      <div class="content">
                        <p>
                          Our goal for 2020 is to drive the shift towards a
                          digital economy, by providing businesses with e-wallet
                          mobile applications.
                        </p>
                      </div>
                    </div>
                    <div class="about-point-box">
                      <img
                        src={success}
                        alt="Top Android App Development Companies California and Texas"
                      />
                      <span>Success</span>
                      <br />
                      <div class="content">
                        <p>
                          For us, success is to provide our clients with
                          cost-effective technology solutions that solve
                          business challenges and create greater convenience for
                          society.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="about-home-img">
                    <img
                      src={about}
                      alt="Android App Development Companies Florida and Hawaii"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="container">
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
      </div> */}
    </section>
  );
}
