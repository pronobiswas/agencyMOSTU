import React from 'react'
import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  return (
    <>
        <section className="w-full">
          <div className="bg-gray-900 py-20">
            <h2 className="text-white text-center text-2xl font-bold mb-12">
              🚀AI Services We Offer
            </h2>
            <Marquee
              speed={50}
              autoFill={true}
              className="text-white text-lg font-semibold"
            >
              <div className="flex items-center space-x-12">
                <span className="px-6 py-2 bg-blue-600 rounded-lg">
                  🤖 Chatbots
                </span>
                <span className="px-6 py-2 bg-green-600 rounded-lg">
                  📊 AI Analytics
                </span>
                <span className="px-6 py-2 bg-purple-600 rounded-lg">
                  🎨 AI Art Generation
                </span>
                <span className="px-6 py-2 bg-red-600 rounded-lg">
                  🛒 AI in E-commerce
                </span>
                <span className="px-6 py-2 bg-yellow-600 rounded-lg">
                  📝 AI Content Writing
                </span>
                <span className="px-6 py-2 bg-pink-600 rounded-lg">
                  🔍 AI SEO Optimization
                </span>
                <span className="px-6 py-2 bg-teal-600 rounded-lg">
                  🎵 AI Music Creation
                </span>
              </div>
            </Marquee>
          </div>
        </section>
    </>
  )
}

export default MarqueeComponent