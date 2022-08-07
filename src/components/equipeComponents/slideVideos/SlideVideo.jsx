import { useState } from 'react';
import './SlideVideo.css'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Apresentacao from './Apresentacao';
import aline from '../../../img/aline.png';
import felype from '../../../img/felype.png';
import carlos from '../../../img/carlos.png';
import lucca from '../../../img/lucca.png';
import leo from '../../../img/leonardo.png';
import gabi from '../../../img/gabi.png';
import rapha from '../../../img/rapha.png';



function SlideVideo(){

    const [scrollSlide, setScrollSlide] = useState(0);
    const alineMovie = <iframe width="950" height="450" src="https://www.youtube.com/embed/K6WfjaulJkE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    const felypeMovie = <iframe width="950" height="450" src="https://www.youtube.com/embed/Xe6UGSAaImM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    const carlosMovie = <iframe width="950" height="450" src="https://www.youtube.com/embed/Yb66BZ09-wk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    const luccaMovie = <iframe width="950" height="450" src="https://www.youtube.com/embed/u93jloDOpTc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    const leoMovie = <iframe width="950" height="450" src="https://www.youtube.com/embed/6zcrcYnHTQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    const gabiMovie = <iframe width="950" height="450" src="https://www.youtube.com/embed/l9Raws5fcS4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    const raphaMovie = <iframe width="950" height="450" src="https://www.youtube.com/embed/CYpq0PNAJcM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


    const handleLeftArrow = () => {
        let scrollX = scrollSlide + 2340;
        
        if(scrollX > 0 ){
            scrollX = 0
        }

        setScrollSlide(scrollX);
    }

    const handleRightArrow = () => {
        let scrollX = scrollSlide - 2340;
       
        if(scrollX < -14040) {
            scrollX = -14040
        }

        setScrollSlide(scrollX)
    }




    return(
        <div>
            <div className='contVideo'>
                <div className='slideVideos'>
                  <div className='slideItems' style={{
                    marginLeft: scrollSlide,
                    width: 1170
                  }}>
                        <Apresentacao 
                            hard="Front End"
                            nome="Aline Gallo "
                            funcao="DB Developer"
                            avatar={aline}
                            movie={alineMovie}
                            soft="Apresentação"
                            textOne="Essa é uma soft skill que também é um subtópico da capacidade de comunicação. No caso, consiste na habilidade de apresentar adequadamente o fruto de seu trabalho, suas conclusões e recomendações, explicar conceitos."
                            textTwo="De pouco adianta deter o conhecimento do universo da programação ou do banco de dados, se esse conteúdo fica trancado dentro da sua caixa craniana."
                            />

                            <Apresentacao 
                            hard="Front End"
                            nome="Felype Nunes"
                            funcao="Dev IA"
                            avatar={felype}
                            movie={felypeMovie}
                            soft="Comunicação"
                            textOne="Para melhor desenvolver a comunicação, procure entender a pessoa que está do outro lado da 
                            conversa e sutilmente molde uma mensagem para que seja absorvida da melhor maneira por ela."
                            textTwo="É importante desenvolver, também, a escuta e respeitar o espaço de fala do outro, prestando atenção 
                            e absorvendo o que é dito antes de pensar diretamente no que você vai responder."
                            />

                            <Apresentacao 
                            hard="Back End"
                            nome="Carlos Gabriel"
                            funcao="Dev Backend"
                            avatar={carlos}
                            movie={carlosMovie}
                            soft="Flexibilidade"
                            textOne="Cada vez mais o mercado exige que os profissionais saibam se reinventar. Novas demandas surgem a cada dia, tanto para futuros desafios quanto para cargos já em vigência. "
                            textTwo="Para ser um talento de destaque, é necessário mostrar essa versatilidade tanto no currículo quanto na sua rotina empresarial e emocional."
                            />

                            <Apresentacao 
                            hard="Front End"
                            nome="Lucca Macedo"
                            funcao="Dev Backend"
                            avatar={lucca}
                            movie={luccaMovie}
                            soft="Criatividade"
                            textOne="Criatividade é algo que não se aprende em curso ou faculdade, mas que você precisa. Pensar fora da caixa exige conhecimento, obviamente. É preciso conhecer as regras para poder quebrá-las e ir além. "
                            textTwo="Mas também é preciso coragem e admitir que deixar a imaginação fluir pode ser uma solução mais rápida que uma visitinha ao StackOverflow."
                            />

                            <Apresentacao 
                            hard="Back End"
                            nome="Leonardo Lima"
                            funcao="Dev Jr"
                            avatar={leo}
                            movie={leoMovie}
                            soft="Olhar crítico"
                            textOne="Certamente, você já ouviu falar nesse termo, mas pode não ter certeza sobre o que é pensamento crítico de fato. Existem várias definições mas, na maioria das vezes, envolve o processo de analisar os fatos para formar um julgamento."
                            textTwo="Ser capaz de tomar decisões assertivas com base em uma abordagem objetiva, precisa e justa é uma habilidade valiosa. Seja no meio acadêmico, pessoal ou profissional. Nesse último meio, torna-se ainda mais importante."
                            />

                            <Apresentacao 
                            hard="Banco de dados"
                            nome="Gabriela"
                            funcao="Dev FrontEnd"
                            soft="Organização"
                            avatar={gabi}
                            movie={gabiMovie}
                            textOne="Fundamental para aumento da eficiência e qualidade do trabalho. Ser um profissional organizado faz com que haja economia de tempo, pois as informações são encontradas de forma mais rápida. "
                            textTwo="Além disso, você diminui sua suscetibilidade aos erros relacionados à desatenção. Dessa forma, o profissional passa uma imagem de maior competência, podendo influenciar de maneira positiva os colegas."
                            />

                            <Apresentacao 
                            hard="Segurança da informação"
                            nome="Raphael"
                            funcao="Dev FrontEnd"
                            soft="Segurança"
                            avatar={rapha}
                            movie={raphaMovie}
                            textOne="Possuir fortes instintos de pesquisa e escrita é um ativo inestimável que cada analista de segurança da informação deve ter. Essa habilidade é útil quando os especialistas executam a criação e aplicação de políticas. "
                            textTwo="Networking vai muito além do lado técnico. Esse skill envolve o aproveitamento de suas habilidades sociais e de comunicação para expandir seus contatos profissionais e se conectar, o que é fundamental no desenvolvimento de sua carreira."
                            />
                  </div>
                    
                    
                    
                </div>

                <div className='navgation'>
                    <FaAngleLeft className='iconNavgation' onClick={handleLeftArrow}/>
                    <FaAngleRight className='iconNavgation' onClick={handleRightArrow}/>
                </div>

                
            </div>



        </div>
    )
};

export default SlideVideo