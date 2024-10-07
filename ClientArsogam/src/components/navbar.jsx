//React-Router-Dom
import { Link } from 'react-router-dom'
//Images
import logoArsogam from './img/logoArsogam.png'
//Style
import './style/navbar.css'

function Navbar(){

    const li = document.querySelectorAll('.linkNav')

    li.forEach(thumb =>{
        thumb.addEventListener('click', function(){
            const active = document.querySelector('.active')
            active.classList.remove('active')
            thumb.classList.add('active')
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