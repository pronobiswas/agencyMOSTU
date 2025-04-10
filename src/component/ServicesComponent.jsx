import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
// import required modules
import { EffectCards } from 'swiper/modules';

const ServicesComponent = () => {
    return (
        <>
            <div id="services" className='py-20'>

                <div className='container mx-auto'>
                    <h2 className='text-4xl text-center mb-8'>we help you gwow with automotion</h2>
                    <div className="service_warper w-full  justify-between">
                       
                        <div className="sevices">
                           
                                <Swiper
                                    effect={'cards'}
                                    grabCursor={true}
                                    modules={[EffectCards]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide><div className='w-60 h-80 bg-amber-400'></div></SwiperSlide>
                                    <SwiperSlide><div className='w-60 h-80 bg-amber-500'></div></SwiperSlide>
                                    <SwiperSlide><div className='w-60 h-80 bg-amber-600'></div></SwiperSlide>
                                    <SwiperSlide><div className='w-60 h-80 bg-amber-700'></div></SwiperSlide>
                                    
                                </Swiper>
                           
                        </div>

                    </div>

                    
                </div>
            </div>
        </>
    )
}

export default ServicesComponent