
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import aws from '../assets/swiper/aws.jpg'
import github from '../assets/swiper/github.png'
import skype from '../assets/swiper/skype.png'
import openAI from '../assets/swiper/OpenAI.png'

const SwiperComponent = () => {
    return (
        <>

            <div id='sliderWarpper' className="relative">
                <div id="sliderFirst" className='bg-blue-600 py-10 '>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={6}
                        // centeredSlides={true}
                        freeMode={true}
                        loop={true}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }}
                        speed={2200}
                        modules={[Autoplay, FreeMode]}
                        className="mySwiper"
                    >
                        <SwiperSlide><div className="w-40 h-20 flex items-center">
                            <img src={aws} alt="png" width={100} />
                        </div></SwiperSlide>
                        <SwiperSlide><div className="w-40 h-20 flex items-center">
                            <img src={github} alt="png" width={100} />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide><div className="w-40 h-20 flex items-center">
                            <img src={skype} alt="png" width={100} />
                        </div></SwiperSlide>
                        <SwiperSlide><div className="w-40 h-20 flex items-center">
                            <img src={openAI} alt="png" width={100} />
                        </div></SwiperSlide>
                        <SwiperSlide><div className="w-40 h-20 flex items-center">
                            <img src={aws} alt="png" width={100} />
                        </div></SwiperSlide>
                        <SwiperSlide><div className="w-40 h-20 flex items-center">Slide 6</div></SwiperSlide>
                        <SwiperSlide><div className="w-40 h-20 flex items-center">
                            <img src={openAI} alt="png" width={100} />
                        </div></SwiperSlide>
                        <SwiperSlide><div className="w-40 h-20 flex items-center">
                            <img src={github} alt="png" width={100} />
                        </div></SwiperSlide>
                        <SwiperSlide><div className="w-40 h-20 flex items-center"><img src={skype} alt="png" width={100} /></div></SwiperSlide>
                        <SwiperSlide><div className="w-40 h-20 flex items-center">
                            <img src={openAI} alt="png" width={100} />
                        </div></SwiperSlide>
                        <SwiperSlide><div className="w-40 h-20 flex items-center">
                            <img src={skype} alt="png" width={100} />
                        </div></SwiperSlide>
                        <SwiperSlide><div className="w-40 h-20 flex items-center">
                            <img src={aws} alt="png" width={100} />
                        </div></SwiperSlide>
                        <SwiperSlide><div className="w-40 h-20 flex items-center">
                            <img src={aws} alt="png" width={100} />
                        </div></SwiperSlide>

                    </Swiper>
                </div>
                <div id="sliderSecond" className='bg-gray-600 py-10'>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={6}
                        centeredSlides={true}
                        freeMode={true}
                        loop={true}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }}
                        speed={3000}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><div className="w-40 h-20 flex items-center">
                            <img src={aws} alt="png" width={100} />
                        </div></SwiperSlide>
                        <SwiperSlide><div className="w-40 h-20 flex items-center">
                            <img src={github} alt="png" width={100} />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide><div className="w-40 h-20 flex items-center">
                            <img src={skype} alt="png" width={100} />
                        </div></SwiperSlide>
                        <SwiperSlide><div className="w-40 h-20 flex items-center">
                            <img src={openAI} alt="png" width={100} />
                        </div></SwiperSlide>
                        <SwiperSlide><div className="w-40 h-20 flex items-center">
                            <img src={aws} alt="png" width={100} />
                        </div></SwiperSlide>
                        <SwiperSlide><div className="w-40 h-20 flex items-center">Slide 6</div></SwiperSlide>
                        <SwiperSlide><div className="w-40 h-20 flex items-center">
                            <img src={openAI} alt="png" width={100} />
                        </div></SwiperSlide>
                        <SwiperSlide><div className="w-40 h-20 flex items-center">
                            <img src={github} alt="png" width={100} />
                        </div></SwiperSlide>
                        <SwiperSlide><div className="w-40 h-20 flex items-center"><img src={skype} alt="png" width={100} /></div></SwiperSlide>
                        <SwiperSlide><div className="w-40 h-20 flex items-center">
                            <img src={openAI} alt="png" width={100} />
                        </div></SwiperSlide>
                        <SwiperSlide><div className="w-40 h-20 flex items-center">
                            <img src={skype} alt="png" width={100} />
                        </div></SwiperSlide>
                        <SwiperSlide><div className="w-40 h-20 flex items-center">
                            <img src={aws} alt="png" width={100} />
                        </div></SwiperSlide>
                        <SwiperSlide><div className="w-40 h-20 flex items-center">
                            <img src={aws} alt="png" width={100} />
                        </div></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default SwiperComponent