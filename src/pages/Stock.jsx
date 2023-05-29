import React from 'react';
import "../App.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Stock = () => {
    document.documentElement.requestFullscreen();
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

    console.log("DATA: ", data.data);
    const productsData = data.data;
    productsData.map((prod) => {
        console.log(prod);
    })
    let i = 0;
    if(productsData.length !== 0){

        return (
            <div>
                
                <h3>Estoque dos Produtos</h3>< br/><hr/><br />
                <div id="stockTable">
                <table className='ProdList'>
                    <tr className='initial'>
                        <th>Produto</th>
                        <th>Lote</th>
                        <th>Validade</th>
                        <th>Preço(R$)</th>
                        <th>Total(un.)</th>
                    </tr>
                    {
                    productsData.map((prod) => {
                        i++;
                        const date = `${prod.expiry.slice(-2)}/${prod.expiry.slice(5, 7)}/${prod.expiry.slice(0, 4)}`;
                        if(i % 2 == 0) {
                            return <tr className='par'>
                                <td>{prod.name}</td>
                                <td>{prod.lote}</td>
                                <td className='val'>{date}</td>
                                <td>${prod.price}</td>
                                <td>{prod.totalun}</td>
                            </tr>
                        } else {
                            return <tr className='impar'>
                                <td>{prod.name}</td>
                                <td>{prod.lote}</td>
                                <td className='val'>{date}</td>
                                <td>${prod.price}</td>
                                <td>{prod.totalun}</td>
                            </tr>
                        }
                        
                            
                    })
                    }
                </table>
                </div>
                
            </div>
        );
    } else {
        return(
            <div>
                
                <h3>Estoque dos Produtos</h3>< br/><hr/><br />
                <p>Adicione produtos ao seu seu estoque.</p>
                
                <Link to="/dashboard/registrar"><button style={{padding: "5px", width: "50px", background: "#3b93eb"}}>+</button></Link>
            </div>
        )
    }           
};
