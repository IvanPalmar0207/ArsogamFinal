//React Hooks
import { useEffect, useState } from 'react'
//Styles
import './static/styles/infoArso.css'
//Framer Motion
import { motion } from 'framer-motion'
//Images
import logoInfoArso from './static/img/infoArso/logoInfoArso.svg'
import imageArso from './static/img/infoArso/imgInfoArso.svg'
import visionImage from './static/img/infoArso/visionImage.svg'
import valuesImage from './static/img/infoArso/valuesImage.svg'
import politicsImage from './static/img/infoArso/politicsImage.svg'
//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
//Swiper Styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
//Modal
import Modal from '../components/ModalInfo'
import { modalVision } from '../components/modalText'
import { modalValues } from '../components/modalText'
import { modalPolitics } from '../components/modalText'

function InfoArso(){

   //Carousel Logic

    useEffect(() => {
        document.title = 'Ganaderia Regenerativa'
    })

    let withScreen;

    function withScreenFun () 
    {   
        if(window.screen.width < 900){
            return withScreen = 900
        }
    }
    
    //Vision Modal
    const [isModalOpen1, setModalOpen1] = useState(false)

    const toggleModal1 = () => {
        setModalOpen1(!isModalOpen1)
    }

    //Values Modal
    const [isModalOpen2, setModalOpen2] = useState(false)

    const toggleModal2 = () => {
        setModalOpen2(!isModalOpen2)
    }

    //Politics Modal
    const [isModalOpen3, setModalOpen3] = useState(false)

    const toggleModal3 = () => {
        setModalOpen3(!isModalOpen3)
    }

    //Slides Per Views
    const [slides, setSlides] = useState(0)

    const setSlidesPerView = () => {
        setSlides(
            window.innerWidth <= 520 ? 'auto' :
            window.innerWidth <= 720 ? 2 : 
            window.innerWidth > 900 ? 2 : 0
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
        <section className='sectionInfoArso'>
            <div className='containerInfoLogo'>
                <motion.div
                    initial = {{scale : 0}}
                    animate = {{rotate : 360, scale : 1}}
                    transition={{
                        type : 'spring',
                        stiffness: 450,
                        damping : 90
                    }}
                >
                    <img src={logoInfoArso} alt="infoArsoImage" />
                </motion.div>
            </div>

            <div className="containerSwiper1">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={slides}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 40,
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
                    className="swiper_container1"
                >
                    <SwiperSlide className='swiperSlide'>
                        <img className='imgSwiper' src={imageArso} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='imgSwiper' src={imageArso} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='imgSwiper' src={imageArso} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='imgSwiper' src={imageArso} alt="slide_image" />
                    </SwiperSlide>

                    <div className="slider-controler1">
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

            <div className='containerTextInfo'>
                <div className='containerInfoP'>
                    <p>
                        Somos una ganadería regenerativa dedicada a la explotación
                        de machos de CEBA, implementando el sistema de pastoreo PUAD
                        (pastoreo de ultra alta densidad), restaurando servicios 
                        ecosistémicos, protegiendo fuentes de agua, flora, fauna y 
                        especies nativas en la Amazonia. 
                    </p>
                </div>
                <div className='containerModals'>

                    <div className='imageModal' onClick={toggleModal1}>                        
                        {isModalOpen1 && <Modal text= {modalVision()} onRequestClose={toggleModal1}/>}
                        <img src={visionImage} alt="Info Image" />
                        <h2>    
                            Visión
                        </h2>
                    </div>
                    <div className='imageModal' onClick={toggleModal2}>
                        {isModalOpen2 && <Modal text={modalValues()} onRequestClose={toggleModal2}/>}
                        <img src={valuesImage} alt="Info Image" />
                        <h2>    
                            Valores
                        </h2>
                    </div>
                    <div className='imageModal' onClick={toggleModal3}>
                        {isModalOpen3 && <Modal text={modalPolitics()} onRequestClose={toggleModal3} />}
                        <img src={politicsImage} alt="Info Image" />
                        <h2>
                            Políticas
                        </h2>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default InfoArso