import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

export default function ViewGame() {

    const { id } = useParams()

    const[name, setName] = useState("")
    const[year, setYear] = useState("")
    const[genre, setGenre] = useState("")
    const[short_desc, setSDesc] = useState("")
    const[long_desc, setLDesc] = useState("")

    const game_data = {
        id: id,
        name: name,
        year: year,
        genre: genre,
        short_desc: short_desc,
        long_desc: long_desc
    }

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
            <div className="row ">
                <div className="col-md-10 border shadow mx-auto mt-4 ">
                    <p>ID: {id}</p>
                    <hr/>
                    <p>Name: {name}</p>
                    <hr/>
                    <p>Year: {year}</p>
                    <hr/>
                    <p>Genre: {genre}</p>
                    <hr/>
                    <p>Short Description: {short_desc}</p>
                    <hr/>
                    <p>Long Description: {long_desc}</p>
                </div>
            </div>
        </div>
    )
}