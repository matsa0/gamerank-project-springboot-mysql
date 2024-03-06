import React from "react";

export function NavbarAdmin() {
    return (
        <nav class="navbar navbar-dark bg-dark justify-content-between p-3">
            <a class="navbar-brand">Adminpage</a>
            <form class="form-inline">
                <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Adicionar Jogo</button>
            </form>
        </nav>
    )
}