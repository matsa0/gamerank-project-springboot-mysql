import React, { useEffect, useState } from "react";
import Card from "../categories_components/Card";
import { Link } from "react-router-dom";
import Modal from "../categories_components/Modal";


export default function Categories() {

    const[genres, setGenres] = useState([])

    const[isOpen, setIsOpen] = useState(false)

    const[selectedGame, setSelectedGame] = useState(null)

    const handleCardClick = (game) => {
        setSelectedGame(game)
        setIsOpen(true)
    }

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
                    <div className="row">
                        {/* slice(index[start], index[end]). O método map é usado para iterar sobre os jogos de cada gênero */}
                        {games.slice(0, 6).map(game => (
                            <div key={game.id} className="col-2">
                                {/* Cada jogo é representado por um componente Card */}
                                <Card url_image={game.url_image} name={game.name} onClick={() => handleCardClick(game)}></Card>
                            </div>
                        ))}
                    </div>
                    <Link className="view-all" to={`/categories/${genre}`}>Ver Tudo</Link>
                </div>
            ))}
            <Modal open={isOpen}>
                {selectedGame && (
                    <div className="container modal-content">
                        <i className="bi bi-x-lg modal-close-button" onClick={() => setIsOpen(false)}></i>
                        <div className="modal-top-infos">
                            <div className="modal-header-and-image">
                                <img src={`${selectedGame.url_image}`} alt={`Capa do jogo ${selectedGame.name}`}></img>
                                <div className="modal-header">
                                    <h2>{selectedGame.name}</h2>
                                    <p className="modal-game-year">{selectedGame.release_year}</p>
                                </div>
                            </div>
                            <p className="modal-game-description">{selectedGame.description}</p>
                        </div>
                    </div>
                )}
            </Modal>

        </div>
    )
    
}