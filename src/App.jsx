import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import Header from "./layOut/Header.jsx";
import Footer from "./layOut/Footer";
import AboutComponent from "./component/AboutComponent.jsx";
import OurServices from "./component/OurServices.jsx";
import BnnerComponent from "./component/homeCompnent/BnnerComponent.jsx";
import BallScrollComponent from "./component/homeCompnent/BallScrollComponent.jsx";
import Verifiable from "./component/homeCompnent/Verifiable.jsx";
import BannerComcnent2 from "./component/homeCompnent/BannerComcnent2.jsx";
import ScrollBallComponent from "./component/ScrollBallComponent.jsx";
import MarqueeComponent from "./component/homeCompnent/MarqueeComponent.jsx";

function App() {
  return (
    <>
      {/* <BnnerComponent/> */}
      <Header/>
      <BannerComcnent2/>
      <ScrollBallComponent/>
      <MarqueeComponent/>
      <OurServices/>
      <Verifiable/>
      <Footer />
    </>
  );
}

export default App;
