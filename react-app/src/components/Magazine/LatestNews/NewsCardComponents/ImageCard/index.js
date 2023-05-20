import './ImageCard.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

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
