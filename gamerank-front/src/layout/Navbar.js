/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar () {

    const [activeItem, setActiveItem] = useState("")
    const categoriesRef = useRef(null)
    const rankingRef = useRef(null)
    const profileRef = useRef(null)


    const handleItemClick = (itemName) => {
        categoriesRef.current.style.borderBottom = "none";
        rankingRef.current.style.borderBottom = "none";
        profileRef.current.style.color = "#FFFFFF8C";

        setActiveItem(itemName)

        if(itemName === "categories") {
            categoriesRef.current.style.borderBottom = "4px solid #682bd7"
        }
        else if(itemName === "ranking") {
            rankingRef.current.style.borderBottom = "4px solid #682bd7"
        }
        else if(itemName === "profile") {
            profileRef.current.style.color = "#682bd7"
        }
        else {
            categoriesRef.current.style.borderBottom = "4px solid #682bd7"
        }
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="main-navbar container-fluid">
            <Link class="navbar-brand" to={"/categories"}><label className="logo-gamerank">Gamerank!</label></Link>
            <div class="nav-items collapse navbar-collapse">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    {/*atribui classes dinâmicamente, diante de uma condição. Se activeItem === "categories" atribui a classe active*/}
                    {/*condição ? valor_se_verdadeiro : valor_se_falso*/}
                    <li className={`nav-item ${activeItem === "categories" ? "active" : ""} `}>  
                        <Link ref={categoriesRef} onClick={() => handleItemClick('categories')} class="nav-item-children nav-link" to={"/categories"}>Categorias</Link>
                    </li>
                    <li className={`nav-item ${activeItem === "ranking" ? "active" : ""}`}>
                        <a ref={rankingRef} onClick={() => handleItemClick('ranking')} class="nav-item-children nav-link">Ranqueamento</a>
                    </li>
                </ul>
                <ul className="profile-item navbar-nav">
                    <li className={`nav-item ${activeItem === "profile" ? "active" : ""}`}>
                        <a ref={profileRef} onClick={() => handleItemClick('profile')} class="nav-item-children nav-link" href="#"><i class="profile-icon bi bi-person-circle"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}