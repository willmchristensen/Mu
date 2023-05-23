import { useState } from 'react'
import './ImageCard.css'

const ImageCard = ({image}) => {

    return (
        <div className="news-image-container">
            <img
                src={image}
                alt="basic-alt"
            />
        </div>
    )

}

export default ImageCard
