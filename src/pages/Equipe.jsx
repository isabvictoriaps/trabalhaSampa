import {useState, useEffect} from 'react';
import Navbar from '../components/navbar/Navbar';
import InicioEquipe from '../components/equipeComponents/inicio/InicioEquipe';
import SlideVideo from '../components/equipeComponents/slideVideos/SlideVideo';
import Footer from '../components/footer/Footer';


function Equipe(){
    return (
       <div>
            <Navbar />
            <InicioEquipe />
            <SlideVideo />
            <Footer />
       </div>
    )
};

export default Equipe;