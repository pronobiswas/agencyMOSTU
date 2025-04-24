import React, { useEffect, useRef, useState } from 'react';

const BallScrollComponent = () => {
  const [scrollToTop, setScrollToTop] = useState(0);
  const [ballSize, setBallSize] = useState(0);
  const ballWrapperRef = useRef(null);
  const ballRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollToTop(currentScroll);

      const size = Math.max(currentScroll - 1000, 20);
      const topPosition = Math.min(currentScroll - 1000, 290);

      setBallSize(size);

      // Stick the wrapper at the top
      if (ballWrapperRef.current) {
        if (currentScroll > 900) {
            ballWrapperRef.current.style.position = "static";
            ballWrapperRef.current.style.top = "0";
          } 
        if (currentScroll > 1000) {
          ballWrapperRef.current.style.position = "fixed";
          ballWrapperRef.current.style.top = "0";
          ballWrapperRef.current.style.zIndex = "99999";
        }
        if (currentScroll > 1300) {
            ballWrapperRef.current.style.position = "static";
          ballWrapperRef.current.style.top = "0";
          } 

      }

      // Move and resize the ball
      if (ballRef.current) {
        ballRef.current.style.width = `${size}px`;
        ballRef.current.style.height = `${size}px`;
        ballRef.current.style.top = `${topPosition}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div ref={ballWrapperRef} className='w-full h-screen bg-gray-900 relative overflow-hidden'>
        <div
          ref={ballRef}
          id="ball"
          className='bg-amber-500 rounded-full absolute'
          style={{
            width: '20px',
            height: '20px',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            transition: 'all 0.2s ease-in-out',
          }}
        ></div>

        <div id="pro_ball_warper">
          <div className="container mx-auto pt-60">
            <div className="pro_ball_content w-full flex flex-col justify-center items-center gap-20 ">
              <h1 className='text-6xl text-white font-bold'>JOINT VENTURE AI</h1>
              <div className="text_conetnt flex">
                <div className="w-1/2"></div>
                <div className="w-1/2">
                  <p className='text-white text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique odio eaque architecto ipsa, voluptatibus in officiis nemo sit!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='w-full h-screen'></div> */}
    </>
  );
};

export default BallScrollComponent;
