import { useState } from "react";
import bannerBg1 from "./assets/tranBG.jpeg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import Header from "./layOut/Header.jsx";
import Footer from "./layOut/Footer";
import WaterWave from "react-water-wave";
import conicBG from "./assets/conicBG.png";
import pilot from "./assets/pilot.png";
import ChatGPT from "./assets/ChatGPT.png";
// import SwiperComponent from './component/SwiperComponent.jsx'
import Marquee from "react-fast-marquee";
import DualSliderComponent from "./component/DualSliderComponent.jsx";
import TourPage from "./pages/TourPage.jsx";
import ServicesComponent from "./component/ServicesComponent.jsx";
import AboutComponent from "./component/AboutComponent.jsx";
import OurServices from "./component/OurServices.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        id="heroSection"
        className="w-full h-full min-h-[calc(100vh-100px)] relative"
      >
        <WaterWave
          id="heroContainer"
          // imageUrl={bannerBg1}
          style={{ width: "100%", height: "100%", backgroundSize: "cover" }}
        >
          {({ pause, play }) => (
            <>
              <Header />
              <div className="heroContainer ">
                <div className="container mx-auto">
                  <section className="w-full h-96 pt-12  md:pt-20 lg:pt-30">
                    <h1 className="bannerHeading text-4xl font-bold text-center w-full max-w-[980px] mx-auto md:text-6xl lg:text-8xl">
                      AI Powered Digital groth Agency
                    </h1>
                    {/* ========company name======== */}
                    <div className="w-fit mx-auto bg-blue-900 mt-5 rounded px-5 pb-1">
                      <h2 className="menulogo text-3xl font-bold">
                        _Join Venture Ai_
                      </h2>
                    </div>
                    {/* =====paragraph=== */}
                    <p className="text-center text-white w-full max-w-80 mx-auto mt-10 md:max-w-[530px] md:text-xl ">
                      build your coustom AI for your custom needs, Grow with ai
                      and jump to the future . Technlogy is here to help you
                    </p>

                    {/* ===input container===== */}
                    <div className="w-fit mx-auto rounded mt-5 p-1 bg-gradient-to-r from-blue-500 via-purple-500  to-sky-500">
                      {/* ====input-warpper======= */}
                      <div className="inputbox mx-auto  bg-white p-2 w-fit rounded flex flex-wrap items-center gap-5 justify-center">
                        {/* ===input== */}
                        <input
                          type="text"
                          placeholder="Qureary your Service"
                          className="w-80 text-2xl p-1 bg-white rounded border-0 outline-blue-500 outline-2 outline-double outline-offset-2"
                        />
                        {/* ====button box== */}
                        <div className="navBtn w-fit">
                          <span className="btnTxt">Search</span>
                        </div>
                        <div className="copilot ">
                          <img src={pilot} alt="png" width={40} />
                        </div>
                        <div className="copilot">
                          <img src={ChatGPT} alt="png" width={40} />
                        </div>
                      </div>
                    </div>

                    <div className="bannerBtn text-center mt-6">
                      <button className="bg-blue-300 py-2 px-6 rounded-xl border-4 border-blue-400 border-double outline-3 outline-double outline-blue-300 outline-offset-2 ">
                        Get Started
                      </button>
                    </div>
                  </section>
                </div>
              </div>
            </>
          )}
        </WaterWave>
      </div>
      
      <div className="bg-gray-900 py-6">
        <h2 className="text-white text-center text-2xl font-bold mb-4">
          🚀 AI Services We Offer
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
      <AboutComponent />
      <div className="sliderSection">
        <DualSliderComponent />
      </div>
      <OurServices/>

      <Footer />
    </>
  );
}

export default App;
