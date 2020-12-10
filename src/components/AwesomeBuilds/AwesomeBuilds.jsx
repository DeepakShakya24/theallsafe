import React from "react";
import "./AwesomeBuilds.css";
import banner from "./res/banner.jpg";
export default function AwesomeBuilds() {
  return (
    <section class="builds-sec ">
      <div class="container-fluid ">
        <div class="row builds-box">
          <div class="col-md-12 head_menu text-center build-heading">
            <h2 class="font-weight-bold">AWESOME BUILDS</h2>
            <ul>
              <li>
                <a href="!#" class="active">
                  BEST SELLER
                </a>
              </li>
              <li>
                <a href="!#">SELF BUILD</a>
              </li>
              <li>
                <a href="!#">ON TRENDING</a>
              </li>
            </ul>
          </div>
          <div class="col-md-8">
            <div class="front_banner">
              <img src={banner} class="img-fluid" alt="" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="front_heading">
              <h3>Developed by theAllsafe</h3>
              <p>
                Our softwares are user inspired, and custom builds. Our
                softwares are user inspired, and custom builds. Our softwares
                are user inspired, and custom builds. Our softwares are user
                inspired, and custom builds. Our softwares are user inspired,
                and custom buildsOur softwares are user inspired, and custom
                builds. Our softwares are user inspired, and custom builds. Our
                softwares are user inspired, and custom builds. Our softwares
                are user inspired, and custom builds.
              </p>
              <a href="!#" class="btn btn-exp pull-right">
                Explore Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
