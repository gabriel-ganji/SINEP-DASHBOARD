import { images } from "../constants"

export const NotFoundPage = () => {
    return (
        <div>
            <header className="header-home">
                <div className="headerhome containerhome">
                <a href="/">
                    <img className="imglogo" src={images.SINGEPQRLOGO} alt="Singep" />
                </a>
                </div>
            </header>
            <main className="introducao-bg">
                <div className="introducao containerhome">
                    <div className="introducao-conteudo">
                
                
                    </div>

                </div>
                <p></p>
            </main>
            <div className="App">
                         <img src={images.NotFounded404Cat} alt="" style={{width: "300px", height: "200px", padding: "0px", borderRadius: "15px", position: "absolute", top: "120px"}}/>
                    </div>
            <br/>
            <br/>
            
        </div>
    )
}
