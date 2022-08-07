import './Inicio.css'
import Button from '../../button/Button';
import SobreMomentoInfos from '../../sobreMomentoInfos/SobreMomentoInfos';
import iconAltoFalante from '../../../img/EmojiAltoFalante.png'; 
import iconBeca from '../../../img/EmojiBeca.png';
import {Link} from 'react-router-dom';


function Inicio(){
    return(
        <div>
            <div className='boxInicio'>
                <div className='box'>
                    <div>
                        <div className='emoji'></div>
                        <p className='subtitulo'> Bem Vindo! </p>
                    </div>
                    <h2 className='titulo'>CONSTRUA SEU FUTURO! </h2>
                    <p className='textoApresentacao'> Conquiste seu futuro nesse ambiente incrível que localiza a oportunidade <br/>
ideal para você!</p>
                </div>

                <div>
                    <div className='imagemLado'></div>
                </div>
            </div>

            <div className='EfeitoDeLuz'> </div>
            <div className='boxSobreMomento' id='sobreMomento'>
                <div className='boxSobreTextoPrincipal'>
                    
                    <h2 className='tituloSobre'> Sobre a TrabalhaSampa </h2>
                    <p>Oferecemos uma plataforma para o desenvolvimento pessoal e profissional de jovens de periferia que não possuem acesso a oportunidades. </p>    
                    
                    <Link to="/nossaequipe">
                        <Button 
                        texto="Conheça a nossa equipe" 
                        classe="btnAzul lg"/>
                    </Link>

                </div>
                <div className='infosLado'> 
                    <SobreMomentoInfos  
                    icon={iconBeca}
                    subtitulo="<Vagas alinhadas com seu perfil/>:"
                    texto="Vagas mapeadas e indicadas de acordo com suas skills e interesses. Tudo de forma fácil e acessível."
                    />

                    <SobreMomentoInfos 
                    icon={iconAltoFalante}
                    subtitulo="<Cursos/>:"
                    texto="Quer se destacar nas vagas de emprego mas não tem qualificação para isso? Relaxa! Com a TrabalhaSampa os melhores conteúdos estarão dispostos a você de forma simples. "
                    />

                    {/* componente responsável pelas informações de lado aqui */}
                </div>
            </div>
        </div>
    )
}

export default Inicio;