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

      <div className="bg-gray-900 py-12">
        <h2 className="text-white text-center text-2xl font-bold mb-4">
          🚀AI Services We Offer
        </h2>
        <Marquee
          speed={50}
          autoFill={true}
          className="text-white text-lg font-semibold"
        >
          <div className="flex items-center space-x-12">
            <span className="px-6 py-2 bg-blue-600 rounded-lg">
              🤖 Chatbots
            </span>
            <span className="px-6 py-2 bg-green-600 rounded-lg">
              📊 AI Analytics
            </span>
            <span className="px-6 py-2 bg-purple-600 rounded-lg">
              🎨 AI Art Generation
            </span>
            <span className="px-6 py-2 bg-red-600 rounded-lg">
              🛒 AI in E-commerce
            </span>
            <span className="px-6 py-2 bg-yellow-600 rounded-lg">
              📝 AI Content Writing
            </span>
            <span className="px-6 py-2 bg-pink-600 rounded-lg">
              🔍 AI SEO Optimization
            </span>
            <span className="px-6 py-2 bg-teal-600 rounded-lg">
              🎵 AI Music Creation
            </span>
          </div>
        </Marquee>
      </div>
      {/* <BallScrollComponent/> */}
      <OurServices />
      <AboutComponent />
      <div className="sliderSection py-10">
        <DualSliderComponent />
      </div>
      

      <Footer />
    </>
  );
}

export default App;
