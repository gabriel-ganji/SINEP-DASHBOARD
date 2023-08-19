import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { DarkModeContext } from '../context/DarkModeContext';

export const ContactUs = () => {

    document.documentElement.requestFullscreen();
    const {darkMode} = useContext(DarkModeContext);

    const allMsg = [];

    let [message, setMessage] = useState('');
    let [textArea, setTextArea] = useState('');
    let [messagesArray, setMessagesArray] = useState([]);

    const handleTextArea = async (e) => {
      setTextArea(e.target.value);
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

    }

    return (
        <div className='contato'>
          <h3>Fale Conosco</h3><br /><hr />
            <section className='containercontato'>
                
                
                <form action="#" className="formatt"><br></br>
            <div className='input-boxatt'>
                <label htmlFor="">Assunto</label>
                <div className='columnassunto'>
                    <div className='selectboxassunto'> 
                      <select className={`${darkMode ? "darkMode" : ""}`}>
                        <option>Conta</option>
                        <option>Ajuda</option>
                        <option>Senha</option>
                        <option>Sistema</option>
                        <option>Notificações</option>
                        <option>Outros</option>
                      </select>
                    </div>


                </div>
            </div><br></br>
            <div className='areacontato'>
                <label htmlFor="">Mensagem</label>
                <textarea className={`${darkMode ? "darkMode" : ""}`} type="text" placeholder='Conte-nos um pouco mais sobre'/>
                
            </div>
            {/* <TextAreaExampleTextArea /> */}
            </form>
            <div className='columbtn'>
            <button className='btnreg'>Enviar</button>
            </div>
            </section>
        </div>
      );
};