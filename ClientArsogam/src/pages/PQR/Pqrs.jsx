//React-Hooks
import { useEffect } from "react";
//Framer motion
import { motion } from "framer-motion";
//Styles
import '../static/styles/pqrs.css'
//Images
import bullPqrs from '../static/img/pqrs/pqrsBull.svg'
//Form PQR
import FormPQR from "../../components/formPQR";

function Pqrs(){

    useEffect(() => {
        document.title = "PQRS"
    })

    return(
        <section className="containerPQRS">

            <div className="containerBullPqrs">
                <motion.div
                    initial = {{scale : 0}}                  
                    animate = {{rotate : 360, scale : 1}}
                    transition={{
                        type : 'spring',
                        stiffness : 450,
                        damping : 90
                    }}
                >                    
                    <img src={bullPqrs} alt="BullPqrs" />
                </motion.div>
            </div>

            <div className="containerInfoPQRS">
                <div className="containerTextPQRS">
                    <p>
                        ¿Qué es una petición?
                        <br />
                        Es el requerimiento que se realiza en nombre propio, apoderado, representante o entidad para solicitar el reconocimiento de un derecho, la prestación de un servicio, pedir información, documentos o copias, formular consultas y obtener respuesta oportuna y de fondo.
                        <br />
                        <br />
                        ¿Qué es una queja?
                        <br />
                        Es la manifestación de desacuerdo, insatisfacción o descontento al recibir una atención inadecuada por parte de un servidor público.
                        <br />
                        <br />
                        ¿Qué es un reclamo?
                        <br />
                        Es la exigencia ante la ausencia o indebida prestación de un servicio o la falta de atención de una petición.
                        <br />
                        <br />
                        ¿Qué es una denuncia?
                        <br />
                        Es dar a conocer un acto sospechoso, posible hecho de corrupción o riesgo de fraude que esté realizando una persona a nombre de la entidad o dentro de ella.
                        <br />
                        <br />
                        ¿Qué es una sugerencia?
                        <br />
                        Es la manifestación de una propuesta para plantear un cambio o mejora de un servicio, trámite o proceso.
                        <br />
                        <br />
                        ¿Qué es una felicitación o agradecimiento?
                        <br />
                        <br />
                        Es la manifestación positiva o de gratitud frente al servicio o gestión de la entidad.
                    </p>
                </div>
                <div>
                    <FormPQR />
                </div>
            </div>

        </section>
    )

}

export default Pqrs