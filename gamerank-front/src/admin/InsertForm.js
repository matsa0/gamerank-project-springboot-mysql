import React from 'react'
import { Link } from "react-router-dom";

export default function InsertForm() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 border shadow p-4 mx-auto mt-4"> {/*O Bootstrap trabalha com 12 colunas. Em telas médias(md) ele vai usar 6 colunas(metade)*/}
                    <h2 className="mb-4">Adicionar Jogo</h2>
                    <form className="text-left">
                        <div className="form-group mb-2">
                            <label for="exampleInputName" className='mb-1'>Nome</label>
                            <input type="text" className="form-control" id="exampleInputName" placeholder="Nome" />
                        </div>
                        <div className="form-group mb-2">
                            <label for="exampleInputYear" className='mb-1'>Ano de lançamento</label>
                            <input type="number" className="form-control" id="exampleInputYear" placeholder="Ano de lançamento" />
                        </div>
                        <div className="form-group mb-2">
                            <label for="exampleInputGenre" className='mb-1'>Gênero</label>
                            <input type="text" className="form-control" id="exampleInputGenre" placeholder="Gênero" />
                        </div>
                        <div className="form-group mb-2">
                            <label for="exampleInputSDesc" className='mb-1'>Descrição curta</label>
                            <input type="text" className="form-control" id="exampleInputSDesc" placeholder="Descrição curta" />
                        </div>
                        <div className="form-group mb-2">
                            <label for="exampleInputLDesc" className='mb-1'>Descrição completa</label>
                            <input type="text" className="form-control" id="exampleInputLDesc" placeholder="Descrição Completa" />
                        </div>

                        <button type="submit" className="btn btn-success mt-4">Adicionar</button>
                        <Link className="btn btn-danger mx-3 mt-4" to="/">Cancelar</Link>
                    </form>
                </div>
            </div>
        </div>

        
    )
}