import './Cursos.css'
import fireIcon from '../../../img/3DFire.png' ;
import CardCurso from './CardCursos';
import ReactLogo from '../../../img/reactlogo.png';
import reactBlue from '../../../img/reactBlue.png';
import reactGreen from '../../../img/reactgreen.png';

function Cursos(){
    return(
        <div className='contCursosGeral' id='cursos'>
            <div className='containerCursos'>
                <div className='boxTituloCursos'>
                    <div className='tituloSecaoCursos'> _Categoria_de_Cursos_ </div>
                    <img src={fireIcon} alt="Imagem 3D de um emoji de fogo" className='iconFire'/> 
                </div>
            </div>
            <div className='containerListaCurso'>
                <div className='boxListagem'>
                    
                    <h3 className='tituloListas'> TECNOLOGIA </h3>

                    <div className='carrosselCursos'>
                        <CardCurso Categoria="FrontEnd" 
                        logotipo={ReactLogo}
                        NomeCurso="<Desenvolvimento/>" 
                        Descricao="Cursos voltados ao desenvolvimento back-end e front-end para você alavancar suas chances no mundinho dos códigos!" />

                        <CardCurso Categoria="FrontEnd" 
                        logotipo={ReactLogo}
                        NomeCurso="<Devops/>" 
                        Descricao="Os melhores e mais relevantes conteúdos do mundo de DevOps, sempre focando em exemplos práticos e situações reais. " />

                        
                        <CardCurso Categoria="FrontEnd" 
                        logotipo={ReactLogo}
                        NomeCurso="<UX UI Design/>" 
                        Descricao="Indicamos conteúdos educacionais do universo UX/UI para que você aprenda ao máximo sobre a interface e a experiencia do usuário. " />

                        <CardCurso Categoria="FrontEnd" 
                        logotipo={ReactLogo}
                        NomeCurso="<Data Science/>" 
                        Descricao="Oferecemos indicações de cursos incríveis para que você se prepare para trabalhe com dados e se destaque no mercado de trabalho. " />
                        
                    </div>


                </div>

                <div className='boxListagem'>
                    <h3 className='tituloListas'> SOFT-SKILLS </h3>
                    
                    <div className='carrosselCursos'>
                        <CardCurso Categoria="BackEnd" 
                        logotipo={reactGreen}
                        NomeCurso="Comunicação" 
                        Descricao="HTML e CSS são linguagens fundamentais de desenvolvento de interfaces para a WEB. Sendo uma ótima forma de se introduzir no mundo da programação. " />

                        <CardCurso Categoria="BackEnd" 
                        logotipo={reactGreen}
                        NomeCurso="Autoconhecimento" 
                        Descricao="HTML e CSS são linguagens fundamentais de desenvolvento de interfaces para a WEB. Sendo uma ótima forma de se introduzir no mundo da programação.  " />

                        
                        <CardCurso Categoria="BackEnd" 
                        logotipo={reactGreen}
                        NomeCurso="Organização" 
                        Descricao="HTML e CSS são linguagens fundamentais de desenvolvento de interfaces para a WEB. Sendo uma ótima forma de se introduzir no mundo da programação.  " />

                        <CardCurso Categoria="BackEnd" 
                        logotipo={reactGreen}
                        NomeCurso="Resolução de problemas" 
                        Descricao="HTML e CSS são linguagens fundamentais de desenvolvento de interfaces para a WEB. Sendo uma ótima forma de se introduzir no mundo da programação.  " />
                        
                    </div>
                </div>

            </div>
            <div className='boxListagem infraCont'>
                    <h3 className='tituloListas'>MERCADO DE TRABALHO </h3>
                    <div className='carrosselCursos'>
                        <CardCurso Categoria="infra" 
                        logotipo={reactBlue}
                        NomeCurso="Entrevistas" 
                        Descricao="HTML e CSS são linguagens fundamentais de desenvolvento de interfaces para a WEB. Sendo uma ótima forma de se introduzir no mundo da programação. " />

                        <CardCurso Categoria="infra" 
                        logotipo={reactBlue}
                        NomeCurso="Currículo" 
                        Descricao="HTML e CSS são linguagens fundamentais de desenvolvento de interfaces para a WEB. Sendo uma ótima forma de se introduzir no mundo da programação.  " />

                        
                        <CardCurso Categoria="infra" 
                        logotipo={reactBlue}
                        NomeCurso="Dinâmica em grupo" 
                        Descricao="HTML e CSS são linguagens fundamentais de desenvolvento de interfaces para a WEB. Sendo uma ótima forma de se introduzir no mundo da programação.  " />

                        <CardCurso Categoria="infra" 
                        logotipo={reactBlue}
                        NomeCurso="Testes de lógica" 
                        Descricao="HTML e CSS são linguagens fundamentais de desenvolvento de interfaces para a WEB. Sendo uma ótima forma de se introduzir no mundo da programação.  " />
                        
                    </div>
                </div>
        </div>
    )
}

export default Cursos