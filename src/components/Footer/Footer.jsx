import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Footer.css";
import Cards from "./res/cards.PNG";

function Footer() {
  return (
    <div>
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="f_box">
              <p>Best Selling</p>
              <ul>
                <li>
                  <a href="!#">E-Commerce</a>
                </li>
                <br />
                <li>
                  <a href="!#">Grocery Store</a>
                </li>
                <br />
                <li>
                  <a href="!#">Inventory and POS</a>
                </li>
                <br />
                <li>
                  <a href="!#">Hotel System</a>
                </li>
                <br />
              </ul>
            </div>
            <div className="f_box">
              <p>Support</p>
              <ul>
                <li>
                  <a href="!#">About Us</a>
                </li>
                <br />
                <li>
                  <a href="!#">Contact Us</a>
                </li>
                <br />
                <li>
                  <a href="!#">Help Center</a>
                </li>
                <br />
                <li>
                  <a href="!#">Support on Rent</a>
                </li>
                <br />
              </ul>
            </div>
            <div className="f_box">
              <p>The All Safe</p>
              <ul>
                <li>
                  <a href="!#">Blog</a>
                </li>
                <br />
                <li>
                  <a href="!#">Terms of Use</a>
                </li>
                <br />
                <li>
                  <a href="!#">Payment</a>
                </li>
                <br />
                <li>
                  <a href="!#">Privacy Policy</a>
                </li>
                <br />
              </ul>
            </div>
            <div className="f_box">
              <p>Services</p>
              <ul>
                <li>
                  <a href="!#">Web Development</a>
                </li>
                <br />
                <li>
                  <a href="!#">Mobile Development</a>
                </li>
                <br />
                <li>
                  <a href="!#">PSD and UI Development</a>
                </li>
                <br />
                <li>
                  <a href="!#">Custom Software Building</a>
                </li>
                <br />
                <li>
                  <a href="!#">Corporate Outsourcing Partner</a>
                </li>
                <br />
              </ul>
            </div>
            <div className="f_box">
              <p>Connect</p>
              <ul>
                <li>
                  <a href="!#">Client Login Page</a>
                </li>
                <br />
                <li>
                  <a href="!#">Emergency Request</a>
                </li>
                <br />
                <li>
                  <a href="!#">My Account</a>
                </li>
                <br />
                <li>
                  <a href="!#">Business Partner Login</a>
                </li>
                <br />
                <li>
                  <a href="!#">Open Ticket</a>
                </li>
                <br />
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <section className="visa_card">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8"></div>
            <div className="col-md-4 text-right">
              <img src={Cards} className="cards" alt="cards" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
