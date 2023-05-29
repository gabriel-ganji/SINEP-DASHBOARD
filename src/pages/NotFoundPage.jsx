import { images } from "../constants"

export const NotFoundPage = () => {
    return (
        <div>
            <header className="header-home">
                <div className="headerhome containerhome">
                <a href="/">
                    <img className="imglogo" src={images.singepLogo} alt="Singep" />
                </a>
                </div>
            </header>
            <main className="introducao-bg">
                <div className="introducao containerhome">
                    <div className="introducao-conteudo">
                
                
                    </div>
                    <div>
                         <img src={images.NotFounded404Cat} alt="" style={{width: "100%", height: "100%", padding: "0px", borderRadius: "15px", boxShadow: "0 0 8px gray"}}/>
                    </div>
                </div>
                <p></p>
            </main>
            <br/>
            <br/>
            
        </div>
    )
}
