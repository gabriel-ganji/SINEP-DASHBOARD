import { images } from '../../constants';
import './dark-mode.css';
import React, { useState } from 'react';
import singepVideo from "../../assets/videos/SINGEPapresentacao.mp4";

export const Home = (props) => {
  
  if (document.fullscreenElement) {
    document
      .exitFullscreen()
      .then(() => console.log("Document Exited from Full screen mode"))
      .catch((err) => console.error(err));
  }
  
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark-mode');
  };

  return (
    <div className={`allHome ${darkMode ? 'dark-mode' : ''}`}>
      <header className="header-home">
        <div className="headerhome containerhome">

          <img className="imglogo" src={images.SINGEPQRLOGO} alt="Singep" />

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
            <h1>
              Facilite suas operações <span className="cor-p1">.</span>
            </h1>
            <p>
              Otimize seus processos e faça seu negocio crescer com o sistema
              inteligente de gerenciamento de produtos alimentícios SINGEP.
            </p>
            {/* <a className="botao1" href="/#aqui">
              Conheça nossa equipe
            </a> */}
          </div>
          <div className="introducao-imagem">
            <img className="tratarimg1" src={images.market2} alt="" />
          </div>
        </div>
      </main>

      <article className={`equipe-lista ${darkMode ? 'dark-mode' : ''}`}>
      <div>
      <a className="botao1" href="/#singep">
        Singep
      </a>
      <a className="botao1" href="/#como-usar">
        Como usar
      </a>
      <a className="botao1" href="/#equipe-singep">
        Conheça nossa equipe
      </a>
      <a className="botao1" href="/#contato">
        Contato
      </a>
{/*   
      <a href="#" style={{background: "black", padding: "5px"}} onClick={toggleDarkMode}>
        Modo Escuro
      </a> */}
            
      <a className="botao1" href="/404">
        Doar
      </a>
      </div><br/><br/><br/><br/>
      
      <h1 className="containerhome font-2-xxl dark-text" id="singep">SINGEP</h1><br/><br/><br/>
      <div className='containerhome singep'>
      <img src={images.foods} className='tratarimg' alt=""></img>
      <p className='p dark-text'>O SINGEP (Sistema Inteligente de Gerenciamento de Produtos alimentícios). A gestão eficiente de produtos é fundamental para o sucesso de qualquer
        empresa. É preciso garantir que todos os processos envolvidos, desde a produção
        até a chegada ao consumidor final, estejam em perfeita harmonia para assegurar a
        qualidade e integridade dos produtos. Para isso, muitas empresas estão adotando o
        Sistema Inteligente de Gerenciamento de Produtos, que tem como objetivo interligar todos os dados e processos referentes à procedência do produto, para garantir sua
        qualidade, estado e preservação.
      </p>
      </div><br/><br/><hr /><br/><br /><br />
      <div style={{textAlign: "right", display: "flex"}}>
        <video src={singepVideo} controls styles={{width: "100px", height: "100px"}}></video>
      </div>
      
      <h1 className="containerhome font-2-xxl dark-text" id="como-usar ">Como funciona ?</h1><br/><br/><br/>
      <div className='containerhome singep'>
      <img src={images.womanBuying} className='tratarimg' alt=""></img>
      <p className='p dark-text'>Quando receber uma demanda de produtos no seucomércio você terá acesso a quantidade de produtos que está sendo entregue. 
      Então, você deverá criar um Qr-code*, de um determinado produto, por vez; adicionando as informações como nome, validade, lote. Após isso, basta colar 
      os códigos impressos em cada produto individualmente e cadastrar no sistema as mesmas informações usadas no software usado para criar o Qr-code.</p>
      </div><br/><br/><hr /><br/> 
        <h1 className="containerhome font-2-xxl dark-text">Nosso time e composto</h1><br/><br/><br/>
        <div style={{textAlign: "center"}} id="equipe-singep">
          <br/>
          <p style={{fontStyle: "italic "}}>´´Unir-se é um bom começo, manter a união é um progresso, e trabalhar em conjunto é a vitória.´´</p>
          <p>- Henry Ford -</p>
        </div><br /><br /><br/><br/>
        <ul className="imagenstratamento">
          <li className='imagemEquipe'>
            <a href="https://www.linkedin.com/in/amaro-neto-4b6054a3">
              <img id="personTeam" src={images.amaro} alt="Amaro" />
              <h4>Amaro Neto</h4><br />
              <p>Aluno de Engenharia da Computação 10° semestre. Responsável por escrever todos os artigos.</p>
            </a>
          </li>

          <li className='imagemEquipe'>
            <a href="https://www.linkedin.com/in/antoniorodgs">
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

      <footer className='footer-bghome' id="contato">
        <div className='footersi containerhome'>
          <a href="/">
            <img className="imglogo" src={images.SINGEPQRLOGO} alt="Singep" />
          </a>

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
