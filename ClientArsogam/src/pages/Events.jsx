//React-hooks
import { useEffect, useState } from "react";
//Styles
import './static/styles/events.css'
//Images
import bullEvents from './static/img/events/bullEvents.png'
import eventsImage1 from './static/img/events/EventsImageNro1.svg'
import eventsImage2 from './static/img/events/EventsImageNro2.png'
import eventsImage3 from './static/img/events/EventsImageNro3.svg'
//Framer motion
import { motion } from "framer-motion";
//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
//Swiper Styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
//Components
import { ContactFloat } from "../components/contactFloat";

function Events(){

    useEffect(() => {
        document.title = "Eventos"
    })

    //Carousel Logic

    useEffect(() => {
        console.log(window.screen.width)
    })

    let withScreen;

    //Slides Logic
    const [slides, setSlides] = useState(0)
    
    const setSlidesPerView = () => {
        setSlides(
            window.innerWidth <= 550 ? 'auto'
            : window.innerWidth <= 720 ? 2
            : window.innerWidth > 900 ? 2 : 0        
        )
    }

    useEffect(() => {
        setSlidesPerView()

        window.addEventListener('resize', setSlidesPerView)

        return() => {
            window.removeEventListener('resize', setSlidesPerView)
        }
    })

    return (
        <section className="sectionEvents">
            <ContactFloat />
            <div className="containerEventsLogo">
                <motion.div
                    initial = {{scale : 0}}
                    animate = {{rotate : 360, scale : 1}}
                    transition={{
                        type : 'spring',
                        stiffness : 450,
                        damping : 90
                    }}
                >
                    <img src={bullEvents} alt="bullEvents" />
                </motion.div>
            </div>
            <div className="containerSwiper">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={slides}                    
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 10,
                        depth: 150,
                        modifier: 2.5,
                    }}                    
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                >
                    <SwiperSlide>
                        <img src={eventsImage1} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={eventsImage2} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={eventsImage3} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={eventsImage3} alt="slide_image" />
                    </SwiperSlide>

                    <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                    </div>
                </Swiper>    
            </div>
        </section>
    )

}

export default Events