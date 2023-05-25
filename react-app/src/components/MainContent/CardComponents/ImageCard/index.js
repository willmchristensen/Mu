import { useState } from 'react'
import './ImageCard.css'
import {NavLink} from 'react-router-dom';

const ImageCard = ({image}) => {

    const handleImageError = (e) => {
        e.target.src = 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg';
    }
    if(!image) return null;
    return (
        <div
            className="news-image-container"
        >
            <img
                src={image}
                alt="basic-alt"
                onError={handleImageError}
            />
        </div>
    )

}

export default ImageCard
