//React-hooks
import { useEffect } from "react";
//Framer-motion
import { motion } from "framer-motion";
//Image
import bullNews from './static/img/news/bullNews.png'
import imageNews from './static/img/news/imageNews.svg'
//Styles
import './static/styles/news.css'

function News(){

    useEffect(() => {
        document.title = "Noticias"
    })

    return(
        <section className="containerNewsSection">
            <div className="bullNews">
                <motion.div
                    initial = {{scale : 0}}
                    animate = {{rotate : 360, scale : 1}}
                    transition= {{
                        type : 'spring',
                        stiffness : 450,
                        damping : 90
                    }}
                >
                    <img src={bullNews} alt="newsBull" />
                </motion.div>
            </div>

            <div className="containerTitleNew">
                <h4>
                IMPUESTO A GASES DE VACAS: 
                <br />
                UNA RESPUESTA CLIMÁTICA CON RIESGOS PARA LA GANADERÍA 
                </h4>
            </div>

            <div className="containerImgTextNew">
                <div className="containerImageNews">
                    <motion.div
                        style={{
                            borderRadius : 30,
                            cursor : "pointer"                    
                        }}

                        whileHover={{
                            scale : 0.8
                        }}
                    >                    
                        <img src={imageNews} alt="newsPicture" />
                    </motion.div>        
                </div>
                <div className="containerTextNews">
                    <textarea disabled rows={18}>
                        El impuesto al metano que Dinamarca propone gravar sobre las emisiones 
                        de su ganado ha despertado un debate global. La idea de imponer una tasa 
                        por cada tonelada de metano que producen las vacas no es trivial. 
                        Este gas, aunque menos abundante que el CO₂, tiene un potencial de 
                        calentamiento global 28 veces mayor en un periodo de 100 años. 
                        Pero ¿cómo afectaría esta iniciativa a las empresas ganaderas en Colombia, 
                        especialmente en términos de rentabilidad? 
                        &#13;&#10;
                        &#13;&#10;Impacto financiero sobre la rentabilidad de las empresas
                        Las empresas ganaderas, especialmente en Colombia, ya operan en un 
                        entorno donde los márgenes de ganancia no siempre son altos. 
                        La implementación de un impuesto similar al propuesto en Dinamarca 
                        implicaría un costo adicional por cada vaca, alrededor de 100 euros anuales
                        en el caso danés. En un país con grandes desigualdades rurales, un impuesto 
                        de este tipo podría aumentar la carga sobre los pequeños productores, 
                        quienes podrían carecer de los recursos para adoptar tecnologías de 
                        reducción de emisiones. 
                        &#13;&#10;
                        &#13;&#10;Costos de producción en aumento. Los costos de producción se verían 
                        directamente impactados. En un sector donde muchas empresas 
                        colombianas aún operan bajo modelos extensivos, añadir un costo adicional 
                        por las emisiones de metano sería un golpe duro. En comparación con otros 
                        sectores, la ganadería ya enfrenta altos costos por la falta de modernización, 
                        infraestructura deficiente y la volatilidad de los precios internacionales. 
                        Este impuesto, sin una estrategia paralela para mejorar la eficiencia, podría 
                        reducir los márgenes de ganancia hasta el punto de hacer inviables a algunas 
                        empresas.
                        &#13;&#10;
                        &#13;&#10;Reducción de la competitividad. A nivel internacional, Colombia compite en 
                        mercados donde los productos de origen animal deben cumplir con 
                        estándares crecientes de sostenibilidad. Aunque los países europeos y algunos 
                        mercados asiáticos exigen prácticas ganaderas sostenibles, imponer un i
                        mpuesto de metano en Colombia sin que otros países de la región adopten 
                        medidas similares podría dejar a los productores colombianos en desventaja. 
                        &#13;&#10;
                        &#13;&#10;La carne colombiana se encarecería frente a competidores internacionales, 
                        afectando la posición del país en el mercado​.
                        Impacto en las pequeñas empresas. Las pequeñas y medianas empresas 
                        ganaderas, que constituyen una parte significativa del sector agropecuario 
                        en Colombia, serían las más afectadas. Estas empresas suelen operar con escaso 
                        acceso a tecnologías que les permitan reducir sus emisiones. Los costos 
                        adicionales derivados de un impuesto sobre el metano pondrían en riesgo su 
                        viabilidad financiera, llevándolas a reducir sus operaciones o, en el peor de los 
                        casos, a cerrar.
                        &#13;&#10;
                        &#13;&#10;Rentabilidad a largo plazo: la otra cara de la moneda
                        A pesar de los costos iniciales, hay argumentos que sugieren que este tipo de 
                        impuestos podrían tener beneficios a largo plazo para las empresas ganaderas. 
                        Un estudio realizado por Fedegan sugiere que los sistemas silvopastoriles que 
                        combinan la ganadería con la reforestación podrían reducir las emisiones hasta 
                        en un 30%​.
                        &#13;&#10;
                        &#13;&#10;Innovación tecnológica y mejora de la eficiencia. Países como Dinamarca y Suiza 
                        ya están invirtiendo en tecnologías que reducen las emisiones de metano en el 
                        ganado. Innovaciones como los aditivos alimenticios a base de algas han demostrado 
                        reducir hasta en un 80% las emisiones. En Colombia, la adopción de estas tecnologías, 
                        aunque costosa al principio, podría mejorar significativamente la eficiencia de las 
                        empresas a largo plazo, reduciendo los costos operativos y mejorando la productividad. 
                        Acceso a nuevos mercados. Los consumidores globales, especialmente en Europa, están 
                        demandando productos cada vez más sostenibles. Un sector ganadero colombiano que 
                        adopte medidas para reducir sus emisiones podría posicionarse favorablemente en estos 
                        mercados. Esto podría traducirse en mejores precios de exportación y acceso a nichos de 
                        mercado dispuestos a pagar más por productos sostenibles.
                        Financiamiento climático. Las empresas que adopten medidas para reducir sus emisiones 
                        podrían acceder a fondos internacionales destinados al financiamiento climático. Instituciones 
                        como el Banco Mundial y el Fondo Verde para el Clima ofrecen recursos para la adaptación y 
                        mitigación del cambio climático. 
                        &#13;&#10;
                        &#13;&#10;Colombia y el cambio climático: una urgencia inevitable
                        El cambio climático no es una amenaza invisible para Colombia, sus efectos ya se están 
                        sintiendo en todo el país, basta mirar el caso de Bogotá. Las sequías, inundaciones y alteraciones 
                        en los patrones de lluvia están afectando la productividad agropecuaria. La agricultura y la 
                        ganadería representan el 38% de las emisiones de gases de efecto invernadero del país, siendo 
                        el metano una de las principales fuentes​. Ignorar esta realidad solo exacerbará los problemas 
                        climáticos a futuro, afectando la producción de alimentos, la seguridad hídrica y, por ende, l
                        a estabilidad económica.
                        &#13;&#10;
                        &#13;&#10;Adoptar políticas que reduzcan las emisiones del sector ganadero podría posicionar al país 
                        como un líder regional en sostenibilidad. Sin embargo, estas políticas deben estar acompañadas 
                        de incentivos financieros y apoyo técnico para evitar la caída en la rentabilidad de las empresas.
                        &#13;&#10;
                        &#13;&#10;En conclusión, imponer un impuesto al metano de las vacas, al estilo danés, en Colombia tendría 
                        un impacto financiero significativo, especialmente para las pequeñas empresas como ya lo 
                        demostró el caso de Nueva Zelanda. El desafío es implementar estas medidas de manera gradual 
                        y acompañarlas de incentivos claros para que las empresas puedan adaptarse sin comprometer 
                        su rentabilidad. Si se gestiona adecuadamente, no tendríamos que esperar que un impuesto sobre 
                        las emisiones de metano sea el catalizador que el sector necesita para transformarse en un modelo 
                        sostenible y rentable.
                    </textarea>
                </div>
            </div>

        </section>
    )

}

export default News