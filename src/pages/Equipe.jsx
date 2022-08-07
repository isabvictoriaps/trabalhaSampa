import {useState, useEffect} from 'react';
import InicioEquipe from '../components/equipeComponents/inicio/InicioEquipe';
import Navbar from '../components/navbar/NavbarLogin';
import SlideVideo from '../components/equipeComponents/slideVideos/SlideVideo';
import Footer from '../components/footer/Footer';


function Equipe(){
    return (
       <div>
            <NavbarLogin />
            <InicioEquipe />
            <SlideVideo />
            <Footer />
       </div>
    )
};

export default Equipe;