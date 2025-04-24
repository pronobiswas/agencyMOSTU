import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const AboutComponent = () => {
  return (
    <>
      <section className="w-full py-10">
        <div className="container mx-auto flex">
          <div className="w-1/2 flex items-center">
            <div className="w-full max-w-[500px]">
              <h2 className="text-6xl font-bold mb-6">About Us</h2>
              <h3 className="text-3xl font-semibold mb-4">
                Empowering Innovation with Artificial Intelligence
              </h3>
              <p>
                We’re a team of AI specialists, data scientists, and solution
                architects passionate about delivering intelligent solutions.
                From automating workflows to enhancing customer experiences, our
                AI-powered tools help businesses stay ahead of the curve.
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <DotLottieReact
              src="https://lottie.host/31f23441-c768-4582-bbdc-07fd6cfc8786/GDuRHBJwIp.lottie"
              loop
              autoplay
            />
            
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutComponent;
