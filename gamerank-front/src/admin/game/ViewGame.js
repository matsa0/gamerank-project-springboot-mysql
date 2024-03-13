import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios';

export default function ViewGame() {

    const { id } = useParams()

    const[name, setName] = useState("")
    const[year, setYear] = useState("")
    const[genre, setGenre] = useState("")
    const[short_desc, setSDesc] = useState("")
    const[long_desc, setLDesc] = useState("")


    useEffect(() => {
        loadGame()
    }, [])

    const loadGame= async()=> {
        try {
            const result = await axios.get(`http://localhost:8080/games/${id}`)
    
            const game_data = result.data
    
            setName(game_data.name)
            setYear(game_data.year)
            setGenre(game_data.genre)
            setSDesc(game_data.short_desc)
            setLDesc(game_data.long_desc)
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

                    <h5 className="font-weight-bold">Name</h5>
                    <p>{name}</p>
                    <hr/>

                    <h5 className="font-weight-bold">Year</h5>
                    <p>{year}</p>
                    <hr/>

                    <h5 className="font-weight-bold">Genre</h5>
                    <p>{genre}</p>
                    <hr/>

                    <h5 className="font-weight-bold">Short Description</h5>
                    <p>{short_desc}</p>
                    <hr/>

                    <h5 className="font-weight-bold">Long Description</h5>
                    <p>{long_desc}</p>
                    <hr/>

                    <Link className="btn btn-primary mx-3 mt-4" to={"/admin_games"}>Voltar</Link>
                </div>
            </div>
        </div>
    )
}