import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "../App.css";

export const Notifications = () => {
    document.documentElement.requestFullscreen();
    const [data, setData] = useState({"data": []});

    useEffect(() => {
        async function fetchData() {
            try {
                const notifies = await axios.get("http://localhost:3033/singep/notifies/11958279760");
                setData(notifies);
            } catch(err){
                console.log(err);
            }
        }
        fetchData();
    }, []);

    console.log(data);

    const notifyData = data.data;
    console.log("NOTIFYDATA: ", notifyData);
    let i = 0;
    if(data.data.length === 0){
        return (
            <div>
                <h3>Notificações</h3><br/><hr/>
                <br />
                <p>Você não tem notificações no momento.</p>
            </div>
        )
    } if(data.data.length !== 0){

    return (
        <div>
            <h3>Notificações</h3><br/><hr/><br/>
            <p>Produtos vencidos:</p><br />
            <div id="stockTableNot">
            <table className='ProdListNot'>
                <tr className='initial'>
                    <th>Produto</th>
                    <th>Lote</th>
                    <th>Venceu</th>
                    <th>Total</th>
                </tr>
                {
                   notifyData.map((prod) => {
                    i++;
                    const date = `${prod.expiry.slice(-2)}/${prod.expiry.slice(5, 7)}/${prod.expiry.slice(0, 4)}`;
                    if(i % 2 === 0) {
                        return <tr className='par'>
                            <td>{prod.prodName}</td>
                            <td>{prod.prodLote}</td>
                            <td className='val'>{date}</td>
                            <td>{prod.total}</td>
                        </tr>
                    } else {
                        return <tr className='impar'>
                            <td>{prod.prodName}</td>
                            <td>{prod.prodLote}</td>
                            <td className='val'>{date}</td>
                            <td>{prod.total}</td>
                        </tr>
                    }
                    
                })
                }
            </table>
            </div>
        </div>
      );
}
}
