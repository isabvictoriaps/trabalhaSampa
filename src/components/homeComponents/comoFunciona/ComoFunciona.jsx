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

         

            <div className='review'>
               <div className='reviewCont'>
                    <div className='personHome'>
                        <img src={vectorReview} />
                    </div>

                    <div className='reviewItems'>
                        <ReviewUser 
                        avatar={user1}
                        text="ótima didática, cursos totalmente atualizados e que ajudam muito o aluno a entender cada conteúdo. Sou aluna da Momento faz poucos meses e já estou amando a plataforma."
                        name="Larissa Bittencourt"
                        cargo="Dev Backend"
                        customMargin={true}
                        />

                        <ReviewUser 
                        avatar={user2}
                        text="Quando comecei o curso, eu não sabia nada de nada, mas depois de um ano estudando quando tinha tempo, consegui um emprego de desenvolvedor frontend. E o grupo privado também foi papel fundamental nisso."
                        name="Caio Sanchez"
                        cargo="Dev Frontend"
                        customMargin={false}
                        />
                    </div>
               </div>
                
            </div>
        </div>
    )
};

export default ComoFunciona;