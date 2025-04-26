import React, { useEffect, useRef } from "react";

const OurServices = () => {
  const pro_timeline = useRef(null);
  const lineRef = useRef(null);
  const indicatorsRef = useRef([]);
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 1000 && scrollY <= 2000 && pro_timeline.current) {
        pro_timeline.current.style.position = "fixed";
        pro_timeline.current.style.top = "0px";
        pro_timeline.current.style.left = "0px";
        pro_timeline.current.style.zIndex = "99999";
      } else if (pro_timeline.current) {
        pro_timeline.current.style.position = "static";
      }
      // Line animation after 1100
      if (lineRef.current) {
        if (scrollY >= 1900) {
          lineRef.current.style.backgroundSize = "100% 1000%";
        } else if (scrollY >= 1800) {
          lineRef.current.style.backgroundSize = "100% 900%";
        } else if (scrollY >= 1700) {
          lineRef.current.style.backgroundSize = "100% 800%";
        } else if (scrollY >= 1600) {
          lineRef.current.style.backgroundSize = "100% 700%";
        } else if (scrollY >= 1500) {
          lineRef.current.style.backgroundSize = "100% 600%";
        } else if (scrollY >= 1400) {
          lineRef.current.style.backgroundSize = "100% 500%";
        } else if (scrollY >= 1300) {
          lineRef.current.style.backgroundSize = "100% 400%";
        } else if (scrollY >= 1200) {
          lineRef.current.style.backgroundSize = "100% 300%";
        } else if (scrollY >= 1100) {
          lineRef.current.style.backgroundSize = "100% 200%";
          lineRef.current.style.transition = "background-size 0.5s ease-in-out";
        } else {
          lineRef.current.style.backgroundSize = "100% 100%";
        }
      }
      // ==change the indicator==
      if (indicatorsRef.current) {
        if(scrollY < 1100) {
          indicatorsRef.current[0].style.width = "20px";
          indicatorsRef.current[0].style.height = "20px";
          indicatorsRef.current[0].style.backgroundColor = "#313636";
          indicatorsRef.current[0].style.border = "none";
        }
        // Check for the first indicator
        if (scrollY >= 1100 && scrollY < 1200) {
          indicatorsRef.current[0].style.width = "40px";
          indicatorsRef.current[0].style.height = "40px";
          indicatorsRef.current[0].style.backgroundColor = "#313636";
          indicatorsRef.current[0].style.border = "2px solid red";
        } else if (scrollY >= 1200 && scrollY < 1300) {
          indicatorsRef.current[0].style.width = "20px";
          indicatorsRef.current[0].style.height = "20px";
          indicatorsRef.current[0].style.backgroundColor = "red";
          indicatorsRef.current[0].style.border = "none";
          indicatorsRef.current[1].style.border = "none";
          indicatorsRef.current[1].style.backgroundColor = "#313636";
          indicatorsRef.current[1].style.width = "20px";
          indicatorsRef.current[1].style.height = "20px";
        }
      
        // Check for the second indicator
        if (indicatorsRef.current[1]) {
          if (scrollY >= 1300 && scrollY < 1400) {
            indicatorsRef.current[1].style.width = "40px";
            indicatorsRef.current[1].style.height = "40px";
            indicatorsRef.current[1].style.backgroundColor = "#313636";
            indicatorsRef.current[1].style.border = "2px solid red";
            indicatorsRef.current[2].style.width = "20px";
            indicatorsRef.current[2].style.height = "20px";
            indicatorsRef.current[2].style.backgroundColor = "#313636";
            indicatorsRef.current[2].style.border = "none";

          } else if (scrollY >= 1400) {
            indicatorsRef.current[1].style.width = "20px";
            indicatorsRef.current[1].style.height = "20px";
            indicatorsRef.current[1].style.border = "none";
            indicatorsRef.current[1].style.backgroundColor = "red";
          }
        }
        // Check for the third indicator
        if (indicatorsRef.current[2]) {
          if (scrollY >= 1500 && scrollY < 1600) {
            indicatorsRef.current[2].style.width = "40px";
            indicatorsRef.current[2].style.height = "40px";
            indicatorsRef.current[2].style.backgroundColor = "#313636";
            indicatorsRef.current[2].style.border = "2px solid red";
          } else if (scrollY >= 1600) {
            indicatorsRef.current[2].style.width = "20px";
            indicatorsRef.current[2].style.height = "20px";
            indicatorsRef.current[2].style.backgroundColor = "red";
            indicatorsRef.current[2].style.border = "none";
          }
        }
        if (indicatorsRef.current[3]) {
          if (scrollY >= 1700 && scrollY < 1800) {
            indicatorsRef.current[3].style.width = "20px";
            indicatorsRef.current[3].style.height = "20px";
            indicatorsRef.current[3].style.backgroundColor = "#313636";
            indicatorsRef.current[3].style.border = "none";
          } else if (scrollY >= 1800) {
            indicatorsRef.current[3].style.width = "40px";
            indicatorsRef.current[3].style.height = "40px";
            indicatorsRef.current[3].style.backgroundColor = "#313636";
            indicatorsRef.current[3].style.border = "2px solid red";
          }
        }
        
      }
      // ==change the imageRef===
      if (imageRef.current) {
        if (scrollY >= 1800) {
          imageRef.current.src = "https://img.etimg.com/thumb/width-1600,height-900,imgsize-19476,resizemode-75,msid-106262899/tech/technology/new-ai-model-life2vec-may-predict-human-lifespan-researchers.jpg";
        } else if (scrollY >= 1500) {
          imageRef.current.src = "https://www.koombea.com/wp-content/uploads/2024/05/creating-an-ai-banner@2x.webp";
        } else if (scrollY >= 1300) {
          imageRef.current.src = "https://img.freepik.com/premium-photo/diagram-illustrating-flow-data-machine-learning-pipeline-from-data-ingestion-model_1314467-175806.jpg";
        } else if (scrollY >= 1100) {
          imageRef.current.src = "https://biglysales.com/wp-content/uploads/2024/06/AI-app-development-cost-cost-to-develop-an-AI-app-how-much-it-cost-to-develop-an-AI-app-Bigly-Sales.webp";
        }
      }
      

    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // cleanup
  }, []);

  return (
    <>
    <section ref={pro_timeline} className="timeline w-full overflow-hidden" id="pro_timeline">
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
                  Inspiring Design Plan and Plot Many solutions are on the table, but only one is the right one. Bespoke for your business. At this stage, you will get the wireframe, and our project managers will ensure that it runs within the agreed.
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
