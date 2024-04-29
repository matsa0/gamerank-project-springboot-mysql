import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom";

//componente Adminpage - exportado e pode ser importado em outro lugar
export default function Adminpage() {
    //State que armazena lista de jogos
    const [games, setGames] = useState([]) //hook react

    //hook react que está sendo utilizado para buscar dados da api
    useEffect(()=>{
        //side effect logic
        loadGames()
    },[]) //dependecy array

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
                <h2 className='mb-4'>Jogos</h2>
                <table className="table border shadow">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Ano</th>
                        <th scope="col">Gênero</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Ação</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            games.map((game)=> ( //.map itera sobre a lista de jogos
                                <tr key = {game.id}>
                                    <th scope="row">{game.id}</th>
                                    <td>{game.name}</td>
                                    <td>{game.release_year}</td>
                                    <td>{game.genre}</td>
                                    <td>{game.description}</td>
                                    <td className = "align-middle">                                       
                                        <Link className = "btn btn-outline-success bi bi-eye" to={`/view_game/${game.id}`} />

                                        <Link className = "btn btn-outline-primary bi bi-arrow-repeat mx-2" to={`/update_game/${game.id}`}/>

                                        <i className = "btn btn-outline-danger bi bi-dash-lg"
                                        onClick={()=>deleteGame(game.id)}></i>
                                    </td>
                                </tr>
                            )) //create new array for call the api
                        }
                    </tbody>
                </table>
            </div>
            <Link className = "btn btn-primary mx-3" to={"/admin_users"}>Usuários <i class="bi bi-arrow-right"></i></Link>
        </div>
    )
}