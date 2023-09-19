import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import './MusicImageCard.css'

const MusicImageCard = ({music}) => {

    const handleImageError = (e) => {
        e.target.src = 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg';
    }
    if(!music.imageUrl) return null;
    return (
        <NavLink
            to={`/music/${music.id}`}
            className="music-image-container"
        >
            <img
                src={music.imageUrl}
                alt="basic-alt"
                onError={handleImageError}
            />
        </NavLink>
    )

}

export default MusicImageCard
