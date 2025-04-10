import React from 'react'
import Marquee from "react-fast-marquee";
import aws from '../assets/swiper/aws.jpg'
import github from '../assets/swiper/github.png'
import skype from '../assets/swiper/skype.png'
import openAI from '../assets/swiper/OpenAI.png'

const DualSliderComponent = () => {
    return (
        <>
            <div id="sliderWarpper">
                <div className="sliderOne py-3 bg-blue-600" id='sliderFirst'>
                    <Marquee loop={0} autoFill={true}>
                        <div className=' flex gap-x-12 items-center '>
                            <img src={aws} alt="png" width={100} />
                            <img src={github} alt="png" width={100} />
                            <img src={skype} alt="png" width={100} />
                            <img src={openAI} alt="png" width={100} />
                            <img src={aws} alt="png" width={100} />
                            <img src={github} alt="png" width={100} />
                            <img src={skype} alt="png" width={100} />
                            <img src={openAI} alt="png" width={100} />
                            <img src={aws} alt="png" width={100} />
                            <img src={github} alt="png" width={100} />
                            <img src={skype} alt="png" width={100} />
                            <img src={openAI} alt="png" width={100} />
                        </div>
                    </Marquee>
                </div>
                <div className="sliderTwo py-3 bg-green-900" id='sliderSecond'>
                    <Marquee loop={0} autoFill={true}>
                    <div className=' flex gap-x-12 items-center'>
                            <img src={aws} alt="png" width={100} />
                            <img src={github} alt="png" width={100} />
                            <img src={skype} alt="png" width={100} />
                            <img src={openAI} alt="png" width={100} />
                            <img src={aws} alt="png" width={100} />
                            <img src={github} alt="png" width={100} />
                            <img src={skype} alt="png" width={100} />
                            <img src={openAI} alt="png" width={100} />
                            <img src={aws} alt="png" width={100} />
                            <img src={github} alt="png" width={100} />
                            <img src={skype} alt="png" width={100} />
                            <img src={openAI} alt="png" width={100} />
                        </div>
                    </Marquee>
                </div>
            </div>

        </>
    )
}

export default DualSliderComponent