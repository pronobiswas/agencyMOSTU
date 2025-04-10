import React from 'react'

import { FaGithubAlt } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa6";
import { FaExclamationTriangle, FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import talk from '../assets/talk.png'
import { ImCancelCircle } from "react-icons/im";
import { FiArrowUpRight } from 'react-icons/fi';
import arrow2 from '../assets/arrow3.png'

const MenuComponent = ({ handleClose }) => {

    const handleClosess = () => {
        handleClose();
    }

    return (
        <>
            <section id="menuComponent" className='w-full  min-h-screen px-5 md:px-0'>
                <div className="container mx-auto">
                    {/* =======menu header======= */}
                    <div className="menuheader w-full flex items-center justify-between pb-5 pt-5 lg:pt-20">
                        <div className="menulogo text-2xl md:text-6xl font-semibold text-blue-800">JoinVenture.Ai</div>
                        {/* ~~~~~~lets-talk-btn~~~~~~~ */}
                        <div className='flex items-center gap-x-3 md:gap-8'>
                            <div id='letsTalkbtn' className="py-1 px-3 text-sm lg:py-2 lg:px-5 md:text-xl bg-blue-700 text-white rounded cursor-pointer">Let's talk</div>

                            <div onClick={handleClosess}><span className='text-xl md:text-4xl text-red-600 cursor-pointer '><ImCancelCircle /></span></div>
                        </div>
                    </div>
                    {/* =========menu warpper============ */}
                    <div className="flex w-full  h-[calc(100%-200px)] ">

                        <div className="menuWarpper w-full pt-12 flex flex-col justify-between  ">

                            <ul className=' flex flex-col gap-6  [&>li]:text-3xl [&>li]:font-bold md:[&>li]:text-5xl xl:pt-10'>

                                <li className='menuLink flex items-center '>Home
                                    <div className='menuIconBox w-10 h-10'>
                                        <div className='menuIcon text-white text-5xl'>
                                        <img src={arrow2} alt="png" className='w-7 pt-3 ml-2 mb-[2px]'/>
                                            <FiArrowUpRight className='menuIcons' />
                                        </div>
                                    </div>
                                </li>

                                <li className='menuLink flex items-center'>About Us
                                <div className='menuIconBox w-10 h-10'>
                                        <div className='menuIcon text-white text-5xl'>
                                        <img src={arrow2} alt="png" className='w-7 pt-3 ml-2 mb-[2px]'/>
                                            <FiArrowUpRight className='menuIcons' />
                                        </div>
                                    </div>
                                </li>
                                <li className='menuLink flex items-center'>Work
                                <div className='menuIconBox w-10 h-10'>
                                        <div className='menuIcon text-white text-5xl'>
                                        <img src={arrow2} alt="png" className='w-7 pt-3 ml-2 mb-[2px]'/>
                                            <FiArrowUpRight className='menuIcons' />
                                        </div>
                                    </div>
                                </li>
                                <li className='menuLink flex items-center'>Services
                                <div className='menuIconBox w-10 h-10'>
                                        <div className='menuIcon text-white text-5xl'>
                                        <img src={arrow2} alt="png" className='w-7 pt-3 ml-2 mb-[2px]'/>
                                            <FiArrowUpRight className='menuIcons'  />
                                        </div>
                                    </div>
                                </li>
                                <li className='menuLink flex items-center'>Blog
                                <div className='menuIconBox w-10 h-10'>
                                        <div className='menuIcon text-white text-5xl'>
                                        <img src={arrow2} alt="png" className='w-7 pt-3 ml-2 mb-[2px]'/>
                                            <FiArrowUpRight className='menuIcons'  />
                                        </div>
                                    </div>
                                </li>
                                <li className='menuLink flex items-center gap-1'>Contact
                                <div className='menuIconBox w-10 h-10'>
                                        <div className='menuIcon text-white text-5xl '>
                                            <img src={arrow2} alt="png" className='w-7 pt-3 ml-2 mb-[2px]'/>
                                            <FiArrowUpRight className='menuIcons'  />
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            {/* ======contact section    talkBG===== */}
                            <div className=' flex flex-col text-right'>
                                <a href="#" className='text-xl lg:text-4xl font-bold mb-2'>SomeOne@example.mail</a>
                                <p className='text-right text-xl lg:text-3xl '>Dhaka,BAngladesh</p>
                                {/* -----social---- */}
                                <div >
                                    <ul className="flex gap-2 [&>li]:text-xl [&>li]:text-blue-600 [&>li]:cursor-pointer mt-4 justify-end xl:[&>li]:text-3xl">
                                        <li><FaGithubAlt /></li>
                                        <li><FaSkype /></li>
                                        <li><FaLinkedin /></li>
                                        <li><FaDiscord /></li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default MenuComponent