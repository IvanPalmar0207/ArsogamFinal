//React-hooks
import { useEffect, useState } from "react";
//Images
import bullServices from './static/img/services/bullServices.svg'
import training from './static/img/services/training.svg'
import tecnicAssistance from './static/img/services/tecnicAssistance.svg'
import arrowService from './static/img/services/arrowServices.svg'
//Styles
import './static/styles/services.css'
//Material IU
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import FormTecnicAssis from "../components/formTecnicAssis";
//Icons
import { IoMdClose } from "react-icons/io";
//FramerMotion
import {motion} from 'framer-motion'
import { duration } from "@mui/material";

function Services(){
        
    useEffect(() => {
        document.title = "Servicios"
    })

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    return(
        <section className="servicesSection" id="sectionService">
            <div className="containerImageServices">
                <motion.div
                    initial = {{scale : 0}}
                    animate = {{rotate : 360, scale : 1}}
                    transition={{
                        type : 'spring',
                        stiffness : 450,
                        damping : 90
                    }}
                >
                    <img src = {bullServices} alt = "bullServices" />
                </motion.div>
            </div>

            <div className="containerServices">
                <div className="containerInfoService tecnicAssitance">                                
                    <div>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box className = "containerModal">
                                <div className="containerIcon">
                                    <IoMdClose
                                        className="iconModal"
                                        onClick={handleClose}
                                    />
                                </div>
                                <FormTecnicAssis />                                
                            </Box>
                        </Modal>
                    </div>
                    <div>
                        <motion.div className="motionImage"
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 30,
                                cursor : "pointer"
                            }}
                            whileHover={{ scale: 0.8 }}
                        >
                            <img src={tecnicAssistance} alt="tecnicAssitance" onClick={handleOpen}/>                        
                        </motion.div>
                    </div>
                    <h2>
                        Asistencia Tecnica
                    </h2>
                    <div className="arrowServ">
                        <motion.div
                            initial = {{
                                opacity: 0, scale : 0.5
                            }}
                            animate = {{
                                opacity : 1, scale : 1
                            }}
                            transition={{
                                ease : 'linear',
                                duration : 5,
                                ease : [0, 0.71, 0.2, 1.01],
                                scale : {
                                    type : 'spring',
                                    damping : 5,
                                    stiffness : 100,
                                    restDelta : 0.001
                                }                                
                            }}
                        >
                            <img src = {arrowService} alt="arrowService" />
                        </motion.div>
                    </div>
                </div>

                <div className="containerInfoService">
                    <motion.div
                        style={{
                            width : '100%',
                            borderRadius : 30,
                            cursor : "pointer"
                        }}
                        whileHover={{scale : 0.8}}
                    >
                        <img src={training} alt="trainingSessions" className="imgNro2Ser"/>
                    </motion.div>
                    <h2>
                        Capacitaciones
                    </h2>
                    <div className="arrowServ">
                        <motion.div
                            initial = {{
                                opacity : 0, scale : 0.5
                            }}
                            animate = {{
                                opacity : 1, scale : 1
                            }}
                            transition={{
                                ease : 'linear',
                                duration : 5,
                                ease : [0, 0.71, 0.2, 1.01],
                                scale : {
                                    type : 'spring',
                                    damping : 5,
                                    stiffness : 100,
                                    restDelta : 0.001
                                }
                            }}
                        >
                            <img src = {arrowService} alt="arrowService" />
                        </motion.div>
                    </div>
                </div>
            </div>        
        </section>
        
    )

}

export default Services