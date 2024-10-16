//React-router-dom
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//Home Page
import Home from './pages/main'
//Khow Us Page
import KhowUs from './pages/khowUs';
//Services Page
import Services from './pages/Services';
//Events Page
import Events from './pages/Events';
//News Page
import News from './pages/News';
//PQR Page
import Pqrs from './pages/PQR/Pqrs';
//Info Arsofam
import InfoArso from './pages/InfoArso';
//Gallery
import { GalleryArso } from './pages/gallery';
//Components
import Navbar from './components/navbar';

function App() {

    return (        
        <BrowserRouter>
        <Navbar />        
            <Routes>
                <Route path = '/' element = {<Home />}/>
                <Route path = 'KhowUs' element = {<KhowUs />}/>
                <Route path = 'Services' element = {<Services />} />
                <Route path = 'Events' element = {<Events />} />
                <Route path = 'News' element = {<News />} />
                <Route path = 'PQRS' element = {<Pqrs />} />
                <Route path = 'InfoArso' element = {<InfoArso />}/>
                <Route path = '/GalleryArso' element = {<GalleryArso />}/>
                <Route path = '*' element = {<h1>Not Found</h1>} />            
            </Routes>        
        </BrowserRouter>
    )
}

export default App;