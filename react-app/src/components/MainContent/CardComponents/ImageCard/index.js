import { useState } from 'react'
import './ImageCard.css'

const ImageCard = ({image}) => {

    return (
        <div className="news-image-container">
            <img 
                src={image ? image :'https://archives.bulbagarden.net/media/upload/thumb/7/75/Iris_Dragonite.png/800px-Iris_Dragonite.png' } 
                alt="basic-alt" 
            />
        </div> 
    )

}

export default ImageCard