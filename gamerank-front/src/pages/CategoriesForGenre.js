import React, { useEffect, useState } from 'react'
import Card from "../categories_components/Card";
import { useParams } from 'react-router-dom';
import Modal from '../categories_components/Modal';

export default function CategoriesForGenre() {
    /*
    No React Router, a propriedade match é fornecida automaticamente aos componentes renderizados por uma rota.

    a propriedade match é passada automaticamente para o componente renderizado (CategoriesForGenre). 
    Isso permite que você acesse o parâmetro de rota :genre da URL usando match.params.genre
    */
    const { genre } = useParams()
    const[games, setGames] = useState([])
    const[isOpen, setIsOpen] = useState(false)
    const[selectedGame, setSelectedGame] = useState(null)

    const handleCardClick = (game) => {
        setIsOpen(true)
        setSelectedGame(game)
    }

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
            <div className='categories-for-genres-bg'>
                <div key={genre} className="container-cards-categories">
                    <h2>{genre}</h2>
                    <div className="row">
                        {/* O método map é usado para iterar sobre os jogos de cada gênero */}
                        {games.map(game => (
                            <div key={game.id} className="col-2">
                                {/* Cada jogo é representado por um componente Card */}
                                <Card url_image={game.url_image} name={game.name} onClick={() => handleCardClick(game)}></Card>

                                <Modal open={isOpen}>
                                    <p>{game.name}</p>
                                </Modal>
                            </div>
                        ))}
                        <Modal open={isOpen}>
                            {selectedGame && (
                                <div className="container modal-content">
                                    <i className="bi bi-x-lg modal-close-button" onClick={() => setIsOpen(false)}></i>
                                    <div className="modal-top-infos">
                                        <img src={`${selectedGame.url_image}`} alt={`Capa do jogo ${selectedGame.name}`}></img>
                                        <div className="modal-details">
                                            <div className="modal-header">
                                                <h2>{selectedGame.name}</h2>
                                                <p className="modal-game-year">{selectedGame.release_year}</p>
                                            </div>
                                            <p className="modal-game-description">{selectedGame.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    )
}
