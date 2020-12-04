import React from "react";
import planning from "./res/planning.png";
import development from "./res/d&d.png";
import deploy from "./res/deploy.png";
import testing from "./res/testing.png";
import support from "./res/support.png";
import "./WorkProcess.css";
function WorkProcess() {
  return (
    <div className="container">
      <div class="headingmain">
        <h1>Work Process</h1>
        <p class="container">
          We follow a flexible agile development methodology. This helps us to
          produce bespoke software, optimise the project features, and deliver a
          rapid project turnaround.
        </p>
      </div>
      <div class="work-process">
        <div class="container">
          <div class="row">
            <div class="process-inner">
              <div class="work-pro-content">
                <h4>Planning</h4>
                <p>
                  Before beginning the development process, we plan the whole
                  development strategy and each development stage that will be
                  involved in the project. These precautions allow us to deliver
                  first-class solutions that are bespoke to each of our clients.
                </p>
              </div>
              <div class="pro-number">
                <div class="num-circle rotate">
                  <h4>01</h4>
                </div>
              </div>
              <div class="pro-imgbox">
                <img
                  src={planning}
                  alt="react native app development company London and Saudi Arabia"
                />
              </div>
            </div>
            <div class="process-inner">
              <div class="work-pro-content">
                <h4>Design &amp; Development</h4>
                <p>
                  The design first consists of creating a digital prototype
                  (wireframe) to help you visually understand the web or mobile
                  application flow. The creative UI/UX designs are then
                  completed, which is then followed by the software development.{" "}
                </p>
              </div>
              <div class="pro-number">
                <div class="num-circle blue">
                  <h4>02</h4>
                </div>
              </div>
              <div class="pro-imgbox">
                <img
                  src={development}
                  alt="Top App Developers in London and Switzerland"
                />
              </div>
            </div>
            <div class="process-inner">
              <div class="work-pro-content">
                <h4>Testing</h4>
                <p>
                  All software we create are vigorously tested by our detailed
                  Quality Analysts. We use both Manual and Automated testing
                  methods to guarantee our software is performing to a high
                  standard.{" "}
                </p>
              </div>
              <div class="pro-number">
                <div class="num-circle ">
                  <h4>03</h4>
                </div>
              </div>
              <div class="pro-imgbox">
                <img
                  src={testing}
                  alt="Top Software Developers in London and Bulgaria"
                />
              </div>
            </div>
            <div class="process-inner">
              <div class="work-pro-content">
                <h4>Deploy</h4>
                <p>
                  Our experienced project managers and business analysts plan
                  and manage every stage of the project, to ensure the agreed
                  project scope, as well as the goals, mission, and vision of
                  the client, is adhered to throughout the process of completing
                  the project.
                </p>
              </div>
              <div class="pro-number">
                <div class="num-circle blue">
                  <h4>04</h4>
                </div>
              </div>
              <div class="pro-imgbox">
                <img src={deploy} alt="Top UX Designers in London and Norway" />
              </div>
            </div>
            <div class="process-inner">
              <div class="work-pro-content">
                <h4>Maintenance &amp; Support</h4>
                <p>
                  Getting bespoke software development created by Nimble
                  AppGenie is only the start of your relationship with us. We
                  offer ongoing maintenance and technical/business support to
                  help your business maintain stability and plan for continued
                  growth!{" "}
                </p>
              </div>
              <div class="pro-number">
                <div class="num-circle ">
                  <h4>05</h4>
                </div>
              </div>
              <div class="pro-imgbox">
                <img
                  src={support}
                  alt="custom web application development Bosnia and Nigeria"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkProcess;
