import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import Header from "./layOut/Header.jsx";
import Footer from "./layOut/Footer";
import Marquee from "react-fast-marquee";
import DualSliderComponent from "./component/DualSliderComponent.jsx";
import AboutComponent from "./component/AboutComponent.jsx";
import OurServices from "./component/OurServices.jsx";
import BnnerComponent from "./component/homeCompnent/BnnerComponent.jsx";
import BallScrollComponent from "./component/homeCompnent/BallScrollComponent.jsx";
import Verifiable from "./component/homeCompnent/Verifiable.jsx";
import BannerComcnent2 from "./component/homeCompnent/BannerComcnent2.jsx";
import ScrollBallComponent from "./component/ScrollBallComponent.jsx";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    setScrollProgress(progress);
    console.log(scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
    });
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);

  return (
    <>
      <BnnerComponent/>
      <AboutComponent />
      <BannerComcnent2/>
      <ScrollBallComponent/>
      <div className="sliderSection py-10">
        <DualSliderComponent />
      </div>
      <Verifiable/>
      <Footer />
    </>
  );
}

export default App;
