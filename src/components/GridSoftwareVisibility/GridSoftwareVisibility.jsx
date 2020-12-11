import React, { useState } from "react";
import "./Grid.css";
import img from "./product/p_icon/washing-machine.png";
import p1 from "./product/p1.jpg";
import p2 from "./product/p2.JPG";
import p3 from "./product/p3.JPG";
import p4 from "./product/p4.JPG";
import p5 from "./product/p5.JPG";
import p6 from "./product/p6.JPG";
import p7 from "./product/p7.JPG";
import p8 from "./product/p8.JPG";
import p9 from "./product/p9.JPG";
import fire from "./product/homepage-hot-offers.svg";
import white from "./product/homepage-hot-offers white.svg";
//import sideimg1 from "./product/add/1.JPG";
import sideimg2 from "./product/add/2.JPG";
import sideimg3 from "./product/add/3.JPG";
const GridSoftwareVisibility = () => {
  const [imgsrc, setsrc] = useState(fire);
  const MouseOver = () => {
    setsrc(white);
  };
  const MouseOut = () => {
    setsrc(fire);
  };
  return (
    <section class="product-sec">
      <div class="container-fluid">
        <div class="row row-new">
          <div class="col-md-10">
            <div class="container">
              <div class="row">
                <div class="col-md-4">
                  <div class="product_wala">
                    <div class="pro_box">
                      <img src={p1} class="img-fluid" alt="" />
                      <div class="head_design"></div>
                      <div class="pro_heading">
                        <h3>Business Solution</h3>
                      </div>
                    </div>
                    <div class="pro-items">
                      <div class="row m-0">
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <a href="#!" class="btn btn-v_pro w-100">
                        View All
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="product_wala">
                    <div class="pro_box">
                      <img src={p2} class="img-fluid" alt="" />
                      <div class="head_design"></div>
                      <div class="pro_heading">
                        <h3>E-Commerce</h3>
                      </div>
                    </div>
                    <div class="pro-items">
                      <div class="row m-0">
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <a
                        href="#!"
                        class="btn btn-v_pro w-100"
                        style={{ zIndex: "999" }}
                      >
                        View All
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="product_wala">
                    <div class="pro_box">
                      <img src={p3} class="img-fluid" alt="" />
                      <div class="head_design"></div>
                      <div class="pro_heading">
                        <h3>Education</h3>
                      </div>
                    </div>
                    <div class="pro-items">
                      <div class="row m-0">
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <a
                        href="#!"
                        class="btn btn-v_pro w-100"
                        style={{ zIndex: "999" }}
                      >
                        View All
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="product_wala">
                    <div class="pro_box">
                      <img src={p4} class="img-fluid" alt="" />
                      <div class="head_design"></div>
                      <div class="pro_heading">
                        <h3>Healthcare</h3>
                      </div>
                    </div>
                    <div class="pro-items">
                      <div class="row m-0">
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <a
                        href="#!"
                        class="btn btn-v_pro w-100"
                        style={{ zIndex: "999" }}
                      >
                        View All
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="product_wala">
                    <div class="pro_box">
                      <img src={p5} class="img-fluid" alt="" />
                      <div class="head_design"></div>
                      <div class="pro_heading">
                        <h3>Human Resource</h3>
                      </div>
                    </div>
                    <div class="pro-items">
                      <div class="row m-0">
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <a
                        href="#!"
                        class="btn btn-v_pro w-100"
                        style={{ zIndex: "999" }}
                      >
                        View All
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="product_wala">
                    <div class="pro_box">
                      <img src={p6} class="img-fluid" alt="" />
                      <div class="head_design"></div>
                      <div class="pro_heading">
                        <h3>News & Blogs</h3>
                      </div>
                    </div>
                    <div class="pro-items">
                      <div class="row m-0">
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <a
                        href="#!"
                        class="btn btn-v_pro w-100"
                        style={{ zIndex: "999" }}
                      >
                        View All
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="product_wala">
                    <div class="pro_box">
                      <img src={p7} class="img-fluid" alt="" />
                      <div class="head_design"></div>
                      <div class="pro_heading">
                        <h3>Online Reservation</h3>
                      </div>
                    </div>
                    <div class="pro-items">
                      <div class="row m-0">
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <a
                        href="#!"
                        class="btn btn-v_pro w-100"
                        style={{ zIndex: "999" }}
                      >
                        View All
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="product_wala">
                    <div class="pro_box">
                      <img src={p8} class="img-fluid" alt="" />
                      <div class="head_design"></div>
                      <div class="pro_heading">
                        <h3>Hotel & Resturant</h3>
                      </div>
                    </div>
                    <div class="pro-items">
                      <div class="row m-0">
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <a
                        href="#!"
                        class="btn btn-v_pro w-100"
                        style={{ zIndex: "999" }}
                      >
                        View All
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="product_wala">
                    <div class="pro_box">
                      <img src={p9} class="img-fluid" alt="" />
                      <div class="head_design"></div>
                      <div class="pro_heading">
                        <h3>OTT Platform</h3>
                      </div>
                    </div>
                    <div class="pro-items">
                      <div class="row m-0">
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="pro_info">
                            <a
                              href="!#"
                              class=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <a
                        href="#!"
                        class="btn btn-v_pro w-100"
                        style={{ zIndex: "999" }}
                      >
                        View All
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-2 pro_add">
            <div
              className="img-space"
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
            >
              <img src={imgsrc} class="img-fluid" alt="" width="25%" />

              <p>Hot Offers</p>
              <div align="centre">
                <p className="subtxt">Check out our weekly hot deals</p>
              </div>
            </div>

            <img src={sideimg2} class="img-fluid" alt="" />
            <img src={sideimg3} class="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridSoftwareVisibility;
