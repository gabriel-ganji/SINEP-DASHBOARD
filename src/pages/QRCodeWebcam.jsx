import { useState, useEffect } from 'react';
import QrReader from 'react-qr-reader';
import axios from "axios";
import bipSound from '../static/bipSound.mp3';
import womanAlert from "../static/expiredProd.mp3";

let bipSong = new Audio(bipSound);
let womanSongAlert = new Audio(womanAlert);

const itens = [];

const QRCodeWebcam = () => {

  const [webcamResult, setWebcamResult] = useState("");
  const [buyingItens, setBuyingItens] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [popUp, setPopUp] = useState("popUp");
  const [prod, setProd] = useState("");
  const [legacy, setLegacy] = useState(true);

  useEffect(() => {
    document.documentElement.requestFullscreen();
    const notDouble = async (result) => {
      let aux = result.split("/");
      const resp = await axios.get(`http://localhost:3033/singep/product/${aux[1]}/${aux[2]}`);
      console.log(resp);
      let price = Number(resp.data[0].price);
      aux.push("r$"+price);
      itens.push(aux);
      let newValue = Number(totalPrice) + price;
      setTotalPrice(newValue);
      console.log("Itens: ", itens);
      setBuyingItens(itens);
      console.log(itens);
    }

    notDouble(webcamResult);
  
  }, [webcamResult])

  const webcamError = (error) => {
    if (error) {
      console.log("Error: ", error);
    }
  };

  const resetAll = (e) => {
    e.preventDefault();
    setBuyingItens([]);
    setTotalPrice(0);
    setWebcamResult("");
  }
  
  const webcamScan = async(result) => {
    
    const splitedRes = result.split("/"); 
    let date = new Date();
    let dateNow = date.toISOString().split('T')[0];
    let americanDate = splitedRes[3].split("-");
    americanDate = americanDate[2] + "-" + americanDate[1] + "-" + americanDate[0];
    dateNow = new Date(dateNow);
    americanDate = new Date(americanDate);
 
    if(result.slice(0, 6) === "singep" && americanDate < dateNow) {
      setProd(splitedRes[1]);
      setPopUp("popUpAlert");
      await womanSongAlert.play();
      
      // alert("Produto vencido!");
      return;
    }
    if (result.slice(0, 6) === "singep") {
      console.log(result);
      bipSong.play();
      setWebcamResult(result);
      
    }

  };

  return (

    <div className='attvenda'><br/>
      {/* <h2>Caixa</h2><br /><hr /> */}
    <section className='containervenda'>
      
      <div className='divcaixa'> 
        <div className='boxesquerda'>
        <div className="topodescricao">
              <div><h5>Produto</h5></div>
              <div><h5>Quantidade</h5></div>
              <div><h5>Preço</h5></div>
            </div>

            <div className="exibirprodutos">
            <table className='ProdList'>
                <tr className='initial'>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
              {
                buyingItens.map((item, index) => {
                  if(true /*index%2 === 0*/){
                    return <><tr style={{backgroundColor: "white"}}>
                            <td>{item[1]}</td>
                            <td>{item[2]}</td>
                            <td>{item[4]}</td>
                            <td>1</td>
                        </tr><hr/></>
                  } else {
                     
                  }})
              }
              </table>
            </div>

            <br />

            <div className="totalproduto">

             
              <button className="cancelvenda" onClick={resetAll}>CANCELAR VENDA</button>
            

              <div className="valortotal">
                <h4>R$:{(totalPrice.toFixed(2))}</h4>
              </div>
            </div>
        </div>

        <div className='boxdireita'>
            <div className='topodireita'>
            <div>
            <div className="card-header m-1 rounded text-center">
            
            </div>
            <div className="card-body text-center imageQrCamera">
              <QrReader
                delay={2000} 
                onError={webcamError}
                onScan={webcamScan}
                legacyMode={legacy}
                facingMode={'environment'}
              />
              <button style={{width: "150px", borderRadius: "5px", background: "green", color: "white", padding: "2px"}} onClick={() => setLegacy(false)}>Iniciar Venda</button>
            </div>
            {/* <div className="card-footer rounded mb-1">
              <h6>WebCam Result: {webcamResult}</h6>
            </div> */}
            </div>

            <div className='btndinheiro'>
              DINHEIRO
            </div>

            <p className='pmenudireita'>SUB. TOTAL:</p>
            <div className='totalentrada'>
            </div>

            <p className='pmenudireita'>TROCO:</p>
            <div className='saldotroco'>
            </div>

            <button className='btnlimpa'>CANCELAR ITEM</button>
                        
            <button className="btnvenda" onClick={() => (setLegacy(true))}>FINALIZAR VENDA</button>
            

            </div>

        </div>

      </div>

    </section>
    <div className={popUp}>
      {/* <h4 style={{color: "red"}}>Alerta!</h4> */}
      <p>Produto {prod} vencido. Favor retirá-lo de circulação.</p>
      <button onClick={() => setPopUp("popUp")}>OK</button>
    </div>
  </div>

  );
};

export default QRCodeWebcam;
