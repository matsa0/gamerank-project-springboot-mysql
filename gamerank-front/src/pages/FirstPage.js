import React from "react";
import { Link } from "react-router-dom";

export default function FirstPage() {

    return (
        <div className="fp-background">
            <div className="first-page fp-custom-container d-flex justify-content-center">
                <div className="row">
                    <div className="col text-center">
                        <h1 className="main-title-fp">BEM VINDO AO <label>GAMERANK!</label></h1>
                        <h2 className="sub-title-fp">Faça parte de uma grande comunidade de gamers.</h2>
                        <Link className="fp-main-btn btn" to={"/login"}>Participe agora!</Link>
                    </div>
                </div>
            </div>
            <div className="fp-custom-container-2">
                <div className="row">
                    <label className="popular-title">Populares</label>
                    <div className="col fp-cards">
                        <div class="card fp-card">
                            <img src="https://cdn2.steamgriddb.com/grid/9af9717135168557662518a4d061836f.png"  alt="Imagem de jogo mais popular" />
                        </div>
                        <div class="card fp-card">
                            <img src="https://cdn2.steamgriddb.com/grid/9af9717135168557662518a4d061836f.png"  alt="Imagem de jogo mais popular" />
                        </div>
                        <div class="card fp-card">
                            <img src="https://cdn2.steamgriddb.com/grid/9af9717135168557662518a4d061836f.png"  alt="Imagem de jogo mais popular" />
                        </div>
                        <div class="card fp-card">
                            <img src="https://cdn2.steamgriddb.com/grid/9af9717135168557662518a4d061836f.png"  alt="Imagem de jogo mais popular" />
                        </div>
                        <div class="card fp-card">
                            <img src="https://cdn2.steamgriddb.com/grid/9af9717135168557662518a4d061836f.png"  alt="Imagem de jogo mais popular" />
                        </div>
                    </div>
                    <p className="fp-paragraph">Avalie, confira a tendência dos games e se divirta!</p>
                </div>
            </div>

        </div>
    )
}