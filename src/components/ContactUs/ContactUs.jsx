import React from "react";
import "./ContactUs.css";
import t from "./res/t.PNG";
import f from "./res/f.PNG";
import i from "./res/i.PNG";
import e from "./res/e.PNG";
function ContactUs() {
  return (
    <section class="hcontact-sec">
      <div class="container-fluid">
        <div class="row conatct_row">
          <div class="col-md-4">
            <div class="social_box">
              <h3 class="">Contact Us</h3>
              <p>
                Fill up the form and our Team will get back to you within 24
                hours.
              </p>
              <span>
                Email Us: <a href="!#">support@theallsafe.com</a>
              </span>
              <br />
              <a href="!#">
                <img src={t} alt="" />
              </a>
              <a href="!#">
                <img src={f} alt="" />
              </a>
              <a href="!#">
                <img src={i} alt="" />
              </a>
              <a href="!#">
                <img src={e} alt="" />
              </a>
            </div>
          </div>
          <div class="col-md-8">
            <div>
              <form class="row">
                <div class="form-group col-md-12">
                  <label for="fullname" style={{ marginTop: "1rem" }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="fullname"
                    placeholder="Full Name"
                  />
                </div>
                <div class="form-group col-md-8">
                  <label for="email">E-Mail</label>
                  <input
                    type="Email"
                    class="form-control"
                    id="email"
                    placeholder="E-mail"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="pnum">Phone</label>
                  <input
                    type="text"
                    class="form-control"
                    id="pnum"
                    placeholder="Phone"
                  />
                </div>
                <div class="form-group col-md-12">
                  <label for="email" class="w-100">
                    What type of supportdo you need?
                  </label>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label class="form-check-label" for="inlineCheckbox1">
                      Software
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      id="inlineCheckbox2"
                      value="option2"
                    />
                    <label class="form-check-label" for="">
                      Web Development
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      id="inlineCheckbox2"
                      value="option2"
                    />
                    <label class="form-check-label" for="">
                      Andriod/iOS Development
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      id="inlineCheckbox2"
                      value="option2"
                    />
                    <label class="form-check-label" for="">
                      Others
                    </label>
                  </div>
                </div>
                <div class="form-group col-md-12">
                  <label for="mess">Message</label>
                  <textarea
                    class="form-control"
                    rows="5"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div class="col-md-12 text-right">
                  <a href="!#" class="btn btn-sub ">
                    Send Message
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
