import React from 'react'
import { ImCancelCircle } from 'react-icons/im'
import { FaGithubAlt } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const MenuComponent = () => {
  return (
    <>
    <section id="menuComponent" className='w-full container'>
        {/* =======menu header======= */}
        <div className="menuheader w-full flex items-center justify-between border py-5">
            <div className="logo text-4xl font-semibold">logo</div>
            <div className='flex items-center gap-4'>
                <span>Let's talk</span>
                <span><ImCancelCircle /></span>
            </div>
        </div>
        {/* =========menu warpper============ */}
        <div className="menuWarpper border pt-12 flex justify-between ">
            <ul className='flex flex-col gap-3  [&>li]:text-3xl [&>li]:font-bold'>
                <li>Home</li>
                <li>About Us</li>
                <li>Work</li>
                <li>Services</li>
                <li>Blog</li>
            </ul>
            <div className='flex flex-col justify-end'>
                <a href="#">SomeOne@example.mail</a>
                <p className='text-right'>Dhaka,BAngladesh</p>
                {/* -----social---- */}
                <div >
                    <ul className="flex gap-2 [&>li]:text-xl mt-4">
                        <li><FaGithubAlt /></li>
                        <li><FaSkype /></li>
                        <li><FaLinkedin /></li>
                        <li><FaDiscord /></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default MenuComponent