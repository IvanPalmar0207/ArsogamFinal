//React-hooks
import { useEffect } from "react";
//Framer-motion
import { motion } from "framer-motion";
//Image
import bullNews from './static/img/news/bullNews.svg'
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
                
                    <h2>
                        FOTOGRAFIA DE LA
                        <br />
                        NOTICIA
                    </h2>
                </div>
                <div className="containerTextNews">
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
                        quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo 
                        consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
                        consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                        Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                        Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut 
                    </p>
                </div>
            </div>

        </section>
    )

}

export default News