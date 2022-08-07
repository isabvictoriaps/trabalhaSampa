import './CardContratar.css';
import logo from '../../../img/megaphone.png';
import { FaCheck } from "react-icons/fa";

function CardContratar({tipo, preco, avista, checkItem }) {
    return(
        <div>
            <div className="cardContainer">
                <img className='logoimg' src={logo} />
                <h2>{tipo}</h2>
                <div className='items'>
                    <FaCheck className='checkIcon'/>
                    <p>Vagas de emprego alinhadas com o seu perfil</p>
                </div>

                <div className='items'>
                    <FaCheck className='checkIcon'/>
                    <p>Desenvolvimento pessoal e profissional</p>
                </div>

                <div className='items'>
                    <FaCheck className='checkIcon'/>
                    <p>Cursos para te impulsionar a ir além</p>
                </div>

                <div className='items'>
                    <FaCheck className='checkIcon'/>
                    <p>Mentorias de carreira</p>
                </div>

                <div className='items'>
                    <FaCheck className='checkIcon'/>
                    <p>Acesso a oportunidades extracurriculares</p>
                </div>

                <button type='button' className='btnContratar'>CADASTRE-SE</button>
            </div>
        </div>
    )
};

export default CardContratar; 