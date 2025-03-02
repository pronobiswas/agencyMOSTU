import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Header from './layOut/Header.jsx';
import Footer from './layOut/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
    <div className='container mx-auto'>

        <section className='w-full h-96 bg-[#31d30033] py-20'>
          <h1 className='text-6xl font-bold text-center'>This site is under maintaine</h1>
        </section>
        <Footer />
    </div>
        
        
      
    </>
  )
}

export default App
