import React from "react";
import "./HeadMenu.css";
const HeadMenu = () => {
  return (
    <section class="head_menu">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <ul>
              <li>
                <a href="!#" class="active">
                  Product
                </a>
              </li>
              <li>
                <a href="!#">Collection</a>
              </li>
              <li>
                <a href="!#">Build your Software</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadMenu;
