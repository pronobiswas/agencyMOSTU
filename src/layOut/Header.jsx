import React, { useState, useRef } from 'react'
import { NavLink } from "react-router";
import logo1 from '../assets/jviLOGO.jpg'
import { TbMenuDeep } from "react-icons/tb";
import MenuComponent from '../component/MenuComponent';



const header = () => {
  const menuRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [showDown ,setShowdown] = useState(false);

  const handleMenuIcon = () => {
    setShowMenu(true);
    setShowdown(!showDown);
  }
  const handleClose = () => {
    const mainMenu = document.getElementById('mainmenu');
    console.log("hi");
    
    if (showMenu) {
      console.log(menuRef.current);
      menuRef.current.classList.add("reversemenu");
    }
    setTimeout(()=>{
      setShowMenu(false);
    },190)
  }
  return (
    <>
      <header className='shadow-xl'>
        <nav className='container mx-auto w-full flex items-center justify-between md:py-5 relative '>
          <div className="logoTX text-3xl font-bold">
            <img src={logo1} alt="png" className='w-20'/>
          </div>
          <div className=" flex items-center gap-5">
            <div className='navBtn'>
              <span className='btnTxt'>Take a tour</span>
            </div>
            <div className='w-10 h-10 flex items-center justify-center'>

              <span className='cursor-pointer text-[40px] text-blue-800 hover:text-[45px] duration-200 ease-in-out' onClick={handleMenuIcon}><TbMenuDeep /></span>
            </div>
          </div>
        </nav>
      </header>
     {
      showMenu?
          <div id='mainmenu' ref={menuRef}  className={showMenu?"mainmenu":"example2"}>
            
            <div className="flex items-center justify-center">

            <MenuComponent handleClose={handleClose} />
            </div>

          </div>
          :null
     }
        
      {/* className="absolute w-full min-h-screen bg-[#00000062] top-0 left-0" */}
    </>
  )
}

export default header