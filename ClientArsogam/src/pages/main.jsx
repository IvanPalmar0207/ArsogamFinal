//React-Hooks
import { useEffect } from "react"
//Styles
import './static/styles/main.css'
//Components
import CarouselHome from "../components/Slider"
//Images
import imgFarm from './static/img/knowFarm.svg'
//FramerMotion
import { motion } from "framer-motion"

function Home(){

    useEffect(() => {
        document.title = "Pagina Principal"
    })

    return (
        <section className="sectionHome">
            <div className="containerInfoHome">
                <div className="containerTitle">
                    <motion.div
                        whileHover={{
                            scale : 1.1,
                            cursor : "pointer"
                        }}                    
                    >
                        <h1 className="titleMain">ARSOGAM</h1>
                    </motion.div>
                </div>
                <h3 className="subtitleMain">
                    ASOCIASION REGENERATIVA Y SOSTENIBLE
                    <br />
                    DE GANADEROS EN LA AMAZONIA    
                </h3>
                <div className="imageFarm">
                    <img className="subtitleImage" src={imgFarm} alt="farmImage" />
                </div>                
            </div>
            <div className="containerCarrousel">
                <CarouselHome />
            </div>                    
        </section>
    )
}

export default Home