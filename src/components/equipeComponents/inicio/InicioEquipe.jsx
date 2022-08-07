import { useState } from 'react';

import './InicioEquipe.css';
import emoji from '../../../img/emojMao.png';
import CardEmpresa from './CardEmpresa';
import CardValores from './CardValores';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";


function InicioEquipe(){

    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 800) {
            x = 800
        }
        console.log(x);

        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        if(x < -800) {
            x = -800
        }
       
        setScrollX(x)
    }



    return (
        <div>
            <div className='contMomento'>

                <div className='momentoItems'>
                    <div className='momentoText'>
                        <div className='emojiCont'>
                            <img src={emoji} />
                            <p className='equipeText'>Equipe de desenvolvimento</p>
                        </div>
                        <h2 className='title'>Conheça a equipe da Momento</h2>
                        <p className='desc'>
                            Somos uma empresa de Tecnologia que proporciona cursos e mentorias
                            online com valores acessíveis para pessoas de baixa renda
                        </p>
                    </div>

                    <div className='momentoCards'>
                        <CardEmpresa 
                        title="Missão" 
                        text="Nossa missão é desenvolver pessoas que querem aprender a programar, com cursos e mentorias de qualidade e com preços acessíveis."
                        />

                        <CardEmpresa 
                        title="Visão"
                        text="Ser a empresa referência da américa latina em formação de devs, por meio dos cursos e mentorias, com apoio de investidores e parcerias."
                        
                        />
                    </div>

                    <div className='slideValoresCont'>
                        <div className="valoresText">
                             <p>Valores</p>
                        </div>
                        <div className='slideValores'>
                            <div className='slide' style={{
                                marginLeft: scrollX, 
                                width: 1200
                            }}>
                                <CardValores 
                                title="Respeito &#129309;&#127997;"
                                text="O respeito demonstra um sentimento positivo por uma pessoa ou para uma entidade e também ações específicas e condutas representativas daquela estima."
                                />
                                
                                <CardValores 
                                title="Paciência &#129300;"
                                text="A paciência é principalmente baseada na tolerância com os erros alheios ou diante situações e fatos indesejados."
                                />

                                <CardValores 
                                title="Resiliência &#128170;"
                                text="A resiliência é a capacidade do indivíduo lidar com problemas, adaptar-se a mudanças, superar obstáculos ou resistir à pressão de situações adversas."
                                />

                                <CardValores 
                                title="Evolução &#128640;"
                                text="No contexto filosófico, a evolução representa uma alteração progressiva de um ser ou de um sistema em direção a um estado final."
                                />

                                <CardValores 
                                title="Integridade &#11088;"
                                text="Pode designar uma atitude de plenitude moral, sendo a característica de uma pessoa incorruptível."
                                />
                            </div>

                            <div className='controlador'>
                                <FaAngleLeft className='contIcon' onClick={handleLeftArrow}/>
                                <FaAngleRight className='contIcon' onClick={handleRightArrow}/>
                            </div>
                        </div>
                       

                    </div>

                </div>
            </div>

            
        </div>
    )
};

export default InicioEquipe;