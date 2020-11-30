import React from "react";
import "./FullScreenSlider.css";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "./add-slider/1.JPG";
import slider2 from "./add-slider/2.JPG";
import slider3 from "./add-slider/3.JPG";
function FullScreenSlider() {
  return (
    <section class="add_slider">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={slider1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider2} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      {/* <div class="container">
        <div class="row">
          <div id="demo" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={slider1} class="img-fluid" alt="" />
              </div>
              <div class="carousel-item">
                <img src={slider2} class="img-fluid" alt="" />
              </div>
              <div class="carousel-item">
                <img src={slider3} class="img-fluid" alt="" />
              </div>
            </div>
            <a class="carousel-control-prev" href="#demo" data-slide="prev">
              <i className="fa fa-angle-left"></i>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
              <i className="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default FullScreenSlider;
