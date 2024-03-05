import React from "react";

export function NavbarAdmin() {
    return (
        <nav class="navbar navbar-dark bg-dark justify-content-between">
            <a class="navbar-brand">Adminpage</a>
            <form class="form-inline">
                <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Inserir</button>
                <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Atualizar</button>
            </form>
        </nav>
    )
}