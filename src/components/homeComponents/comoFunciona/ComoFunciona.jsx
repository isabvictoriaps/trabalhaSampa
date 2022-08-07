import styles from './ComoFunciona.css';
import CardPlanos from './CardContratar';
import InfoCard from './InfoCard';
import vectorReview from '../../../img/vectorPerson.png';
import ReviewUser from './ReviewUser';
import user1 from '../../../img/user1.png';
import user2 from '../../../img/user2.png';
import Footer from '../../footer/Footer';
import projetcs from '../../../img/projetos.png';

function ComoFunciona(){
    return (
        <div>
            <section className="contComoFunciona">

                <h1 className='titleComoFunciona'>Como Funciona a plataforma ?</h1>
                <p className='textoComoFunciona'>Imersão digital! Projetos que você irá desenvolver:  </p>
        

                <div className='contratar'>
                    <CardPlanos 
                     tipo="100% GRATUITO"
                     preco="20"
                     avista="180,00"
                     checkItem="unCheckIcon"
                     />
                </div>

                

            </section>

         

            
        </div>
    )
};

export default ComoFunciona;