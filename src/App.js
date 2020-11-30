import "./App.css";
import React from "react";
import TopHeader from "./components/TopHeader/TopHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "./components/Header/Header";
import BlockMenu from "./components/BlockMenu/BlockMenu";
import Footer from "./components/Footer/Footer";
import icon1 from "../src/components/BlockMenu/icon/Business Solution.png";
import icon2 from "../src/components/BlockMenu/icon/E-Commerce.png";
import icon3 from "../src/components/BlockMenu/icon/Education.png";
import icon4 from "../src/components/BlockMenu/icon/Healthcare.png";
import icon5 from "../src/components/BlockMenu/icon/Human Resource.png";
import icon6 from "../src/components/BlockMenu/icon/News and Blogs.png";
import icon7 from "../src/components/BlockMenu/icon/Online Reservation.png";
import icon8 from "../src/components/BlockMenu/icon/Hotel and Resturant.png";
import icon9 from "../src/components/BlockMenu/icon/OTT Platform.png";
import icon10 from "../src/components/BlockMenu/icon/Others.png";
import HeadMenu from "./components/HeadMenu/HeadMenu";
import GridSoftwareVisibility from "./components/GridSoftwareVisibility/GridSoftwareVisibility";
import FullScreenSlider from "./components/FullScreenSliderx3/FullScreenSlider";
import OurVision from "./components/OurVision/OurVision";
import AwesomeBuilds from "./components/AwesomeBuilds/AwesomeBuilds";
import Blogs from "./components/Blogs/Blogs";
import ContactUs from "./components/ContactUs/ContactUs";
import SafetyBanner from "./components/SafetyBanner/SafetyBanner";
import OurCollab from "./components/OurCollab/OurCollab";

function App() {
  return (
    <div className="App">
      <BlockMenu />
      {/* <TopHeader />
      <Header />
      <div className="container-fluid" style={{ display: "flex" }}>
        <BlockMenu
          title="Business Solution"
          icon={icon1}
          info="Up to 30% off"
        />
        <BlockMenu title="E-Commerce" icon={icon2} />
        <BlockMenu title="Education" icon={icon3} />
        <BlockMenu title="HealthCare" icon={icon4} info="Up to 30% off" />
        <BlockMenu title="Human Resource" icon={icon5} />
        <BlockMenu title="News Blogs" icon={icon6} />
        <BlockMenu title="Online Reservation" icon={icon7} />
        <BlockMenu title="Hotel Reservation" icon={icon8} />
        <BlockMenu title="OTT Platforms" icon={icon9} />
        <BlockMenu title="Others" icon={icon10} info="new" />
      </div> */}
      <HeadMenu />
      <GridSoftwareVisibility />
      <FullScreenSlider />
      <OurVision />
      <AwesomeBuilds />
      <Blogs />
      <ContactUs />
      <SafetyBanner />
      <OurCollab />
      {/* <Banner /> */}
      <Footer />
    </div>
  );
}

export default App;
