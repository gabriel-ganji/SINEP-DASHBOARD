import { images } from '../../constants';

export const Home = (props) => {
  
  return (
    <div className='allHome'>
      <header className="header-home">
        <div className="headerhome containerhome">

          <img className="imglogo" src={images.singepLogo} alt="Singep" />

          <nav aria-label="primaria">
            <ul className="header-menu font-1-m">
              <li>
                <a href="/login">Entrar</a>
              </li>
              <li>
                <a href="/register">Registrar</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="introducao-bg">
        <div className="introducao containerhome">
          <div className="introducao-conteudo">
            
            <br /><br />
            <h1 class="font-2-xxl">
              Facilite suas operações <span className="cor-p1">.</span>
            </h1>
            <p className="font-2-1">
              Otimize seus processos e faça seu negocio crescer com o sistema
              inteligente de gerenciamento de produtos alimentícios SINGEP.
            </p>
            <a className="botao1" href="/#aqui">
              Conheça nossa equipe
            </a>
          </div>
          <div className="introducao-imagem">
            <img className="tratarimg1" src={images.market2} alt="" />
          </div>
        </div>
      </main>

      <article className="equipe-lista">
      <h1 className="containerhome font-2-xxl">SINGEP</h1><br/>
      <div className='containerhome singep'>
      <img src={images.foods} className='tratarimg' alt=""></img>
      <p className='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum lobortis neque sed porta. Morbi laoreet ornare vehicula. Suspendisse varius scelerisque justo, sit amet 
        scelerisque arcu. Maecenas ut neque ut diam molestie feugiat. Duis massa nibh, sollicitudin ac ullamcorper a, auctor rhoncus sem. Vestibulum tortor tortor, volutpat in lobortis id,
         cursus vitae ipsum. Curabitur libero massa, ultrices iaculis vehicula eget, placerat eget purus.</p>
      </div><br/><br/><br/> 
      <h1 className="containerhome font-2-xxl">Como funciona ?</h1><br/>
      <div className='containerhome singep'>
      <img src={images.womanBuying} className='tratarimg' alt=""></img>
      <p className='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum lobortis neque sed porta. Morbi laoreet ornare vehicula. Suspendisse varius scelerisque justo, sit amet 
        scelerisque arcu. Maecenas ut neque ut diam molestie feugiat. Duis massa nibh, sollicitudin ac ullamcorper a, auctor rhoncus sem. Vestibulum tortor tortor, volutpat in lobortis id,
         cursus vitae ipsum. Curabitur libero massa, ultrices iaculis vehicula eget, placerat eget purus.</p>
      </div><br/><br/><br/> 
        <h1 className="containerhome font-2-xxl" id="aqui">Nosso time e composto</h1><br/><br/>
        <ul className="imagenstratamento">
          <li className='imagemEquipe'>
            <a href="https://nasa.com">
              <img id="personTeam" src={images.amaro} alt="Amaro" />
              <h4>Amaro Neto</h4><br />
              <p>Aluno de Engenharia da Computação 10° semestre. Responsável por escrever todos os artigos.</p>
            </a>
          </li>

          <li className='imagemEquipe'>
            <a href="https://google.com">
              <img id="personTeam" src={images.antonio} alt="Antonio" />
              <h4>Antônio Rodrigues</h4><br/>
              <p>Aluno de Engenharia da Computação 8° semestre. Responsável pelo Frontend, utilizou o framework ReactJS.</p>
            </a>
          </li>

          <li className='imagemEquipe'>
            <a href="https://www.linkedin.com/in/gabriel-rodrigues-fernandes-4824011b7/" target="_blank" rel="noreferrer">
              <img id="personTeam" src={images.gabriel} alt="Gabriel" />
              <h4>Gabriel Fernandes</h4><br />
              <p>Aluno de Engenharia da Computação 6° semestre. Responsável pelo Backend, utilizou o framework NodeJS.</p>
            </a>
          </li>
        </ul>
      </article>

      <footer className='footer-bghome'>
        <div className='footersi containerhome'>
            <img className="imglogo" src={images.singepLogo} alt="Singep" />
            <div className='footersi-contato'>
                <h1>Contato</h1>
                <ul className='font-2-m'>
                    <li><a href="tel:+5511999999999">+55 11 95827-9760</a></li>
                    <li><a href="mailto:contato@singep.com">SingepTecnologia@gmail.com</a></li>
                    <li>Estado de São Paulo - Brasil</li>
                    <li>Guarulhos - SP</li>
                </ul><br/>

                <div className='footer-redes'>
                    <a href="https://www.instagram.com/singeptecnologia/" target="_blank" rel="noreferrer">
                        <img src={images.instagram} alt="instragam" />
                    </a>

                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="__blank" rel="noferrer">
                        <img src={images.facebook} alt="facebook" />
                    </a>

                    <a href="https://youtu.be/fwu2IQbM1KM" target="_blank" rel="noreferrer">
                        <img src={images.youtube} alt="youtube" />
                    </a>
                </div>

            </div>

            <div className='footer-informacoes'>
                    <h1>Informações</h1>
                    <nav>
                        <ul className='font-1-m'>
                            <li><a href="/login">Entrar</a></li>
                            <li><a href="/register">Registrar</a></li>
                        </ul>
                    </nav>
                </div>

                
        </div><br/><br/><br/>
        <h1 className="allRights">Singep © Todos direitos reservados.</h1>
      </footer>
    </div>
  );
};
