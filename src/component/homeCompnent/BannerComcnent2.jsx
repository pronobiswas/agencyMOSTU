import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { BsBoxArrowUpRight } from "react-icons/bs";

const BannerComcnent2 = () => {
  const textRef = useRef(null);
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);
  const scheduleRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(textRef.current, {
      y: 0,
      duration: 1,
      opacity: 1, 
      ease: "power2.out",
    })
    tl.to(scheduleRef.current, { 
      width: "170px",
      duration: 1,
      opacity: 1, 
      ease: "power2.out",
    });
    tl.to(boxRef1.current, { 
      x: 0,
      duration: 1,
      opacity: 1, 
      ease: "power2.out",
    },"<");
    tl.to(boxRef2.current, { 
      y: 0,
      duration: 1,
      opacity: 1, 
      ease: "power2.out",
    },"<")
    tl.to(boxRef3.current, { 
      x: 0,
      duration: 1,
      opacity: 1, 
      ease: "power2.out",
    },"<");
    
  }, []);
  return (
    <>
      <div id="banner" className="w-full h-screen bg-gray-900 font-sans">
        <header className="w-full text-white">
          <nav className="w-full flex justify-between items-center py-4 px-8">
            <div className="logo font-bold text-3xl">
              JVI<small>jvi</small>
            </div>
            <div className="menu bg-[#ffffff23] border border-[#b9b9b9a9] py-1 px-4 rounded-4xl">
              <ul className="flex gap-8 [&>li]:cursor-pointer">
                <li>Overview</li>
                <li>Technology</li>
                <li>Testimonial ▼</li>
                <li>Resources</li>
              </ul>
            </div>
            <div className="user flex gap-2">
              <button className="bg-[#ffffff23] py-1 px-4 rounded-[10px] border border-[#b9b9b9a9]">
                Log In
              </button>
              <button className="bg-[#ffff] text-black py-1 px-4 rounded-[10px] border border-[#b9b9b9a9]">
                Get Started
              </button>
            </div>
          </nav>
        </header>
        <div className="py-15">

          <div className="container flex justify-center items-center mx-auto mb-20">
            <div className="banner_img w-30 h-30 border-2 border-[#797979] rounded-xl">
              <img src="#" alt="" />
            </div>
          </div>

          <div className="banner_container container mx-auto">
            <div className="banner_text text-white mb-15">
              <div className="text-center w-full ">
                <h1 ref={textRef} className="text-6xl text-center translate-y-40 opacity-0">Verify to Trust Ai</h1>
              </div>
              <p className="w-full max-w-[320px] text-center mx-auto mt-5 mb-8">
                Transforming Ideas into Reality with Cutting-Edge Technology
              </p>
              {/* ==schedule== */}
              <div ref={scheduleRef} className="slide_box mx-auto w-[44px] flex items-center gap-2 p-[2px] bg-white rounded cursor-pointer">
                <div className="slide_icon w-10 h-10 bg-green-700 flex items-center justify-center rounded shrink-0">
                  {" "}
                  &gt;
                </div>
                <span className="text-black text-nowrap">Schedule Demo</span>
              </div>
            </div>
            
            <div>
              <p className="text-center text-white mb-4">Lorem, ipsum dolor.</p>
              <div className="text-white flex justify-center gap-4">
                <div ref={boxRef1} className="py-4 px-12 flex flex-col items-center bg-[#4e4e4e62] rounded-2xl translate-x-[-200px]">
                  <div className="icon_box bg-[#4e4e4e62] p-5 rounded">
                    <span className="text-4xl">
                      <BsBoxArrowUpRight />
                    </span>
                  </div>
                  <span>Dell</span>
                  <p>Appliance</p>
                </div>
                <div ref={boxRef2} className="py-4 px-12 flex flex-col items-center bg-[#4e4e4e62] rounded-2xl translate-y-[200px]">
                  <div className="icon_box bg-[#4e4e4e62] p-5 rounded">
                    <span className="text-4xl">
                      <BsBoxArrowUpRight />
                    </span>
                  </div>
                  <span>Dell</span>
                  <p>Appliance</p>
                </div>
                <div ref={boxRef3} className="py-4 px-12 flex flex-col items-center bg-[#4e4e4e62] rounded-2xl translate-x-[200px]">
                  <div className="icon_box bg-[#4e4e4e62] p-5 rounded">
                    <span className="text-4xl">
                      <BsBoxArrowUpRight />
                    </span>
                  </div>
                  <span>Dell</span>
                  <p>Appliance</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default BannerComcnent2;
