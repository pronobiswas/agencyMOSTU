import React from 'react'
import WaterWave from "react-water-wave";
import bannerBg1 from "./assets/bg3.jpg";
import conicBG from "./assets/conicBG.png";
import pilot from "./assets/pilot.png";
import ChatGPT from "../assets/ChatGPT.png";

const BannnerComponent1 = () => {
  return (
    <>
    <div
        id="heroSection"
        className="w-full h-full min-h-[calc(100vh-100px)] relative"
      >
        <WaterWave
          id="heroContainer"
          imageUrl={bannerBg1}
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
                    <p className="text-center text-blue-900 w-full max-w-80 mx-auto mt-10 md:max-w-[530px] md:text-xl ">
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
    </>
  )
}

export default BannnerComponent1