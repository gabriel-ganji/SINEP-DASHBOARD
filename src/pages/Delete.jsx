import axios from "axios";
import { useEffect, useState, useContext } from 'react';

//context
import { DarkModeContext } from "../context/DarkModeContext";

export const Delete = (props) => {

    document.documentElement.requestFullscreen();

    const {darkMode} = useContext(DarkModeContext);

    const [name, setName] = useState('name');
    const [lote, setLote] = useState('lote');

    const cancelBottom = (e) => {

        setName('kkk');
        setLote('kkk');
        //navigate("/dashboard/registrar");
    }

    const [data, setData] = useState({"data": []});

    useEffect(() => {
        
        async function fetchData() {
            try {
                const resp = await axios.get('http://localhost:3033/singep/products/product/11959050868');
                setData(resp);
            } catch(err){
                console.log(err);
            }
        }
        fetchData();
    }, []);

    const productsData = data.data;

    const loteOfProd = ['lote'];

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleLote = (e) => {
        setLote(e.target.value);
        console.log(lote);
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        let whatsappOwner = "11959050868";
        let objJson = {whatsappOwner, name, lote};

        try {
      
            const resp = await axios.post('http://localhost:3033/singep/product/delete', objJson, {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            });
    
            alert(resp.data.body);
            if(resp.status === 200) cancelBottom();
      
          } catch(error) {
      
            let data = JSON.parse(error.request.response);
            alert(data.body);
      
          }


    }

    return (
        <div className='attproduto'>
            <h3>Deletar Produto</h3><br /><hr />
            <section className='containerattproduto'>
                <form action="#" className="formatt"  onSubmit={handleSubmit} id="deleteProduct"><br></br>
            <div className='input-boxatt'>
                <label htmlFor="">Nome</label>
                <div className='columnassunto'>
                    <div className='selectboxassunto'> 

                      <select className={`${darkMode ? "darkMode" : ""}`} value={name} onChange={handleName}>
                        <option>Produto</option>
                        {
                        productsData.map((prod) => {
                            let name = prod.name;
                            return(
                                <option>{name}</option>
                            )
                        
                        })}
                        </select>
                    </div>
                </div>

            </div>

            <div className='input-boxatt'>
                <label htmlFor="">Lote</label>
                <div className='columnassunto'>
                    <div className='selectboxassunto'> 
                    <select className={`${darkMode ? "darkMode" : ""}`} value={lote} onChange={handleLote}>
                        <option>Lote</option>
                        {
                        productsData.map((prod) => {
                            let lote = prod.lote;
                            if(prod.name === name){
                                return(
                                    <option>{lote}</option>
                                )
                            }
                            
                        })}
                    </select>
                    </div>
                </div>
                
            </div>

            </form>

            <div className='columbtn'>
            <button className='btncancel' onClick={cancelBottom}>Cancelar</button>
            <button className='btndelete' type="submit" form="deleteProduct">Deletar Produto</button>
            </div>

            </section>
        </div>
      );
};
