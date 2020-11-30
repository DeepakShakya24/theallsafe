import React from "react";
import "./SafetyBanner.css";
import group from "./res/Group.jpg";
function SafetyBanner() {
  return (
    <section class="mt-5">
      <div>
        <div className="container-fluid">
          <div className="row">
            <img src={group} class="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SafetyBanner;
