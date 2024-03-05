import React from 'react'

export default function InsertForm() {
    return (
        <div>
            <form>
                <div class="form-group">
                    <label for="exampleInputName">Nome</label>
                    <input type="text" class="form-control" id="exampleInputName" placeholder="Nome" />
                </div>
                <div class="form-group">
                    <label for="exampleInputYear">Ano de lançamento</label>
                    <input type="number" class="form-control" id="exampleInputYear" placeholder="Ano de lançamento" />
                </div>
                <div class="form-group">
                    <label for="exampleInputGenre">Gênero</label>
                    <input type="text" class="form-control" id="exampleInputGenre" placeholder="Gênero" />
                </div>
                <div class="form-group">
                    <label for="exampleInputSDesc">Descrição curta</label>
                    <input type="text" class="form-control" id="exampleInputSDesc" placeholder="Descrição curta" />
                </div>
                <div class="form-group">
                    <label for="exampleInputLDesc">Descrição completa</label>
                    <input type="text" class="form-control" id="exampleInputLDesc" placeholder="Descrição Completa" />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}