import './Navbar.css'
import { Link } from 'react-router-dom' 
import logo from '../../img/megafone.png';

function NavbarLogin(){
    return (
        <div className="boxNavbar">
            <div>
                <Link to="/" className='logoCont'>
                    <img src={logo} />
                    <h2 className="nomeLogotipo">TrabalhaSampa</h2>
                </Link>
            </div>

            <div>
                <ul className='navBarLinks'>
                    <li className='link'><a href='#sobreMomento'>Nosso propósito</a></li>
                    <li className='link'><a href='#cursos'>Vagas</a></li>
                    <Link to="/nossaequipe" className='link'>Capacitação</Link>
                </ul>
            </div>  

            <div>
                <button className='buttonCadastro'>Criar uma conta</button>
                <button className='buttonCadastro'>Entrar</button>
                
            </div>
        </div>
    )
};

export default NavbarLogin;