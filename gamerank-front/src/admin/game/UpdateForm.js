/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-lone-blocks */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


export default function InsertForm() {

    let navigate = useNavigate()

    const {id} = useParams()

    const[name, setName] = useState("")
    const[release_year, setRYear] = useState("")
    const[genre, setGenre] = useState("")
    const[description, setDescription] = useState("")
    const[url_image, setUrlImage] = useState("")

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

    const onSubmit=async(e)=> {
        e.preventDefault()

        const game_data = {
            id: id,
            name: name,
            release_year: release_year,
            genre: genre,
            description: description,
            url_image: url_image
        }

        try {
            const response = await axios.put(`http://localhost:8080/games/${id}`, game_data)
            alert("Jogo atualizado com sucesso! ", response.data)
            navigate("/admin_games")
        }
        catch(error) {
            alert("Erro! Jogo não atualizado! ", error.message)
        }

    }

    const loadGames=async ()=> {
        try {
            const result= await axios.get(`http://localhost:8080/games/${id}`)

            const game_data = result.data

            setName(game_data.name)
            setRYear(game_data.release_year)
            setGenre(game_data.genre)
            setDescription(game_data.description)
            setUrlImage(game_data.url_image)
        }
        catch(error) {
            alert("Erro ao carregar os dados do jogo! ", error.message)
        }
    }

    useEffect(() => {
        loadGames()
    },[])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 border shadow p-4 mx-auto mt-4"> {/*O Bootstrap trabalha com 12 colunas. Em telas médias(md) ele vai usar 6 colunas(metade)*/}
                    <h2 className="mb-4">Atualizar Jogo</h2>
                    <form onSubmit={(e)=>onSubmit(e)}>
                        <div className="form-group mb-2">
                            <label for="exampleInputId" className='mb-1'>ID</label>
                            <input type="number" className="form-control" id="exampleInputId" placeholder="ID" value={id} 
                            /> {/*Sempre que onChange acontecer, ele chamará a função*/}
                        </div>
                        <div className="form-group mb-2">
                            <label for="exampleInputName" className='mb-1'>Nome</label>
                            <input type="text" className="form-control" id="exampleInputName" placeholder="Nome" value={name} 
                            onChange={(e)=>onNameChange(e)} 
                            /> {/*Sempre que onChange acontecer, ele chamará a função*/}
                        </div>
                        <div className="form-group mb-2">
                            <label for="exampleInputYear" className='mb-1'>Ano de lançamento</label>
                            <input type="number" className="form-control" id="exampleInputYear" placeholder="Ano de lançamento" 
                            value={release_year}
                            onChange={(e)=>onYearChange(e)}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label for="exampleInputGenre" className='mb-1'>Gênero</label>
                            <input type="text" className="form-control" id="exampleInputGenre" placeholder="Gênero" 
                            value={genre} 
                            onChange={(e)=>onGenreChange(e)}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label for="exampleInputDesc" className='mb-1'>Descrição</label>
                            <input type="text" className="form-control" id="exampleInputDesc" placeholder="Descrição" 
                            value={description} 
                            onChange={(e)=>onDescriptionChange(e)}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label for="exampleInputSDesc" className='mb-1'>URL da imagem</label>
                            <input type="text" className="form-control" id="exampleInputSDesc" placeholder="URL da imagem" 
                            value={url_image} 
                            onChange={(e)=>onUrlImageChange(e)}
                            />
                        </div>


                        <button type="submit" className="btn btn-success mt-4">Atualizar</button>
                        <Link className="btn btn-danger mx-3 mt-4" to={"/admin_games"}>Voltar</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}