import React from "react";
import { Link } from "react-router-dom";

export default function Navbar () {
    return (
        <nav class="navbar navbar-dark bg-dark justify-content-between p-3">
        <div className="container-fluid">
            <Link class="navbar-brand" to={"/home"}>Gamerank!</Link>
            <div class="div-inline">
                
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>
                
            </div>
        </div>
    </nav>
    )
}