import React from "react";

const OurServices = () => {
  return (
    <>
      <section>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8">Our Services</h2>
          <div className="w-full grid grid-cols-3 gap-4 lg:gap-8">
            <div className="serviceWraper">
              <h4 className="serviceTitle">🤖 AI Consulting & Strategy</h4>
              <p>
                Develop a roadmap to AI adoption tailored to your business
                goals.
              </p>
            </div>
            <div className="serviceWraper">
              <h4 className="serviceTitle">
                💬 Chatbot & Virtual Assistant Development
              </h4>
              <p>
                Enhance customer service with AI-powered bots that understand
                and respond in real-time.
              </p>
            </div>
            <div className="serviceWraper">
              <h4 className="serviceTitle">📊 Predictive Analytics</h4>
              <p>
                Turn data into insights. Forecast trends, optimize performance,
                and make smarter decisions.
              </p>
            </div>
            <div className="serviceWraper">
              <h4 className="serviceTitle">
                🧠 Machine Learning Model Development
              </h4>
              <p>
                Custom ML models for image recognition, NLP, classification, and
                more.
              </p>
            </div>
            <div className="serviceWraper">
              <h4 className="serviceTitle">🔍 AI for Business Intelligence</h4>
              <p>
                Integrate AI into your BI tools for deeper insights and faster
                analysis.
              </p>
            </div>
            <div className="serviceWraper">
              <h4 className="serviceTitle">🔐 AI Security Solutions</h4>
              <p>
                Protect your data and systems with intelligent anomaly detection
                and threat analysis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
