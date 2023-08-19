import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { images } from '../../constants';

export const Login = (props) => {

  document.documentElement.requestFullscreen();
  
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUserChange = (e) => {
    setUser(e.target.value);
  }

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const objJson = {user, password};
    console.log(objJson);
    
    try {
      
      const resp = await axios.post('http://localhost:3033/signin', objJson, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      // alert(resp.data.body);
      if(resp.status === 200) navigate("/dashboard");

    } catch(error) {

      let data = JSON.parse(error.request.response);
      // alert(data.body);

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
          <div className="introducao-imagem" style={{width: "200px"}}>
            
          </div>
        </div>
    </main>
    <div className="App">
    <div className="divLogReg logRegBorder">
      <h3>Conecte-se</h3><br/>
      <div className="">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="user">Usuário</label>
        <input value={user} onChange={handleUserChange} placeholder="Digite o seu usuário" id="user" name="user"/>

        <label htmlFor="password">Senha</label>
        <input value={password} onChange={handlePassChange} type="password" placeholder="********" id="password" name="password"/><br />

        <button className="btnLogReg" type="submit">Conecte-se</button>

      </form><br></br>
      </div>
      <a className="link-btn" href="/register">Não tem uma conta? Registre-se aqui.</a>
    </div>
    </div>
    </div>
  )
}
