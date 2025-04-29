import React from "react";
import WaterWave from "react-water-wave";
import bannerBg1 from "../../assets/bg3.jpg";
import Header from "../../layOut/Header";

const BnnerComponent = () => {
  return (
    <>
      <div>
        <div id="heroSection" className="w-full h-screen">
          <WaterWave
            id="heroContainer"
            imageUrl={bannerBg1}
            style={{
              width: "100%",
              height: "100%",
              backgroundSize: "cover",
              display: "block",
            }}
          >
            {({ pause, play }) => (
              <>
                <Header />
                <div className="heroContainer ">
                  <div className="container mx-auto">
                    <section className="w-full pt-12 flex md:pt-20 lg:pt-30">
                      <aside className="w-1/2" >
                      <div>
                        <h1 className="bannerHeading text-4xl font-bold  w-full mx-auto md:text-6xl lg:text-8xl">
                          AI Powered Digital groth Agency
                        </h1>

                        <div className="w-fit mt-5">
                          <h2 className="text-3xl font-bold">
                          Empower Your Business with Smart AI Solutions
                          </h2>
                        </div>

                        <div>
                            <p className=" text-blue-900 w-full  md:text-xl ">
                            build your coustom AI for your custom needs, Grow with
                            ai and jump to the future . Technlogy is here to help
                            you.
                            </p>
                            <p className=" text-blue-900 w-full  md:text-xl ">
                            From intelligent web apps to automated customer experiences — we build future-ready digital products powered by AI.
                            </p>
                        </div>

                        <div className="w-fit mx-auto rounded mt-5 p-1 bg-gradient-to-r from-blue-500 via-purple-500  to-sky-500">
                          <div className="inputbox mx-auto  bg-white p-2 w-fit rounded flex flex-wrap items-center gap-5 justify-center"></div>
                        </div>

                        <div className="bannerBtn text-center mt-6">
                          <button className="bg-blue-300 py-2 px-6 rounded-xl border-4 border-blue-400 border-double outline-3 outline-double outline-blue-300 outline-offset-2 ">
                            Get Started
                          </button>
                        </div>
                      </div>
                      </aside>
                      <aside className="w-1/2">
                        <iframe
                          style={{
                            width: "100%",
                            height: "100%",
                            minHeight: "500px",
                          }}
                          src="https://lottie.host/embed/31f23441-c768-4582-bbdc-07fd6cfc8786/GDuRHBJwIp.lottie"
                        ></iframe>
                      </aside>
                    </section>
                  </div>
                </div>
              </>
            )}
          </WaterWave>
        </div>
      </div>
    </>
  );
};

export default BnnerComponent;
