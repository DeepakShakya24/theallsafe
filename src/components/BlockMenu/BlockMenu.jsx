import React from "react";
import "./BlockMenu.css";
import Logo from "./icon/Logo theAllsafe 70px.png";
import icon from "./icon/Free Setup Dilevery Sale Me Lo Khush Raho.png";
import Business from "./icon/Business Solution.png";
import oneview from "./icon/One View.png";
import ssl from "./icon/SSL Secured.png";
import cart from "./icon/Cart.png";
import myaccount from "./icon/My Account.png";
import icon2 from "./icon/E-Commerce.png";
import icon3 from "./icon/Education.png";
import icon4 from "./icon/Healthcare.png";
import icon5 from "./icon/Human Resource.png";
import icon6 from "./icon/News and Blogs.png";
import icon7 from "./icon/Online Reservation.png";
import icon8 from "./icon/Hotel and Resturant.png";
import icon9 from "./icon/OTT Platform.png";
import icon10 from "./icon/Others.png";
const BlockMenu = () => {
  return (
    <div>
      <header>
        <section class=" head-1">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <p>
                  {" "}
                  <img alt="" src={icon} width="30px" />
                  Free Setup Between 6-12 Hours* | Sale Me Lo Khush Raho
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="head-3">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-9">
                <ul style={{ float: "left" }}>
                  <li>
                    <a
                      href="
                    !#"
                    >
                      <i class="fa fa-truck"></i> Free, Setup Delivery *
                    </a>
                  </li>
                  <li>
                    <a href="!#">
                      <i class="fa fa-recycle"></i> Free Branding Setup on
                      Rental*
                    </a>
                  </li>
                  <li>
                    <a href="!#">
                      <i class="fa fa-certificate"></i> Best Price Guarantee
                    </a>
                  </li>
                  <li>
                    <a href="!#">
                      <i class="fa fa-phone-square"></i> 12/7 Business Support
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-md-3">
                <ul>
                  <li class="com-abt ">
                    <a href="!#">About Us</a>
                  </li>
                  <li class="com-info">
                    <a href="!#">
                      <i class="fa fa-volume-control-phone"></i> Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section class="head-2">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-2 ">
                <a href="!#" class="logo">
                  <img alt="" src={Logo} class="img-fluid" />
                </a>
              </div>
              <div class="col-md-2 "></div>
              <div class="col-md-3 ">
                <div class="form-group has-search">
                  <span class="fa fa-search form-control-feedback"></span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                  />
                </div>
              </div>
              <div class="col-md-5">
                <div class="logo_menu">
                  <ul>
                    <li>
                      <a href="!#">
                        <img alt="" src={oneview} />
                        Mega Menu
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <img alt="" src={ssl} style={{ width: "80px" }} />
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <img alt="" src={cart} />
                        cart
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <img alt="" src={myaccount} />
                        My Account
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <nav class="navbar navbar-expand-md navbar-dark ">
          <div className="container-fluid blocks">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent main_nav"
            >
              <ul class="navbar-nav">
                <li class="nav-item dropdown">
                  <span class="new-info">₹999/mo onwards</span>
                  <a
                    className="nav-link dropdown-toggle"
                    href="!#"
                    id="navbarDropdown2"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img alt="" src={Business} class="img-fluid" />
                    Business <br />
                    Solution
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                    <a class="dropdown-item" href="!#">
                      page 1
                    </a>
                    <a class="dropdown-item" href="!#">
                      page 1
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="!#"
                    id="navbarDropdown2"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img alt="" src={icon2} class="img-fluid" />
                    E-Commerce
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                    <a class="dropdown-item" href="!#">
                      page 1
                    </a>
                    <a class="dropdown-item" href="!#">
                      page 1
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="!#"
                    id="navbarDropdown2"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img alt="" src={icon3} class="img-fluid" />
                    Education
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                    <a class="dropdown-item" href="!#">
                      page 1
                    </a>
                    <a class="dropdown-item" href="!#">
                      page 1
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <span class="new-info">Up to 30% off</span>
                  <a
                    class="nav-link dropdown-toggle"
                    href="!#"
                    id="navbarDropdown2"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img alt="" src={icon4} class="img-fluid" />
                    Healthcare
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                    <a class="dropdown-item" href="!#">
                      page 1
                    </a>
                    <a class="dropdown-item" href="!#">
                      page 1
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="!#"
                    id="navbarDropdown2"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img alt="" src={icon5} class="img-fluid" />
                    Human <br />
                    Resource
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                    <a class="dropdown-item" href="!#">
                      page 1
                    </a>
                    <a class="dropdown-item" href="!#">
                      page 1
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="!#"
                    id="navbarDropdown2"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img alt="" src={icon6} class="img-fluid" />
                    News & Blogs
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                    <a class="dropdown-item" href="!#">
                      page 1
                    </a>
                    <a class="dropdown-item" href="!#">
                      page 1
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="!#"
                    id="navbarDropdown2"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img alt="" src={icon7} class="img-fluid" />
                    Online <br />
                    Reservation
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                    <a class="dropdown-item" href="!#">
                      page 1
                    </a>
                    <a class="dropdown-item" href="!#">
                      page 1
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="!#"
                    id="navbarDropdown2"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img alt="" src={icon8} class="img-fluid" />
                    Hotel & <br />
                    Resturant
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                    <a class="dropdown-item" href="!#">
                      page 1
                    </a>
                    <a class="dropdown-item" href="!#">
                      page 1
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="!#"
                    id="navbarDropdown2"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img alt="" src={icon9} class="img-fluid" />
                    OTT Platform
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                    <a class="dropdown-item" href="!#">
                      page 1
                    </a>
                    <a class="dropdown-item" href="!#">
                      page 1
                    </a>
                  </div>
                </li>

                <li class="nav-item dropdown">
                  <span class="new-info">new</span>
                  <a
                    class="nav-link dropdown-toggle"
                    href="!#"
                    id="navbarDropdown2"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img alt="" src={icon10} class="img-fluid" />
                    Others
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                    <a class="dropdown-item" href="!#">
                      page 1
                    </a>
                    <a class="dropdown-item" href="!#">
                      page 1
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>

    // {/* {info && <span class="new-info">{info}</span>}
    // <div className="image">
    //   <img className="icon img-block" src={icon} alt="" />
    // </div>
    // <div className="title dropdown">
    //   <button className="dropdownbtn btn btn-link">
    //     <strong>{title}</strong>
    //   </button>
    //   <div className="dropdown-content">
    //     <a href="!#">Page 1</a>
    //     <a href="!#">Page 2</a>
    //   </div>
    // </div> */}
  );
};

export default BlockMenu;
