import React, { use, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger) 


const ScrollBallComponent = () => {
    const mainWrapperRef = useRef(null);
    const ballRef = useRef(null);
    useEffect(() => {
        const mainWrapper = mainWrapperRef.current;
        const ball = ballRef.current;

        if (!mainWrapper || !ball) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: mainWrapper,
                start: "top 80%",
                end: "top 10%",
                scrub: true,
                // markers: true,
              },
        });

        tl.to(ball, {
            yPercent: 900,
            duration:2.5,
            ease: "power1.inOut",
          })
        .to(ball, {
            scale: 10,
            duration:2.5,
            ease: "power1.inOut",
        })
        .to(ball, {
            scale: 35,
            duration:2.5,
            ease: "power1.inOut",
        })
        .to(ball, {
            scale: 50,
            duration:2.5,
            ease: "power1.inOut",
        })
        .to(ball, {
            scale: 100,
            duration:2.5,
            ease: "power1.inOut",
        });
        return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
          };

    }, []);
  return (
    <>
      <div ref={mainWrapperRef} className="w-full bg-gray-900 py-5 text-white overflow-hidden">
        
        <section className="w-full">
          <div className="container mx-auto ">
            <div ref={ballRef} className="w-6 h-6 mx-auto bg-white rounded-full mix-blend-difference"></div>
            <div className="bal_content_container mt-30 mb-10">
              <h1 className="text-center text-6xl font-bold lg:text-9xl">
                JOINT VENTURE AI
              </h1>
              <div className="w-full flex pt-20 pb-16">
                <div className="w-1/2"></div>
                <div className="w-1/2 flex justify-center">
                  <p className="w-full max-w-96 text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    cumque ea animi corporis dolore soluta. In cumque ea animi
                    corporis dolore soluta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ScrollBallComponent;
