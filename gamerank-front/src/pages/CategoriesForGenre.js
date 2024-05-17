import React, { useEffect, useState } from 'react'
import Card from "../categories_components/Card";
import { useParams } from 'react-router-dom';

export default function CategoriesForGenre() {
    /*
    No React Router, a propriedade match é fornecida automaticamente aos componentes renderizados por uma rota.

    a propriedade match é passada automaticamente para o componente renderizado (CategoriesForGenre). 
    Isso permite que você acesse o parâmetro de rota :genre da URL usando match.params.genre
    */
    const { genre } = useParams()
    const[games, setGames] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8080/games/genre/${genre}`)
        .then(response => response.json())
        .then(data => setGames(data))
        .then(error => console.log("Error > ", error))
        
    }, [genre]) //genre é uma variável de dependência no array
    /*
    Ao incluir genre como uma dependência do useEffect, você está garantindo que o efeito será 
    reexecutado sempre que genre mudar.
    */

    return (
        <div className="container">
            <div key={genre} className="container-cards-categories">
                <h2>{genre}</h2>
                <div className="row">
                    {/* O método map é usado para iterar sobre os jogos de cada gênero */}
                    {games.map(game => (
                        <div key={game.id} className="col-2">
                            {/* Cada jogo é representado por um componente Card */}
                            <Card url_image={game.url_image} name={game.name}></Card>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
