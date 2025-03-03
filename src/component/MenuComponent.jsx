import React from 'react'

import {  FaGithubAlt } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import talk from '../assets/talk.png'
import { LiaAngleDoubleRightSolid } from 'react-icons/lia';

const MenuComponent = () => {
    return (
        <>
            <section id="menuComponent" className='w-full container h-screen '>
                {/* =======menu header======= */}
                <div className="menuheader w-full flex items-center justify-between  py-5">
                    <div className="logo text-6xl font-semibold text-blue-800">JoinVenture.Ai</div>
                    <div className='flex items-center'>
                        <div className="py-2 px-5 bg-blue-700 text-white rounded">Let's talk</div>
                    </div>
                </div>
                {/* =========menu warpper============ */}
                <div className="flex w-full h-[calc(100%-200px)] ">
                    <div className="menuWarpper w-full pt-12 flex justify-between  ">
                        <ul className=' flex flex-col gap-6  [&>li]:text-3xl [&>li]:font-bold md:[&>li]:text-5xl xl:pt-10'>
                            <li className='menuLink flex items-center bg-gray-700'>Home <span className='bg-amber-300 text'><LiaAngleDoubleRightSolid /></span></li>
                            <li className='menuLink'>About Us</li>
                            <li className='menuLink'>Work</li>
                            <li className='menuLink'>Services</li>
                            <li className='menuLink'>Blog</li>
                            <li className='menuLink'>Contact</li>
                        </ul>
                        {/* ======contact section    talkBG===== */}
                        <div className=' flex flex-col  px-26 py-14 lg:px-32 lg:py-20'>
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
            </section>
        </>
    )
}

export default MenuComponent