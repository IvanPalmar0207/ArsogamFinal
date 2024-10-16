import { useEffect } from "react"

const ModalImg = ({onRequestClose, img}) => {
    useEffect(() => {
        function onKeyDown(event){
            if(event.keyCode === 27){
                onRequestClose()
            }
        }

        //Prevent the scrolling
        document.body.style.overflow = 'hidden'
        document.addEventListener('keydown', onKeyDown)

        //Clear things up unmounting this component
        return () => {
            document.body.style.overflow = 'visible'
            document.removeEventListener('keydown', onKeyDown)
        }

    })

    return(
        <div className="containerModalImg">
        <div className="containerMainImg">                    
            <div className="containerModalImg">
                <img src={img} alt="imgModal" />
            </div>

            <div className="containerButtonCloseImg">
                <button className="buttonModalInf" type="button" onClick={onRequestClose}>
                    CERRAR
                </button>
            </div>
        </div>
    </div>
    )
}

export default ModalImg