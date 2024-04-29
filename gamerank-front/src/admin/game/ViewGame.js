/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios';

export default function ViewGame() {

    const { id } = useParams()

    const[name, setName] = useState("")
    const[release_year, setRYear] = useState("")
    const[genre, setGenre] = useState("")
    const[description, setDescription] = useState("")


    useEffect(() => {
        loadGame()
    }, [])

    const loadGame= async()=> {
        try {
            const result = await axios.get(`http://localhost:8080/games/${id}`)
    
            const game_data = result.data
    
            setName(game_data.name)
            setRYear(game_data.release_year)
            setGenre(game_data.genre)
            setDescription(game_data.description)
        }
        catch (error) {
            alert("Erro ao carregar o jogo! ", error.message)
        }
    }

    return (
        <div className="container ">
            <div className="row">
                <div className="col-md-10 border shadow mx-auto mt-4 p-4">
                    <h2 className="mb-4">Visualizar Jogo</h2>
                    <hr/>

                    <h5 className="font-weight-bold">ID</h5>
                    <p>{id}</p>
                    <hr/>

                    <h5 className="font-weight-bold">Nome</h5>
                    <p>{name}</p>
                    <hr/>

                    <h5 className="font-weight-bold">Ano de Lançamento</h5>
                    <p>{release_year}</p>
                    <hr/>

                    <h5 className="font-weight-bold">Gênero</h5>
                    <p>{genre}</p>
                    <hr/>

                    <h5 className="font-weight-bold">Descrição</h5>
                    <p>{description}</p>
                    <hr/>

                    <Link className="btn btn-primary mx-3 mt-4" to={"/admin_games"}>Voltar</Link>
                </div>
            </div>
        </div>
    )
}