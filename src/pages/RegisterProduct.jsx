import React, { useState } from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const RegisterProduct = (props) => {
    document.documentElement.requestFullscreen();  
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [lote, setLote] = useState('');
    const [expiry, setExpiry] = useState('');
    const [totalun, setTotalun] = useState('');
    const [totalkg, setTotalkg] = useState('');

    const navigate = useNavigate('');

    const cancelBottom = (e) => {
        setName('');
        setPrice('');
        setLote('');
        setExpiry('');
        setTotalun('');
        setTotalkg('');
        //window.location.reload(false);
        //navigate("/dashboard/registrar");
    }

    const handleName = (e) => {
        setName(e.target.value);
    }
    
    const handlePrice = (e) => {
        setPrice(e.target.value);
    }

    const handleLote = (e) => {
        setLote(e.target.value);
    }

    const handleExpiry = (e) => {
        setExpiry(e.target.value);
    }

    const handleTotalun = (e) => {
        setTotalun(e.target.value);
    }

    const handleTotalkg = (e) => {
        setTotalkg(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submit Register");
        let whatsappOwner = "11959050868";
        let objJson = {whatsappOwner, name, price, lote, expiry, totalun, totalkg};
        console.log(objJson);

        try {
      
            const resp = await axios.post('http://localhost:3033/singep/product/register', objJson, {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            });
            console.log(resp);
            alert(resp.data.body);
            if(resp.status === 200) cancelBottom();
      
          } catch(error) {
      
            let data = JSON.parse(error.request.response);
            console.log(data);
            alert(data.body);
      
          }


    }
    return (

        <div className='registrarproduto'>
            <h3>Registrar Produto</h3>< br/><hr/><br />
        <section className='containerregistrarproduto'>

        <form className="formreg" onSubmit={handleSubmit} id="registerProduct">

            <div className='input-boxreg'>
                <label htmlFor="">Produto</label>
                <input value={name} onChange={handleName} type="text" placeholder='Nome do Produto'/>

            </div>

            <div className='input-boxreg'>
                <label htmlFor="">Preço</label>
                <input value={price} onChange={handlePrice} type="text" placeholder='R$'/>
                
            </div>

            <div className='input-boxreg'>
                <label htmlFor="">Lote</label>
                <input value={lote} onChange={handleLote} type="text" placeholder='Lote do Produto'/>
                
            </div>

            <div className='input-boxreg'>
                <label htmlFor="">Data de validade</label>
                <input value={expiry} onChange={handleExpiry} type="date" placeholder='Data da Validade'/>
                
            </div>

            <div className='input-boxreg'>
                <label htmlFor="">Total de unidade</label>
                <input value={totalun} onChange={handleTotalun} type="text" placeholder='Total Unitario'/>
                
            </div>

            <div className='input-boxreg'>
                <label htmlFor="">Total em KG ou Quilogramas</label>
                <input value={totalkg} onChange={handleTotalkg} type="text" placeholder='Total em KG/G'/>
                
            </div>
            
        </form>
        <div className='columbtn'>
            <button className='btncancel' type="btn" onClick={cancelBottom}>Cancelar</button>
            <button className='btnreg' type="submit" form="registerProduct">Registrar</button>
        </div>
        </section>
    </div>
      );
}