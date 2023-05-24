import './PopularCardImage.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

const PopularCardImage = ({event}) => {
    const handleImageError = (e) => {
        e.target.src = 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg';
    }
    return (
        <NavLink 
            className="popular-image-container"
            to={`/events/${event.id}`}
        >
            <img 
                src={event.imageUrl} 
                alt="basic-alt" 
                className='post-image'
                onError={handleImageError}
            />
        </NavLink> 
    )

}

export default PopularCardImage