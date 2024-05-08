import React, { useEffect, useState } from "react";
import Card from "../categories_components/Card";

export default function Categories() {

    const[genres, setGenres] = useState([])

    useEffect(() => {
        //função usada em javascript para fazer requisições
        fetch('http://localhost:8080/games', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => response.json())
        .then(data => {
            const gamesByGenre = {} //objeto vazio que vai organizar os jogos por gênero
            data.forEach(game => {
                //Se o gênero do jogo ainda não existe como uma chave no objeto
                if(!(game.genre in gamesByGenre)) {
                    //adiciona o gênero como chave e cria uma lista vazia para add jogos
                    gamesByGenre[game.genre] = []
                }
                //adiciona o jogo atual à lista de jogos associada ao gênero correspondente
                gamesByGenre[game.genre].push(game)
            });
            
            const sortedGames = Object.keys(gamesByGenre).sort() //sorted = ordenados
            setGenres(sortedGames.map(genre => ({ //Para cada gênero no array sortedGenres, faça um mapeamento.
                genre, //o gênero
                games: gamesByGenre[genre] //lista de jogos correspondente do gênero
            })))
        })
        .catch((err) => {
            console.log('Error > ', err)
        })
    }, [])

    return (
        <div className="container">
            {/* mapeia o array genres e pega o gênero e os games correspondentes */}
            {genres.map(({genre, games}) => (
                <div key={genre} className="container-cards-categories">
                    {/* Cada gênero é usado como chave única para identificar o elemento no DOM */}
                    <h2>{genre}</h2>
                    <div className="row grid-categories-cards">
                        {/* O método map é usado para iterar sobre os jogos de cada gênero */}
                        {games.map(game => (
                            <div key={game.id} className="col-2 px-0 m-2">
                                {/* Cada jogo é representado por um componente Card */}
                                <Card url_image={game.url_image} name={game.name}></Card>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        
    )
    
}