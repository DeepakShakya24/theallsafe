import React from "react";
import "./Blogs.css";
import b1 from "./res/b1.JPG";
import b2 from "./res/b2.JPG";
import b3 from "./res/b3.JPG";
function Blogs() {
  return (
    <section class="blog_sec">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <h2 class="text-center font-weight-bold blogs-heading">
              OUR BLOGS
            </h2>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img alt="" class="card-img-top" src={b1} />
              <div class="card-body">
                <h5 class="card-title">
                  <strong>Front to Back</strong>
                </h5>
                <p class="card-text">
                  The term “front-end” refers to the user interface, while
                  “back-end” means the server, application and database that
                  work behind the
                </p>
                <a href="#!" class="btn p-0">
                  Read more...
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img alt="" class="card-img-top" src={b2} />
              <div class="card-body">
                <h5 class="card-title">Android Devlopment</h5>
                <p class="card-text">
                  The term “front-end” refers to the user interface, while
                  “back-end” means the server, application and database that
                  work behind the
                </p>
                <a href="#!" class="btn p-0">
                  Read more...
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img alt="" class="card-img-top" src={b3} />
              <div class="card-body">
                <h5 class="card-title">iOS Development</h5>
                <p class="card-text">
                  The term “front-end” refers to the user interface, while
                  “back-end” means the server, application and database that
                  work behind the
                </p>
                <a href="#!" class="btn p-0">
                  Read more...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
