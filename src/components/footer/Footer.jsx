import './Footer.css';
import logo from '../../img/megafone.png';

function Footer(){
    return(
        <footer className="footer">

            <div className='footerCopy'>
                <div className="logoFooter">
                    <div className="logoImg">
                        <img src={logo} />
                    </div>
                    <p>&copy; 2022 | TraballhaSampa - todos os direitos reservados</p>
                </div>


            <div className="lang">
                    <select name="lang">
                        <option value="portugues">Português</option>
                        <option value="ingles">English</option>
                    </select>
            </div>

            </div>

            <div className="footerLinks">
            <div className="footerInfo">
                <p>Informações sobre a TrabalhaSampa</p>

                <ul className="footerLista">
                    <li><a href="#">Quem somos nós</a></li>
                    <li><a href="#">Contatos</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">LGPD</a></li>
                    <li><a href="#">Termos de Uso</a></li>
                    <li><a href="#">Política de Privacidade</a></li>
                    <li><a href="#">Parcerias e instituições</a></li>
                </ul>
            </div>


            <div className="footerFreelas">
                <p>Nossos cursos</p>
                <ul className="footerLista">
                    <li><a href="#">Design</a></li>
                    <li><a href="#">Comunicação</a></li>
                    <li><a href="#">Marketing e vendas</a></li>
                    <li><a href="#">Programadores</a></li>
                </ul>
            </div>


            <div className="footerParcerias">
                <p>Parcerias</p>
                <ul className="footerLista">
                    <li><a href="#">Empresas parceiras</a></li>
                    <li><a href="#">instituições parceiras</a></li>
                    <li><a href="#">Torne-se uma empresa parceira</a></li>
                    <li><a href="#">Benefícios</a></li>
                </ul>
            </div>


            <div className="footerAcessibilidade">
                <p>Acessibilidade</p>
                <ul className="footerLista">
                    <li><a href="#">Leitores da tela</a></li>
                    <li><a href="#">Aumento de fonte e contraste</a></li>
                    <li><a href="#">Cores para Daltonicos</a></li>
                    <li><a href="#">Documentação da Acessibilidade</a></li>
                </ul>
            </div>
        </div>

        </footer>
    )
};

export default Footer;