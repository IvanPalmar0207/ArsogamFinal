//Styles
import './static/styles/gallery.css'
//Images
import galleryBull from './static/img/gallery/galleryBull.png'
import gallery1 from './static/img/gallery/gallery1.jpeg'
import gallery2 from './static/img/gallery/gallery2.jpeg'
import gallery3 from './static/img/gallery/gallery3.jpeg'
import gallery4 from './static/img/gallery/gallery4.jpeg'
import gallery5 from './static/img/gallery/gallery5.jpeg'
import gallery6 from './static/img/gallery/gallery6.jpeg'
import gallery7 from './static/img/gallery/gallery7.jpeg'
import gallery8 from './static/img/gallery/gallery8.jpeg'
import gallery9 from './static/img/gallery/gallery9.jpeg'
import gallery10 from './static/img/gallery/gallery10.jpeg'
import gallery11 from './static/img/gallery/gallery11.jpeg'
import gallery12 from './static/img/gallery/gallery12.jpeg'
//Framer-motion
import { motion } from "framer-motion"
//Components
import { ContactFloat } from "../components/contactFloat"
import { GalleryComponent } from '../components/galleryComponent'
import { useState } from 'react'
import ModalImg from '../components/ModalImg'

export function GalleryArso(){

    const galleryList = [
        {
            id : 1,
            url : gallery1,
            alt : 'image1'
        },
        {
            id : 2,
            url : gallery2,
            alt : 'image2'
        },
        {
            id : 3,
            url : gallery3,
            alt : 'image3'
        },
        {
            id : 4,
            url : gallery4,
            alt : 'image4'
        },
        {
            id : 5,
            url : gallery5,
            alt : 'image5'
        },
        {
            id : 6,
            url : gallery6,
            alt : 'image6'
        },
        {
            id : 7,
            url : gallery7,
            alt : 'image7'
        },
        {
            id : 8,
            url : gallery8,
            alt : 'image8'
        },
        {
            id : 9,
            url : gallery9,
            alt : 'image9'
        },
        {
            id : 10,
            url : gallery10,
            alt : 'image10'
        },
        {
            id : 11,
            url : gallery11,
            alt : 'image11'
        },
        {
            id : 12,
            url : gallery12,
            alt : 'image12'
        }
    ]

    const [isModalOpen, setModalOpen] = useState(false)

    const toggleModal = () => {
        setModalOpen(!isModalOpen)
    }

    return(
        <section className="sectionGallery">
            <ContactFloat />

            <div className="containerGalleryLogo">
                <motion.div
                    initial = {{scale : 0}}                
                    animate = {{rotate : 360, scale : 1}}
                    transition={{
                        type : 'spring',
                        stiffness : 450,
                        damping : 90
                    }}
                >   
                    <img src={galleryBull} alt="galleryBull" />
                </motion.div>
            </div>

            <div className='containerGallery'>
                    {
                        galleryList.map((gallery) => {
                            return(
                                <>                                
                                <div onClick={toggleModal}>                                
                                {isModalOpen && <ModalImg key={gallery.id} img={gallery.url} onRequestClose={toggleModal}/>}
                                <GalleryComponent 
                                        key={gallery.id}
                                        url={gallery.url}
                                        alt={gallery.alt}                                    
                                    />   
                                </div>                             
                                </>
                            )
                        })
                    }
            </div>

        </section>
    )
}