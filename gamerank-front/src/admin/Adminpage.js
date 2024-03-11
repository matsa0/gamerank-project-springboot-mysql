import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useParams } from "react-router-dom";
import ViewGame from './ViewGame';

//componente Adminpage - exportado e pode ser importado em outro lugar
export default function Adminpage() {
    //State que armazena lista de jogos
    const [games, setGames] = useState([]) //hook react

    const {id} = useParams()

    //hook react que está sendo utilizado para buscar dados da api
    useEffect(()=>{
        //side effect logic
        loadGames()
    },[]) //dependecie array

    //função assíncrona para buscar dados da API e montar o componente
    const loadGames = async() => {
        const result = await axios.get("http://localhost:8080/games") //REQUISIÇÃO GET À API
        setGames(result.data)
    }

    const deleteGame= async(id) => {
        await axios.delete(`http://localhost:8080/games/${id}`)
        loadGames()
    }

    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Ano</th>
                        <th scope="col">Gênero</th>
                        <th scope="col">Desc curta</th>
                        <th scope="col">Desc completa</th>
                        <th scope="col">Ação</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            games.map((game)=> ( //.map itera sobre a lista de jogos
                                <tr key = {game.id}>
                                    <th scope="row">{game.id}</th>
                                    <td>{game.name}</td>
                                    <td>{game.year}</td>
                                    <td>{game.genre}</td>
                                    <td>{game.short_desc}</td>
                                    <td>{game.long_desc}</td>
                                    <td className = "align-middle">
                                        <div className = "d-flex ">
                                            <Link className = "btn btn-outline-success bi bi-eye" to={`/view_game/${game.id}`} />

                                            <Link className = "btn btn-outline-primary bi bi-arrow-repeat" to={`/update_game/${game.id}`}/>

                                            <i className = "btn btn-outline-danger bi bi-dash-lg"
                                            onClick={()=>deleteGame(game.id)}></i>
                                        </div>
                                    </td>
                                </tr>
                            )) //create new array for call the api
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}