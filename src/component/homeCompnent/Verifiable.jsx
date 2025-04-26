import React from "react";

const Verifiable = () => {
  return (
    <>
      <div id="verifiable" className="w-full py-10">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <button className=" border rounded-b-full px-12 bg-green-400">
              Standards
            </button>
          </div>
          <h2 className="text-center text-4xl ">Evolving trust for</h2>
          <h2 className="text-4xl text-green-400 text-center mb-8 font-bold">
            AI with
          </h2>
        </div>
        <div className="w-full bg-green-800 py-8">
          <div className="container mx-auto flex justify-center items-center gap-4">
            <div className="w1/2 flex items-center gap-4">
              <h2 className="text-4xl text-green-400 font-bold">
                Lorem, ipsum.
              </h2>

              <div className="slide_ball_container relative">
                <div className="ball_identifier w-3 h-3 bg-green-600 rounded-full absolute top-[-90px] left-[-40px]"></div>
                <div className="ball_identifier w-6 h-6 bg-green-500 rounded-full absolute top-[-60px] left-[-15px]"></div>
                <div className="ball_identifier w-9 h-9 bg-green-400 rounded-full"></div>
                <div className="ball_identifier w-6 h-6 bg-green-500 rounded-full absolute bottom-[-60px] left-[-15px]"></div>
                <div className="ball_identifier w-3 h-3 bg-green-600 rounded-full absolute bottom-[-90px] left-[-40px]"></div>
              </div>
            </div>
            <div className="w1/2">
              <ul className="flex flex-col gap-4">
                <li>
                  <div>
                    <h4 className="font-bold">Lorem ipsum dolor sit.</h4>
                    <small>Lorem ipsum dolor sit amet.</small>
                  </div>
                </li>
                <li>
                  <div>
                    <h4 className="font-bold">Lorem ipsum dolor sit.</h4>
                    <small>Lorem ipsum dolor sit amet.</small>
                  </div>
                </li>
                <li>
                  <div>
                    <h4 className="font-bold">Lorem ipsum dolor sit.</h4>
                    <small>Lorem ipsum dolor sit amet.</small>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verifiable;
