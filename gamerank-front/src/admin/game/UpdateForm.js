import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


export default function InsertForm() {

    let navigate = useNavigate()

    const {id} = useParams()

    const[name, setName] = useState("")
    const[year, setYear] = useState("")
    const[genre, setGenre] = useState("")
    const[short_desc, setSDesc] = useState("")
    const[long_desc, setLDesc] = useState("")

    const onNameChange=(e)=> {
        {/*e.target é o evento que está sendo alterado e .value pega o seu valor*/}
        setName(e.target.value)
    }
    const onYearChange=(e)=> {
        setYear(e.target.value)
    }
    const onGenreChange=(e)=> {
        setGenre(e.target.value)
    }
    const onSDescChange=(e)=> {
        setSDesc(e.target.value)
    }
    const onLDescChange=(e)=> {
        setLDesc(e.target.value)
    }

    const onSubmit=async(e)=> {
        e.preventDefault()

        const game_data = {
            id: id,
            name: name,
            year: year,
            genre: genre,
            short_desc: short_desc,
            long_desc: long_desc
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
            setYear(game_data.year)
            setGenre(game_data.genre)
            setSDesc(game_data.short_desc)
            setLDesc(game_data.long_desc)
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
                            value={year}
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
                            <label for="exampleInputSDesc" className='mb-1'>Descrição curta</label>
                            <input type="text" className="form-control" id="exampleInputSDesc" placeholder="Descrição curta" 
                            value={short_desc} 
                            onChange={(e)=>onSDescChange(e)}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label for="exampleInputLDesc" className='mb-1'>Descrição completa</label>
                            <input type="text" className="form-control" id="exampleInputLDesc" placeholder="Descrição Completa" 
                            value={long_desc} 
                            onChange={(e)=>onLDescChange(e)}
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