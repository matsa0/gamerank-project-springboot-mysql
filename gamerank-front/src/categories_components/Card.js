import React from 'react'

export default function Card({url_image, name, onClick}) {

  return (
    <div className='container-unique-card' onClick={onClick}>
      <div className="card card-categories">
          <img src={url_image} alt={"Imagem do jogo " + name} />
      </div>
      <p>{name}</p>
    </div>
  )
}
