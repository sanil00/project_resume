import React, { useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/swiper.min.css"

import "../styles.css"

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper"
import Stack from "./Stack"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5, faJs, faReact } from "@fortawesome/free-brands-svg-icons"

export default function App() {
    const [stack, setStack] = useState("JavaScript")
    const changeStack = (index) => {
        let name = ""
        switch (index) {
            case 0:
                name = "Javascript"
                break
            case 1:
                name = "Reactjs"
                break
            case 2:
                name = "ReactNative"
                break
            case 3:
                name = "Html/CSS"
                break
            default:
                break
        }
        setStack(name)
    }
    return (
        <>
            <Stack currentClick={stack} />
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                autoplay={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[Autoplay, EffectCoverflow, Pagination]}
                className="mySwiper"
                onSlideChange={(event) => changeStack(event.realIndex)}
            >
                <SwiperSlide>
                    <FontAwesomeIcon className="sliderIcon" icon={faJs} size="3x" name="Javascript" />
                </SwiperSlide>
                <SwiperSlide>
                    <FontAwesomeIcon className="sliderIcon" icon={faReact} size="3x" name="Reactjs" />
                </SwiperSlide>
                <SwiperSlide>
                    <FontAwesomeIcon className="sliderIcon" icon={faReact} size="3x" name="ReactNative" />
                </SwiperSlide>
                <SwiperSlide>
                    <FontAwesomeIcon className="sliderIcon" icon={faHtml5} size="3x" name="Html/CSS" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
