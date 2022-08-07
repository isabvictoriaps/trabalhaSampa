import './CardCursos.css'

function CardCurso({Categoria, logotipo, NomeCurso, Descricao}) {
    return(
        <div>
        {Categoria === "FrontEnd" &&(
            <div className="boxCardCurso frontEnd">
                <div>
               <img src={logotipo} alt="Logotipo da linguagem" className='boxIconCurso'/>
               </div>
               <h3 className="subtituloCardCurso"> {NomeCurso}</h3>
               <p className="descricaoCardCurso"> {Descricao}</p>
           </div>
        )}

        {Categoria === "BackEnd" &&(
        <div className="boxCardCurso backEnd">
            <div>
                <img src={logotipo} alt="Logotipo da linguagem" className='boxIconCurso'/>
            </div>
            <h3 className="subtituloCardCurso"> {NomeCurso}</h3>
            <p className="descricaoCardCurso"> {Descricao}</p>
        </div>
        )}

        {Categoria === "infra" &&(
        <div className="boxCardCurso infra">
            <div>
                <img src={logotipo} alt="Logotipo da linguagem" className='boxIconCurso'/>
            </div>
            <h3 className="subtituloCardCurso"> {NomeCurso}</h3>
            <p className="descricaoCardCurso"> {Descricao}</p>
        </div>
        )}

        </div>
    )
}

export default CardCurso