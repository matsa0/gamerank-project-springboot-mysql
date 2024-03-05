import React, { useEffect, useState } from 'react'
import axios from "axios"

//componente Adminpage - exportado e pode ser importado em outro lugar
export default function Adminpage() {

    const [games, setGames] = useState([])

    useEffect(()=>{
        loadGames()
    },[])

    const loadGames=async()=>{
        const result =await axios.get("http://localhost:8080/games")
        setGames(result.data)
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
                        <th scope="col"> - </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            games.map((game)=> (
                                <tr key = {game.id}>
                                    <th scope="row">{game.id}</th>
                                    <td>{game.name}</td>
                                    <td>{game.year}</td>
                                    <td>{game.genre}</td>
                                    <td>{game.short_desc}</td>
                                    <td>{game.long_desc}</td>
                                    <td><i class="bi bi-x-square-fill"></i></td>
                                </tr>
                            )) //create new array for call the api
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}