import React from "react";
import { Link } from "react-router-dom";

export default function FirstPage() {

    return (
        <div className="home container d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="col text-center">
                    <h1>BEM VINDO AO GAMERANK!</h1>
                    <h2>Faça parte de uma grande comunidade de gamers.</h2>
                    <Link className="btn btn-primary" to={"/login"}>Participe!</Link>
                </div>
            </div>
        </div>
    )
}