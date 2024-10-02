//React-hooks
import { useEffect } from "react";

function Events(){

    useEffect(() => {
        document.title = "Eventos"
    })

    return (
        <div>
            Eventos Ganaderos
        </div>
    )

}

export default Events