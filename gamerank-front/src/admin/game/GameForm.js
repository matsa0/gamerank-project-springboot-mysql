/* eslint-disable no-lone-blocks */
import React, {useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


export default function GameForm() {

    let navigate = useNavigate()

    {/*initialized each field state with an object*/}
    const[name, setName] = useState("")
    const[release_year, setRYear] = useState("")
    const[genre, setGenre] = useState("")
    const[description, setDescription] = useState("")
    const[url_image, setUrlImage] = useState("")

    {/*Manipulador de eventos. Lida com o evento onChange() nos campos do form*/}
    {/*
    O efeito disso na página é que, sempre que o usuário digitar ou alterar o conteúdo em um dos campos de input, 
    a função correspondente será chamada, atualizando o estado React associado a esse campo específico. Isso cria uma experiência interativa, 
    onde a interface do usuário reage em tempo real às ações do usuário.
    */}
    const onNameChange=(e)=> {
        {/*e.target é o evento que está sendo alterado e .value pega o seu valor*/}
        setName(e.target.value)
    }
    const onYearChange=(e)=> {
        setRYear(e.target.value)
    }
    const onGenreChange=(e)=> {
        setGenre(e.target.value)
    }
    const onDescriptionChange=(e)=> {
        setDescription(e.target.value)
    }
    const onUrlImageChange=(e)=> {
        setUrlImage(e.target.value)
    }

    const onSubmit= async(e)=>{
        {/*Evita o comportamento padrão do navegador que é recarregar a página*/}
        e.preventDefault() 
        
        const game_data = {
            name: name,
            release_year: release_year,
            genre: genre,
            description: description,
            url_image: url_image
        }

        try {
            const response = await axios.post("http://localhost:8080/games", game_data)
            alert("Jogo adicionado com sucesso! ", response.data)
            navigate("/admin_games")
        } 
        catch (error) {
            alert("Erro ao adicionar o jogo! ", error.message)
        }
    }   

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 border shadow p-4 mx-auto mt-4"> {/*O Bootstrap trabalha com 12 colunas. Em telas médias(md) ele vai usar 6 colunas(metade)*/}
                    <h2 className="mb-4">Adicionar Jogo</h2>
                    <form onSubmit={(e)=>onSubmit(e)}>
                        <div className="form-group mb-2">
                            <label for="exampleInputName" className='mb-1'>Nome</label>
                            <input type="text" className="form-control" id="exampleInputName" placeholder="Nome" value={name} 
                            onChange={(e)=>onNameChange(e)} required
                            /> {/*Sempre que onChange acontecer, ele chamará a função*/}
                        </div>
                        <div className="form-group mb-2">
                            <label for="exampleInputYear" className='mb-1'>Ano de lançamento</label>
                            <input type="number" className="form-control" id="exampleInputYear" placeholder="Ano de lançamento" 
                            value={release_year}
                            onChange={(e)=>onYearChange(e)} required
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label for="exampleInputGenre" className='mb-1'>Gênero</label>
                            <input type="text" className="form-control" id="exampleInputGenre" placeholder="Gênero" 
                            value={genre} 
                            onChange={(e)=>onGenreChange(e)} required
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label for="exampleInputSDesc" className='mb-1'>Descrição</label>
                            <input type="text" className="form-control" id="exampleInputDescription" placeholder="Descrição" 
                            value={description} 
                            onChange={(e)=>onDescriptionChange(e)} required
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label for="exampleInputLDesc" className='mb-1'>URL da imagem</label>
                            <input type="text" className="form-control" id="exampleInputUrlImage" placeholder="URL da imagem" 
                            value={url_image} 
                            onChange={(e)=>onUrlImageChange(e)} 
                            />
                        </div>

                        <button type="submit" className="btn btn-success mt-4">Adicionar</button>
                        <Link className="btn btn-danger mx-3 mt-4" to={"/admin_games"}>Voltar</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}