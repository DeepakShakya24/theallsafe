import React from "react";
//import "bootstrap/dist/css/bootstrap.css";
import "./Footer.css";
import Cards from "./res/cards.PNG";

function Footer() {
  return (
    <div>
      <footer>
        <div class="container-fluid">
          <div class="row">
            <div class="f_box">
              <p>Best Selling</p>
              <ul>
                <li>
                  <a href="#!">E-Commerce</a>
                </li>
                <li>
                  <a href="#!">Grocery Store</a>
                </li>
                <li>
                  <a href="#!">Inventory and POS</a>
                </li>
                <li>
                  <a href="#!">Hotel System</a>
                </li>
              </ul>
            </div>
            <div class="f_box">
              <p>Support</p>
              <ul>
                <li>
                  <a href="#!">About Us</a>
                </li>
                <li>
                  <a href="#!">Contact Us</a>
                </li>
                <li>
                  <a href="#!">Help Center</a>
                </li>
                <li>
                  <a href="#!">Support on Rent</a>
                </li>
              </ul>
            </div>
            <div class="f_box">
              <p>The All Safe</p>
              <ul>
                <li>
                  <a href="#!">Blog</a>
                </li>
                <li>
                  <a href="#!">Terms of Use</a>
                </li>
                <li>
                  <a href="#!">Payment</a>
                </li>
                <li>
                  <a href="#!">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div class="f_box">
              <p>Services</p>
              <ul>
                <li>
                  <a href="#!">Web Development</a>
                </li>
                <li>
                  <a href="#!">Mobile Development</a>
                </li>
                <li>
                  <a href="#!">PSD and UI Development</a>
                </li>
                <li>
                  <a href="#!">Custom Software Building</a>
                </li>
                <li>
                  <a href="#!">Corporate Outsourcing Partner</a>
                </li>
              </ul>
            </div>
            <div class="f_box">
              <p>Connect</p>
              <ul>
                <li>
                  <a href="#!">Client Login Page</a>
                </li>
                <li>
                  <a href="#!">Emergency Request</a>
                </li>
                <li>
                  <a href="#!">My Account</a>
                </li>
                <li>
                  <a href="#!">Business Partner Login</a>
                </li>
                <li>
                  <a href="#!">Open Ticket</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <section class="visa_card">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-8"></div>
            <div class="col-md-4 text-right">
              <img src={Cards} style={{ width: "100%" }} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
