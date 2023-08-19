import React, { useState } from 'react';
import axios from 'axios';
import '../../App.css';
import {useNavigate} from "react-router-dom";
import { images } from '../../constants';

export const Register = (props) => {

  document.documentElement.requestFullscreen();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [establishment, setEstablishment] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => { 

    e.preventDefault();
    console.log(
      email,
      password,
      name,
      whatsapp,
      establishment,
      confirmPassword,
    );
   
    let objJson = {
      name,
      email,
      whatsapp,
      ownerof: establishment,
      password,
      confirmPassword,
    };

    try {
      const resp = await axios.post('http://localhost:3033/signup', objJson, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      // alert(resp.data);
      navigate("/authUserAccount");

    } catch(error) {
      // alert(error.request.response);
      console.log(error.request.response);

      console.log(error.request.status);
    }



  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleWhatsappChange = (e) => {
    setWhatsapp(e.target.value);
  };

  const handleEstablishmentChange = (e) => {
    setEstablishment(e.target.value);
  };

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
    <div className="logRegBorder">
      <h3>Registre-se</h3><br/>
      <form  className="formTextAlignLeft" onSubmit={handleSubmit}>
        <div className="rowReg">
          <label htmlFor="name">Nome Completo</label><br />
          <input
            value={name}
            name="name"
            id="name"
            placeholder="Nome"
            onChange={handleNameChange}
          /><br/>
          <label htmlFor="email">E-mail</label><br />
          <input
            value={email}
            type="email"
            placeholder="Digite o seu e-mail"
            id="email"
            name="email"
            onChange={handleEmailChange}
          /><br/>
          <label htmlFor="whatsapp">Whatsapp</label><br/>
          <input
            value={whatsapp}
            name="whatsapp"
            placeholder="1191234-5678"
            id="whatsapp"
            onChange={handleWhatsappChange}
          /><br/>
          <br />
          <button className="btnLogReg" type="submit">Finalizar Cadastro</button><br/>
        

        </div>

        <div className='rowReg'>

        <label htmlFor="establishment">Nome do estabelecimento</label><br/>
        <input
          value={establishment}
          type="name"
          placeholder="Nome fantasia"
          name="establishment"
          onChange={handleEstablishmentChange}
        /><br/>
        <label htmlFor="password">Senha</label><br/>
        <input
          value={password}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          onChange={handlePasswordChange}
        /><br/>

        <label htmlFor="confirmPassword">Confirmar senha</label><br/>
        <input
          value={confirmPassword}
          type="password"
          placeholder="********"
          id="confirmPassword"
          name="confirmPassword"
          onChange={handleConfirmPasswordChange}
        /><br/>
        <br />
        <a className="link-btn" style={{"padding": "10px"}} href="/login">Já possue uma conta? Entre aqui.</a>
        </div>

       <br></br>
      </form>
      <div class="" style={{display: "inline-grid"}}>
        
      </div>
      
    </div>
    </div>
    </div>
  );
};
