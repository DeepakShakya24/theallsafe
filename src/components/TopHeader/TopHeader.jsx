import React from "react";
import "./TopHeader.css";
//import Truck from "./res/Free Setup Dilevery Sale Me Lo Khush Raho.png";
import contact from "./res/Contact Us.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTruck,
//   faRecycle,
//   faCertificate,
//   faPhoneSquare,
// } from "@fortawesome/free-solid-svg-icons";

function TopHeader() {
  return (
    <div className="header-part">
      <div className="NavigationItems">
        <span>
          <ul>
            <li>
              <a href="#!">
                <i class="fa fa-truck"></i> Free Setup, Delivery*
              </a>
            </li>
            <li>
              <a href="#!">
                <i class="fa fa-recycle"></i> Free Branding Setup on Rental*
              </a>
            </li>
            <li>
              <a href="#!">
                <i class="fa fa-certificate"></i> Best Price Guarantee
              </a>
            </li>
            <li>
              <a href="#!">
                <i class="fa fa-phone-square"></i> 12/7 Business Support
              </a>
            </li>
          </ul>
        </span>
        <span className="rightNav">
          <ul>
            <li>
              <a href="#!"> About Us </a>
            </li>
            <li>
              <a href="#!">
                <img
                  src={contact}
                  alt=""
                  className="img-fluid"
                  width="20"
                  height="20"
                />
                Contact Us
              </a>
            </li>
          </ul>
        </span>
      </div>
    </div>
  );
}

export default TopHeader;
