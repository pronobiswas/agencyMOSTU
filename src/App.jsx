import { useState } from 'react'
import bannerBg1 from './assets/BG3.jpg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Header from './layOut/Header.jsx';
import Footer from './layOut/Footer';
import WaterWave from 'react-water-wave';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="heroSection" className='w-full h-screen  relative'>

        <WaterWave
          imageUrl={bannerBg1}
          style={{ width: '100%', height: '100%', backgroundSize: 'cover' }}
        >
          {({ pause, play }) => (
            <>
              <Header />
              <div className="heroContainer">
                <div className='container mx-auto'>
                  <section className='w-full h-96  py-10'>
                    <h1 className='bannerHeading text-4xl font-bold text-center w-full md:text-6xl lg:text-8xl xl:text-9xl'>DESIGN. DELIVER. COLLABORATE.</h1>
                    <p className='text-center text-blue-950 w-full max-w-80 mx-auto mt-5 md:max-w-[530px] md:text-xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed exercitationem autem nobis fugit maiores dignissimos dolorum hic deleniti. Quaerat, fugit?</p>

                    <div className="bannerBtn text-center mt-6">
                      <button className='bg-blue-300 py-2 px-6 rounded-xl'>Get Started</button>
                    </div>
                  </section>
                </div>
              </div>
            </>
          )}
        </WaterWave>
      </div>

      <div className="w-full h-80 bg-amber-600"></div>
      <Footer />



    </>
  )
}

export default App
