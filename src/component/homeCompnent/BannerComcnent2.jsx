import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { BsBoxArrowUpRight } from "react-icons/bs";
gsap.registerPlugin(Draggable);

const BannerComcnent2 = () => {
  const textRef = useRef(null);
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);
  const scheduleRef = useRef(null);
  const scheduleSlide = useRef(null);
  const scheduleText = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(textRef.current, {
      y: 0,
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    });
    tl.to(scheduleRef.current, {
      width: "170px",
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    });
    tl.to(
      boxRef1.current,
      {
        x: 0,
        duration: 1,
        opacity: 1,
        ease: "power2.out",
      },
      "<"
    );
    tl.to(
      boxRef2.current,
      {
        y: 0,
        duration: 1,
        opacity: 1,
        ease: "power2.out",
      },
      "<"
    );
    tl.to(
      boxRef3.current,
      {
        x: 0,
        duration: 1,
        opacity: 1,
        ease: "power2.out",
      },
      "<"
    );

    gsap.to(".colorBox", {
      scale: 1.2,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 0.5,
        from: "center",
        grid: "auto",
        ease: "power1.inOut",
      },
    });
    Draggable.create(scheduleSlide.current, {
      type: "x", 
      bounds: ".slide_box",
      onDrag: function () {
        
        const distance = this.x;
        const maxShift = 40;
        const shift = Math.min(distance, maxShift);
        gsap.to(scheduleText.current, {
          x: -shift, 
          duration: 0.1,
        });
      },
      inertia: true,
    });
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
            <div className="banner_img w-40 h-30 rounded-xl grid grid-cols-10 gap-1">
              {
                new Array(70).fill(0).map((_, index) => {
                  const colors = [
                    "bg-red-500",
                    "bg-green-500",
                    "bg-blue-500",
                    "bg-yellow-500",
                    "bg-pink-500",
                    "bg-purple-500",
                    "bg-indigo-500",
                    "bg-teal-500",
                    "bg-orange-500",
                    "bg-rose-500",
                  ];

                  const randomColor = colors[index % colors.length];

                  return (
                    <div 
                      key={index} 
                      className={`colorBox w-full h-full ${randomColor} inline-block scale-1`}
                    ></div>
                  );
                })
              }

            </div>
          </div>

          <div className="banner_container container mx-auto">
            <div className="banner_text text-white mb-15">
              <div className="text-center w-full ">
                <h1
                  ref={textRef}
                  className="text-6xl text-center translate-y-40 opacity-0"
                >
                  Verify to Trust Ai
                </h1>
              </div>
              <p className="w-full max-w-[320px] text-center mx-auto mt-5 mb-8">
                Transforming Ideas into Reality with Cutting-Edge Technology
              </p>
              {/* ==schedule== */}
              <div
                ref={scheduleRef}
                className=" mx-auto w-[44px] p-[2px]  bg-white rounded cursor-pointer"
              >
                <div className="slide_box flex items-center gap-2">
                  <div ref={scheduleSlide} className="slide_icon w-10 h-10 bg-green-700 flex items-center justify-center rounded shrink-0">
                    {" "}
                    &gt;
                  </div>
                  <span ref={scheduleText} className="text-black text-nowrap">Schedule Demo</span>
                </div>

              </div>

            </div>

            <div>
              <p className="text-center text-white mb-4">Lorem, ipsum dolor.</p>
              <div className="text-white flex justify-center gap-4">
                <div
                  ref={boxRef1}
                  className="py-4 px-12 flex flex-col items-center bg-[#4e4e4e62] rounded-2xl translate-x-[-200px] opacity-0"
                >
                  <div className="icon_box bg-[#4e4e4e62] p-5 rounded">
                    <span className="text-4xl">
                      <BsBoxArrowUpRight />
                    </span>
                  </div>
                  <span>Dell</span>
                  <p>Appliance</p>
                </div>
                <div
                  ref={boxRef2}
                  className="py-4 px-12 flex flex-col items-center bg-[#4e4e4e62] rounded-2xl translate-y-[200px] opacity-0"
                >
                  <div className="icon_box bg-[#4e4e4e62] p-5 rounded">
                    <span className="text-4xl">
                      <BsBoxArrowUpRight />
                    </span>
                  </div>
                  <span>Dell</span>
                  <p>Appliance</p>
                </div>
                <div
                  ref={boxRef3}
                  className="py-4 px-12 flex flex-col items-center bg-[#4e4e4e62] rounded-2xl translate-x-[200px] opacity-0"
                >
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
