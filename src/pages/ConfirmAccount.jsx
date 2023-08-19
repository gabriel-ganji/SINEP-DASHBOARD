import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { images } from '../constants';

export const ConfirmCode = (props) => {
  
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleOnClick = (e) => {
    // navigate("/dashboard");
  }

  const handleCode = (e) => {
    setCode(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let user = "11959050868";
    
    const objJson = {user, code}

    const resp = await axios.post('http://localhost:3033/authUserAccount', objJson, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    alert(resp.data);

    if (resp.data === "Conta autenticada com sucesso!"){
      navigate("/dashboard");
    }

  }
  
  return (
    <div>
      <header className="header-home">
        <div className="headerhome containerhome">
        <a href="/">
           <img className="imglogo" src={images.SINGEPQRLOGO} alt="Singep" />
         </a>
        </div>
    </header>
    <main className="introducao-bg" style={{height: "350px"}}>
        <div className="introducao containerhome">
          <div className="introducao-conteudo">
            
            
          </div>
          <div className="introducao-imagem">
            
          </div>
        </div>
      </main>
    <div className="App">
    <div className="divLogReg logRegBorder">
      <h3>Autenticar</h3><br></br>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="user">Código</label>
        <input value={code} onChange={handleCode} placeholder="Digite o código enviado no seu whatsapp" id="code" name="code"/><br></br>

        <button className="btnLogReg" type="submit">Confirmar</button>
        <br/>

      </form><br></br>
      <a className="link-btn" href="/">Reenviar</a>
    </div>
    </div>
    </div>
  )
}