//React-Router-Dom
import { Link } from 'react-router-dom'
//Images
import logoArsogam from './img/logoArsogam.svg'
//Style
import './style/navbar.css'

function Navbar(){

    document.addEventListener('DOMContentLoaded',
        function(){
            const li = document.querySelectorAll('.linkNav')    

            li.forEach(thumb =>{        
                thumb.addEventListener('click', 
                    function(){
                        li.forEach(thumbItem => thumbItem.classList.remove('active'))                                                              
                        thumb.classList.add('active')            
                })
            })
        })

    return(
        <div className='containerNavBar'>
            <div className='containerImage'>
                <img src={logoArsogam} alt="logoArsogam" />
            </div>
            <nav className='navBar'>
                <ul>
                    <li>
                        <Link className='linkNav active' to = '/' >Inicio</Link>
                    </li>
                    <li>
                        <Link className='linkNav' to = 'KhowUs' >Conocenos</Link>
                    </li>
                    <li>
                        <Link className='linkNav' to = 'Events'>Eventos</Link>
                    </li>
                    <li>
                        <Link className='linkNav' to = 'Services'>Servicios</Link>
                    </li>
                    <li>
                        <Link className='linkNav' to = 'News' >Noticias</Link>
                    </li>
                    <li>
                        <Link className='linkNav' to = 'PQRS' >Pqrs</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar