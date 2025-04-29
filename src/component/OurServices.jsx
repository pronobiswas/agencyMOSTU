import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const OurServices = () => {
  const pro_timeline = useRef(null);
  const lineRef = useRef(null);
  const indicatorsRef = useRef([]);
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  


  useEffect(() => {
    const element = pro_timeline.current;
    if (!element) return;
    const elementHeight = element.offsetHeight;
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: pro_timeline.current,
        start: "top top",
        end: `+=${elementHeight + 500}`,
        scrub: true,
        markers: true,
        pin: true,
        pinSpacing: true,
      },
    });
  
    tl1.to(pro_timeline.current, {
      duration: 1,
      ease: "power2.inOut",
    });
  
    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);
  

  return (
    <>
      <section
        ref={pro_timeline}
        className="timeline w-full overflow-hidden"
        id="pro_timeline"
      >
        <section id="what_do_i_do">
          <div className="pro_container container mx-auto">
            <div className="what_do_i_do_wrapper">
              <div className="progress_container">
                <div className="line" ref={lineRef}>
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="pro_indicator"
                      ref={(el) => (indicatorsRef.current[i] = el)}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="progress_content">
                <div className="pro_image_box">
                  <img
                    ref={imageRef}
                    src="./asset/images/60.jpeg"
                    alt="png"
                    id="what_do_i_do_image"
                  />
                </div>
                <div className="pro_text_box">
                  <h2 ref={headingRef} id="what_do_i_do_heading">
                    Highlights and Challenges
                  </h2>
                  <p ref={paragraphRef} id="what_do_i_do_pragraph">
                    Inspiring Design Plan and Plot Many solutions are on the
                    table, but only one is the right one. Bespoke for your
                    business. At this stage, you will get the wireframe, and our
                    project managers will ensure that it runs within the agreed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default OurServices;
