import React from "react";

const AboutComponent = () => {
  return (
    <>
      <section className="w-full py-10">
        <div className="container mx-auto">
          <div className="w-1/2">
            <div className="w-full max-w-[500px]">
              <h2 className="text-4xl font-bold mb-2">About Us</h2>
              <h3 className="text-2xl font-semibold mb-2">Empowering Innovation with Artificial Intelligence</h3>
              <p>
                We’re a team of AI specialists, data scientists, and solution
                architects passionate about delivering intelligent solutions.
                From automating workflows to enhancing customer experiences, our
                AI-powered tools help businesses stay ahead of the curve.
              </p>
            </div>
          </div>
          <div className="w-1/2"></div>
        </div>
      </section>
    </>
  );
};

export default AboutComponent;
